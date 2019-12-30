import ApolloClient, { InMemoryCache } from 'apollo-boost';
import getConfig from 'next/config';
import withApollo from 'next-with-apollo';

const {
	publicRuntimeConfig: { apiEndpoint },
} = getConfig();

export default withApollo(
	({ initialState = {} }) =>
		new ApolloClient({
			uri: apiEndpoint,
			cache: new InMemoryCache().restore(initialState),
		})
);
