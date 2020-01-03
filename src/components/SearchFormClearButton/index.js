import Octicon, { X } from '@githubprimer/octicons-react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

const SearchFormClearButton = ({ onClick }) => (
	<div
		className={css({
			alignItems: 'center',
			bottom: 0,
			display: 'flex',
			justifyContent: 'center',
			position: 'absolute',
			right: 0,
			top: 0,
			width: 52,
		})}
	>
		<button
			onClick={onClick}
			className={css({
				alignItems: 'center',
				backgroundColor: '#bbb',
				border: 0,
				borderRadius: '50%',
				color: 'white',
				display: 'flex',
				height: 24,
				justifyContent: 'center',
				outline: 0,
				width: 24,

				':focus, :hover': {
					backgroundColor: '#999',
				},
				':active': {
					backgroundColor: '#888',
				},
			})}
			type="reset"
		>
			<Octicon icon={X} />
		</button>
	</div>
);

SearchFormClearButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default SearchFormClearButton;
