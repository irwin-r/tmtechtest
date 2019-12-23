import { baseResolver } from '../acl';

const jobs = baseResolver.createResolver(
	(parent, _, { dataSources: { jobService } }) => jobService.findAll()
);

export default {
	Query: { jobs },
};
