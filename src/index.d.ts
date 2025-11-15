import type { AnimationTrack } from "./animation-solver";
import type { Identity as Rig } from "./rig";
import type { Identity as AnimationAsset, KeyframeSequence } from "./roblox/animation-asset";

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

export type { AnimationTrack } from "./animation-solver";
export type { LimbInfo, Identity as Rig } from "./rig";
export type {
	Identity as AnimationAsset,
	KeyframeHole,
	PoseNode,
	Poses,
} from "./roblox/animation-asset";

const Crunchyroll = {
	createRig,
	loadKeyframeSequence,
	solveAnimation,
};

export default Crunchyroll;
