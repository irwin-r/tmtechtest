import { AuthenticationError } from 'apollo-server-errors';

import { JWT_COOKIE_NAME } from '../../../constants';
import { createTokenExpiryDate } from '../../../utils';

import { baseResolver } from '../acl';

const login = baseResolver.createResolver(
	(parent, { email }, { dataSources, res }) => {
		const { sessionService, userService } = dataSources;

		const user = userService.findByEmail(email);

		if (!user) {
			throw new AuthenticationError('Invalid user');
		}

		const expires = createTokenExpiryDate();
		const token = sessionService.create(user.id, expires);

		res.cookie(JWT_COOKIE_NAME, token, {
			expires,
			httpOnly: true,
			sameSite: true,
		});

		return user;
	}
);

export default {
	Mutation: {
		login,
	},
};
