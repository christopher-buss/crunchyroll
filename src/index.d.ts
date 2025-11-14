/** An animation asset. This stores the animation length and the keyframes. */
export interface AnimationAsset {
	/** Total length of the animation in seconds. */
	readonly length: number;
}

/** Describes the state of an animation. It is agnostic to the animation asset. */
export interface AnimationTrack {
	/** Animation time position (0-1. */
	alpha: number;
	/**
	 * Priority of this animation (higher priority animations override lower
	 * priority ones).
	 */
	priority: number;
	/** Fade in time (0-1). */
	startFadeTime: number;
	/** Fade out time (0-1). */
	stopFadeTime: number;
	/** Weight of this animation. */
	weight: number;
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

/** An animated rig. Pass this into the animation solver. */
export interface Rig {
	/**
	 * The result table of the rig. Structured as Map<limb name, CFrame>. After
	 * calling solveAnimation, this will contain the computed CFrames for each
	 * limb.
	 */
	resultCoordinateFrames: Map<string, CFrame>;
}

/**
 * Create a rig from a limb hierarchy. This will return a Rig.
 *
 * @param limbHierarchy - The root limb info containing the hierarchy structure.
 * @returns A Rig that can be used with the animation solver.
 */
export function createRig(limbHierarchy: LimbInfo): Rig;

/**
 * Load a keyframe sequence from Roblox. This will return an AnimationAsset.
 *
 * @param keyframeSequence - The KeyframeSequence instance from Roblox.
 * @param rig - The rig to load the animation for.
 * @returns An AnimationAsset that can be used with the solver.
 */
export function loadKeyframeSequence(keyframeSequence: KeyframeSequence, rig: Rig): AnimationAsset;

/**
 * The primary function of the module. This will solve the animation for a rig.
 *
 * Example:.
 *
 * ```ts
 * crunchyroll.solveAnimation(
 * 	rig,
 * 	new Map([
 * 		[
 * 			animation,
 * 			{
 * 				priority: 1,
 * 				startFadeTime: 0,
 * 				stopFadeTime: 0,
 * 				weight: 1,
 * 				alpha: 0.5,
 * 			},
 * 		],
 * 	]),
 * 	character.HumanoidRootPart.CFrame,
 * );
 * ```
 *
 * @param rig - The rig to animate.
 * @param tracks - Map of AnimationAsset to AnimationTrack describing which
 *   animations to play.
 * @param root - The root CFrame to use as the base transform.
 */
export function solveAnimation(
	rig: Rig,
	tracks: Map<AnimationAsset, AnimationTrack>,
	root: CFrame,
): void;
