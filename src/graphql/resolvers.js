import { combineResolvers } from 'apollo-resolvers';
import { DateTimeResolver, EmailAddressResolver } from 'graphql-scalars';

import * as mutations from './resolvers/mutations';
import * as queries from './resolvers/queries';

export default combineResolvers([
	{
		DateTime: DateTimeResolver,
		EmailAddress: EmailAddressResolver,
	},
	mutations.login,
	mutations.logout,
	mutations.removeFavorite,
	mutations.saveFavorite,
	queries.job,
	queries.jobs,
	queries.user,
	{
		User: {
			favorites(parent, _, { dataSources: { jobService, userService } }) {
				const favoritesIds = Array.from(
					userService.findById(parent.id).favorites
				);

				return favoritesIds.map(jobId => jobService.findById(jobId));
			},
		},
	},
]);
