import { useMutation } from '@apollo/react-hooks';

import { REMOVE_FAVORITE_MUTATION, SAVE_FAVORITE_MUTATION } from './queries';
import useUserContext from './useUserContext';

const useFavorite = jobId => {
	const user = useUserContext();
	const isFavorite = user?.favorites?.find(({ id }) => id === jobId) ?? false;
	const [saveFavorite] = useMutation(SAVE_FAVORITE_MUTATION, {
		variables: { jobId },
	});
	const [removeFavorite] = useMutation(REMOVE_FAVORITE_MUTATION, {
		variables: { jobId },
	});

	if (!user) {
		return [false, () => alert('You must be logged in to favorite.')];
	}

	return [isFavorite, isFavorite ? removeFavorite : saveFavorite];
};

export default useFavorite;
