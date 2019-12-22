import jwt from 'jsonwebtoken';

import getJwtSecret from '../utils/getJwtSecret';
import createTokenExpiryDate from '../utils/createTokenExpiryDate';

export default class SessionService {
	constructor(secret = getJwtSecret()) {
		this.secret = secret;
	}

	create(userId, expires = createTokenExpiryDate()) {
		return jwt.sign({ exp: expires.getTime() / 1000, userId }, this.secret);
	}

	verify(token) {
		return jwt.verify(token, this.secret);
	}
}
