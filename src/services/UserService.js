import cloneDeep from 'lodash/cloneDeep';

import normalisedStringComparison from '../utils/normalisedStringComparison';

import USER_SEED_DATA from '../../data/users.json';

export default class UserService {
	constructor(seedData = USER_SEED_DATA) {
		this.users = seedData.map(({ favorites, ...user }) => ({
			...cloneDeep(user),
			favorites: new Set(favorites), // Why are we using a set?  life becomes easier :p
		}));
	}

	findAll() {
		return this.users;
	}

	findByEmail(email) {
		return this.users.find(u => normalisedStringComparison(email, u.email));
	}

	findById(id) {
		return this.users.find(job => job.id === id);
	}

	update(user) {
		const index = this.users.findIndex(u => u.id === user.id);

		if (!index) {
			return;
		}

		this.users[index] = {
			...this.users[index],
			...user,
		};
	}

	validateCredentials(email /* , password */) {
		const user = this.findByEmail(email);

		// In the real world, we'd now hash the provided password and do a comparison

		return !!user;
	}
}
