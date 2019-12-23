const getJobs = (parent, _, { dataSources: { jobService } }) =>
	jobService.findAll();

export default getJobs;
