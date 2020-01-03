import { Check, Star } from '@githubprimer/octicons-react';
import PropTypes from 'prop-types';
import React from 'react';

import { useFavorite } from '../../hooks';
import { IconButton } from '../../primitives';

const FavoriteButton = ({ jobId, ...props }) => {
	const [isFavorite, toggleFavorite] = useFavorite(jobId);

	return (
		<IconButton
			onClick={toggleFavorite}
			icon={isFavorite ? Check : Star}
			{...props}
		>
			{isFavorite ? 'Saved' : 'Save'}
		</IconButton>
	);
};

FavoriteButton.propTypes = {
	jobId: PropTypes.string.isRequired,
};

export default FavoriteButton;
