import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

import withData from './withData';

const {
	publicRuntimeConfig: { apiEndpoint },
} = getConfig();

const config = ctx => {
	const sessionToken = ctx?.req?.cookies?.session;
	const headers = sessionToken ? { Cookie: `session=${sessionToken}` } : {};

	return {
		link: new HttpLink({
			credentials: 'same-origin',
			headers,
			uri: apiEndpoint,
			fetchOptions: {
				credentials: 'same-origin',
			},
		}),
	};
};

export default withData(config);
