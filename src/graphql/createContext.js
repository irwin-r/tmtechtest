const createContext = ({ req, ...rest }) => {
	const { session } = req;

	return {
		...rest,
		req,
		session,
	};
};

export default createContext;
