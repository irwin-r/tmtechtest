import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const GET_JOB_QUERY = gql`
	query Job($jobId: String!) {
		job(jobId: $jobId) {
			dateAdded
			description
			id
			labels
			logo
			source
			suburb
			title
		}
	}
`;
