import withApollo from 'next-with-apollo';

import { createApolloClient } from '../utils';

export default withApollo(({ ctx, initialState = {} }) =>
	createApolloClient(ctx, initialState)
);
