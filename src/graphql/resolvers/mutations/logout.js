import { JWT_COOKIE_NAME } from '../../../constants';

import { authenticatedResolver } from '../acl';

const logout = authenticatedResolver.createResolver(
	(parent, _, { req, res }) => {
		if (!req.cookies[JWT_COOKIE_NAME]) {
			return false;
		}

		res.clearCookie(JWT_COOKIE_NAME);

		return true;
	}
);

export default {
	Mutation: {
		logout,
	},
};
