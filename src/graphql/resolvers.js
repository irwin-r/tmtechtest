import { DateTimeResolver, EmailAddressResolver } from 'graphql-scalars';

import {
	login,
	logout,
	removeFavorite,
	saveFavorite,
} from './resolvers/mutations';

import { job, jobs, user } from './resolvers/queries';

export default {
	DateTime: DateTimeResolver,

	EmailAddress: EmailAddressResolver,

	Query: {
		job,
		jobs,
		user,
	},

	Mutation: {
		login,
		logout,
		removeFavorite,
		saveFavorite,
	},

	User: {
		favorites(parent, _, { dataSources: { jobService, userService } }) {
			const favoritesIds = Array.from(
				userService.findById(parent.id).favorites
			);

			return favoritesIds.map(jobId => jobService.findById(jobId));
		},
	},
};
