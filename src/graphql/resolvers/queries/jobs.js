import { baseResolver } from '../acl';

const jobs = baseResolver.createResolver(
	(
		parent,
		{ limit = 20, offset = 0, searchTerm },
		{ dataSources: { jobService } }
	) => {
		let results = jobService.findAll();

		if (searchTerm) {
			results = results.filter(job =>
				job.title.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		return results.slice(offset, offset + limit);
	}
);

export default {
	Query: { jobs },
};
