import { createResolver } from 'apollo-resolvers';
import { ForbiddenError } from 'apollo-server-errors';

export const baseResolver = createResolver(
	null,
	(root, args, context, error) => error
);

export const isAuthenticatedResolver = baseResolver.createResolver(
	(root, args, { session }) => {
		if (!session) {
			throw new ForbiddenError();
		}
	}
);
