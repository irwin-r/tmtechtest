import Octicon, { Check, Star } from '@githubprimer/octicons-react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import { colors, gutter } from '../../constants';
import { useFavorite } from '../../hooks';
import { FlexGroup } from '../../primitives';

const FavoriteInline = ({ jobId }) => {
	const [isFavorite, toggleFavorite] = useFavorite(jobId);

	return (
		<button
			onClick={toggleFavorite}
			className={css({
				background: isFavorite ? colors.green['50'] : colors.amber['50'],
				border: 0,
				borderRadius: 2,
				color: isFavorite ? colors.green['500'] : colors.amber['800'],
				cursor: 'pointer',
				padding: `${gutter / 4}px ${gutter}px`,

				':hover, :focus': {
					background: isFavorite ? colors.green['100'] : colors.amber['100'],
					outline: 0,
				},
			})}
			type="button"
		>
			<FlexGroup>
				<Octicon icon={isFavorite ? Check : Star} />
				{isFavorite ? 'Saved' : 'Save'}
			</FlexGroup>
		</button>
	);
};

FavoriteInline.propTypes = {
	jobId: PropTypes.string.isRequired,
};

export default FavoriteInline;
