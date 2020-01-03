import ApolloClient, { InMemoryCache } from 'apollo-boost';
import getConfig from 'next/config';

const createApolloClient = (context, initialState = {}) => {
	const {
		publicRuntimeConfig: { apiEndpoint: uri },
	} = getConfig();

	const sessionToken = context?.req?.cookies?.session;

	const headers = sessionToken ? { Cookie: `session=${sessionToken}` } : {};

	const cache = new InMemoryCache().restore(initialState);

	return new ApolloClient({ cache, headers, uri });
};

export default createApolloClient;
