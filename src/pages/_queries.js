import gql from 'graphql-tag';

export const GET_JOBS_QUERY = gql`
	query Jobs($searchTerm: String, $limit: Int, $offset: Int) {
		jobs(searchTerm: $searchTerm, limit: $limit, offset: $offset) {
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
