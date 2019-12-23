import { baseResolver } from '../acl';

const job = baseResolver.createResolver(
	(parent, { jobId }, { dataSources: { jobService } }) =>
		jobService.findById(jobId)
);

export default {
	Query: { job },
};
