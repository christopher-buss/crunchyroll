/**
 * Easing function type. Takes a normalized value (0-1) and returns an eased
 * value.
 */
export type EasingFunction = (value: number) => number;

/** Linear easing (no easing). Returns the input value unchanged. */
export const linear: EasingFunction;

/** Constant easing. Always returns 0, useful for holding a pose. */
export const constant: EasingFunction;

/** Cubic ease-in. Accelerates from zero velocity. */
export const cubicIn: EasingFunction;

/** Cubic ease-out. Decelerates to zero velocity. */
export const cubicOut: EasingFunction;

/** Cubic ease-in-out. Accelerates from zero, then decelerates to zero velocity. */
export const cubicInOut: EasingFunction;

/** Bounce ease-in. Creates a bouncing effect at the start of the animation. */
export const bounceIn: EasingFunction;

/** Bounce ease-out. Creates a bouncing effect at the end of the animation. */
export const bounceOut: EasingFunction;

/**
 * Bounce ease-in-out. Creates a bouncing effect at both the start and end of
 * the animation.
 */
export const bounceInOut: EasingFunction;

/**
 * Elastic ease-in. Creates an elastic/spring-like effect at the start of the
 * animation.
 */
export const elasticIn: EasingFunction;

/**
 * Elastic ease-out. Creates an elastic/spring-like effect at the end of the
 * animation.
 */
export const elasticOut: EasingFunction;

/**
 * Elastic ease-in-out. Creates an elastic/spring-like effect at both the start
 * and end of the animation.
 */
export const elasticInOut: EasingFunction;
