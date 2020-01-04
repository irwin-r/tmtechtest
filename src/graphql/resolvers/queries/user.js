import { baseResolver } from '../acl';

const user = baseResolver.createResolver((parent, _, context) => context.user);

export default {
	Query: { user },
};
