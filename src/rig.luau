export type LimbInfo = {
	c0: CFrame,
	c1: CFrame,
	name: string,
	children: { LimbInfo }?,
}

export type Limb = {
	name: string,
	c0: CFrame,
	c1: CFrame,
	dependsOn: string,
}

export type LimbTransform = {
	priority: number,
	position: vector,
	quatVector: vector,
	quatScalar: number,
}

export type Identity = {
	limbs: { Limb },
	limbTransforms: { LimbTransform },
	--- used in animation loading to quickly map pose name to limb index
	limbNameToIndex: { [string]: number },

	resultCoordinateFrames: { [string]: CFrame },
}

local function topological_sort(array: { Limb }, node: LimbInfo)
	if not node.children then
		return
	end

	for _, value in node.children do
		table.insert(array, {
			name = value.name,
			dependsOn = node.name,
			c0 = value.c0,
			c1 = value.c1:Inverse(),
		})

		topological_sort(array, value)
	end
end

local function create_rig(root: LimbInfo): Identity
	local limbs: { Limb } = {}
	table.insert(limbs, {
		name = root.name,
		dependsOn = "root",
		c0 = root.c0,
		c1 = root.c1:Inverse(),
	})

	topological_sort(limbs, root)

	local limbTransforms: { LimbTransform } = {}
	local limbNameToIndex: { [string]: number } = {}

	for index, limb in limbs do
		limbTransforms[index] = {
			priority = -1,
			position = vector.zero,
			quatVector = vector.zero,
			quatScalar = 1,
		}
		limbNameToIndex[limb.name] = index
	end

	return {
		limbs = limbs,
		limbTransforms = limbTransforms,
		limbNameToIndex = limbNameToIndex,

		resultCoordinateFrames = {},
	}
end

return {
	create_rig = create_rig,
	createRig = create_rig,
}
