import gql from 'graphql-tag';

// eslint-disable-next-line import/prefer-default-export
export const LOGOUT_QUERY = gql`
	mutation {
		logout
	}
`;
