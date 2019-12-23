const getJob = (parent, { jobId }, { dataSources: { jobService } }) =>
	jobService.findById(jobId);

export default getJob;
