import { authenticatedResolver } from '../acl';

const user = authenticatedResolver.createResolver((parent, _, context) => {
	const {
		dataSources: { userService },
		session,
	} = context;

	const currentUser = userService.findById(session.userId);

	if (!currentUser) {
		throw new Error('User not found');
	}

	return currentUser;
});

export default {
	Query: { user },
};
