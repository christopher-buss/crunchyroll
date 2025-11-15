/** An animation asset. This stores the animation length and the keyframes. */

export interface Identity {
	readonly keyframeHoles: Map<number, Array<KeyframeHole>>;
	readonly keyframePoses: Array<Poses>;
	readonly keyframeTimes: Array<number>;
	/** Total length of the animation in seconds. */
	readonly length: number;
}

export type KeyframeHole = Array<number>;

export interface PoseNode {
	easingFunction: (alpha: number) => number;
	position: vector;
	quatScalar: number;
	quatVector: vector;
}

export type Poses = Array<PoseNode>;
