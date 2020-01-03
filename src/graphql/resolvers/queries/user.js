import { authenticatedResolver } from '../acl';

const user = authenticatedResolver.createResolver(
	(parent, _, context) => context.user
);

export default {
	Query: { user },
};
