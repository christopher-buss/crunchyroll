/** An animated rig. Pass this into the animation solver. */
export interface Identity {
	/**
	 * Map from limb name to its index in the limbs array. Used for quickly
	 * looking up limbs by name.
	 */
	limbNameToIndex: Map<string, number>;

	/** Array of limbs in the rig, ordered topologically. */
	limbs: Array<Limb>;

	/**
	 * Array of limb transforms used during animation solving. Indexed by limb
	 * index.
	 */
	limbTransforms: Array<LimbTransform>;

	/**
	 * The result table of the rig. Structured as Map<limb name, CFrame>. After
	 * calling solveAnimation, this will contain the computed CFrames for each
	 * limb.
	 */
	resultCoordinateFrames: Map<string, CFrame>;
}

/** Information about a limb in the rig. */
export interface Limb {
	/** The C0 CFrame of the joint. */
	c0: CFrame;
	/** The C1 CFrame of the joint. */
	c1: CFrame;
	/** Name of the limb this limb depends on. */
	dependsOn: string;
	/** Name of the limb. */
	name: string;
}

/**
 * Information about a limb in the rig hierarchy. This represents a joint/motor
 * in the character skeleton.
 */
export interface LimbInfo {
	/** The C0 CFrame of the joint. */
	c0: CFrame;
	/** The C1 CFrame of the joint. */
	c1: CFrame;
	/** Optional child limbs in the hierarchy. */
	children?: Array<LimbInfo>;
	/** Name of the limb/joint. */
	name: string;
}

/** Transform data for a limb during animation. */
export interface LimbTransform {
	/** Position vector. */
	position: Vector3;
	/** Priority of the current animation affecting this limb. */
	priority: number;
	/** Quaternion scalar component. */
	quatScalar: number;
	/** Quaternion vector component. */
	quatVector: Vector3;
}
