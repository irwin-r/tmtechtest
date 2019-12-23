export { colors } from './colors';
export { default as createTokenExpiryDate } from './createTokenExpiryDate';
export * from './environment';
export { default as getJwtSecret } from './getJwtSecret';
export { default as getListenPort } from './getListenPort';
export { history } from './history';
export { throttle } from './throttle';
// export { generateLoremIpsum, Lorem } from './lorem';

export const gutter = 8;
export const borderRadius = 3;

export const formatDate = dateString =>
	new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
