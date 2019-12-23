const getUser = (parent, _, context) => {
	const {
		dataSources: { userService },
		session,
	} = context;

	const user = userService.findById(session.userId);

	if (!user) {
		throw new Error('User not found');
	}

	return user;
};

export default getUser;
