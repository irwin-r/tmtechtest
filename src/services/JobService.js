import cloneDeep from 'lodash/cloneDeep';

import JOB_SEED_DATA from '../../data/jobs.json';

export default class JobService {
	constructor(seedData = JOB_SEED_DATA) {
		this.jobs = cloneDeep(seedData);
	}

	findAll() {
		return this.jobs;
	}

	findById(id) {
		return this.jobs.find(job => job.id === id);
	}
}
