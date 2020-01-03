import gql from 'graphql-tag';

import { USER_ATTRIBUTES } from '../graphql/fragments';

export const SAVE_FAVORITE_MUTATION = gql`
	mutation SaveFavorite($jobId: String!) {
		saveFavorite(jobId: $jobId) {
			...userAttributes
		}
	}

	${USER_ATTRIBUTES}
`;

export const REMOVE_FAVORITE_MUTATION = gql`
	mutation RemoveFavorite($jobId: String!) {
		removeFavorite(jobId: $jobId) {
			...userAttributes
		}
	}

	${USER_ATTRIBUTES}
`;
