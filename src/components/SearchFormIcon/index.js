import Octicon, { Search } from '@githubprimer/octicons-react';
import { css } from 'emotion';
import React from 'react';

const SearchFormIcon = () => (
	<div
		className={css({
			alignItems: 'center',
			bottom: 0,
			color: '#999',
			display: 'flex',
			justifyContent: 'center',
			pointerEvents: 'none',
			position: 'absolute',
			top: 0,
			width: 52,
		})}
	>
		<Octicon size={24} icon={Search} />
	</div>
);

export default SearchFormIcon;
