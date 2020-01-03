const createContext = dataSources => ({ req, ...rest }) => {
	const { session } = req;

	const user = session
		? dataSources().userService.findById(session.userId)
		: undefined;

	return {
		...rest,
		req,
		user,
		session,
	};
};

export default createContext;
