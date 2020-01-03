import gql from 'graphql-tag';

import { USER_ATTRIBUTES } from '../../graphql/fragments';

// eslint-disable-next-line import/prefer-default-export
export const GET_USER_QUERY = gql`
	query {
		user {
			...userAttributes
		}
	}

	${USER_ATTRIBUTES}
`;
