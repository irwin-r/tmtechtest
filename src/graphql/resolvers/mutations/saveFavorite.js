import { UserInputError } from 'apollo-server-errors';

import { authenticatedResolver } from '../acl';

const saveFavorite = authenticatedResolver.createResolver(
	(parent, { jobId }, context) => {
		const {
			dataSources: { jobService, userService },
			user,
		} = context;

		const job = jobService.findById(jobId);

		if (!job) {
			throw new UserInputError('Job does not exist');
		}

		user.favorites.add(jobId);

		// In reality, the below isn't actually needed as user.favourites is a REFERENCE to a Set
		// But in the real world you would need to persist this to a database
		userService.update(user);

		return user;
	}
);

export default {
	Mutation: {
		saveFavorite,
	},
};
