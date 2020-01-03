export { default as createApolloClient } from './createApolloClient';
export { default as createTokenExpiryDate } from './createTokenExpiryDate';
export * from './environment';
export { default as getJwtSecret } from './getJwtSecret';
export { default as getListenPort } from './getListenPort';
export * from './propTypes';

export const formatDate = dateString =>
	new Date(dateString).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
