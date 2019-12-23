import { JWT_COOKIE_NAME } from '../../../constants';

const logout = (parent, _, { req, res }) => {
	if (!req.cookies[JWT_COOKIE_NAME]) {
		return false;
	}

	res.clearCookie(JWT_COOKIE_NAME);

	return true;
};

export default logout;
