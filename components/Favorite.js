import Octicon, { Check, Star } from '@githubprimer/octicons-react';
import { css } from 'emotion';
import React from 'react';

import { FlexGroup, IconButton } from '../primitives';
import { UserConsumer } from './UserContext';
import { colors, gutter } from '../utils';

const handleClick = (user, id, isSaved) => () => {
	if (!user.isLoggedIn) {
		return alert('You must be logged in to favorite.');
	}

	if (isSaved) {
		user.removeFavorite(id);
	} else {
		user.addFavorite(id);
	}
};

export const Favorite = ({ children, id, ...props }) => (
	<UserConsumer>
		{({ user }) => {
			const isSaved =
				Array.isArray(user.favorites) && user.favorites.includes(id);
			const onClick = handleClick(user, id, isSaved);
			return children({ isSaved, onClick });
		}}
	</UserConsumer>
);

export const FavoriteButton = ({ id, ...props }) => (
	<Favorite id={id}>
		{({ isSaved, onClick }) => (
			<IconButton onClick={onClick} icon={isSaved ? Check : Star} {...props}>
				{isSaved ? 'Saved' : 'Save'}
			</IconButton>
		)}
	</Favorite>
);

export const FavoriteInline = ({ id }) => (
	<Favorite id={id}>
		{({ isSaved, onClick }) => (
			<button
				onClick={onClick}
				className={css({
					background: isSaved ? colors.green['50'] : colors.amber['50'],
					border: 0,
					borderRadius: 2,
					color: isSaved ? colors.green['500'] : colors.amber['800'],
					cursor: 'pointer',
					padding: `${gutter / 4}px ${gutter}px`,

					':hover, :focus': {
						background: isSaved ? colors.green['100'] : colors.amber['100'],
						outline: 0,
					},
				})}
			>
				<FlexGroup>
					<Octicon icon={isSaved ? Check : Star} />
					{isSaved ? 'Saved' : 'Save'}
				</FlexGroup>
			</button>
		)}
	</Favorite>
);
