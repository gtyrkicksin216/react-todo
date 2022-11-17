/**
 * Allows for mixing of strings, ternary, and short circuit classes
 * and filters out `false` or empty string values. Named with a `k`
 * to avoid collision or confusion with `element.classList`
 */
export const klassList = (...args: Array<string|boolean>) => {
	return args
		.filter(e => typeof e === 'string')
		.filter(c => !!c)
		.join(' ')
}