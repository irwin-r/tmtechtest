import { UserInputError } from 'apollo-server-errors';

const removeFavorite = (parent, { jobId }, context) => {
	const {
		dataSources: { jobService, userService },
		session,
	} = context;

	const user = userService.findById(session.userId);
	const job = jobService.findById(jobId);

	if (!job) {
		throw new UserInputError('Job does not exist');
	}

	user.favorites.add(jobId);

	// In reality, the below isn't actually needed as user.favourites is a REFERENCE to a Set
	// But in the real world you would need to persist this to a database
	userService.update(user);

	return user;
};

export default removeFavorite;
