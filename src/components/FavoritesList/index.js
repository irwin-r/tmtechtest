import React from 'react';
import PropTypes from 'prop-types';

import { Card, H2 } from '../../primitives';
import { jobShape } from '../../utils';

import { JobItem, NoFavorites } from '..';

const FavoritesList = ({ favorites }) => {
	if (!Array.isArray(favorites) || favorites.length === 0) {
		return <NoFavorites />;
	}

	const items = favorites.map((job, index) => (
		<JobItem key={job.id} job={job} index={index} />
	));

	return (
		<>
			<H2>Saved Listings</H2>
			<Card>{items}</Card>
		</>
	);
};

FavoritesList.propTypes = {
	favorites: PropTypes.arrayOf(jobShape).isRequired,
};

export default FavoritesList;
