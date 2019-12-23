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
};
