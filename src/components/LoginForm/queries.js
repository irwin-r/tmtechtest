import gql from 'graphql-tag';

import { USER_ATTRIBUTES } from '../../graphql/fragments';

// eslint-disable-next-line import/prefer-default-export
export const LOGIN_MUTATION = gql`
	mutation Login($email: String!) {
		login(email: $email) {
			...userAttributes
		}
	}

	${USER_ATTRIBUTES}
`;
