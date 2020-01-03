import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const USER_ATTRIBUTES = gql`
	fragment userAttributes on User {
		email
		id
		name
		favorites {
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
