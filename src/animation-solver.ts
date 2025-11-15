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
