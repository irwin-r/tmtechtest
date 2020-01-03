import PropTypes from 'prop-types';
import React from 'react';

import { NavBarItem } from '..';

const NavBarUsername = ({ username }) => {
	const avatar = `https://api.adorable.io/avatars/64/${username}.png`;

	return (
		<NavBarItem avatar={avatar} to="/profile">
			{username}
		</NavBarItem>
	);
};

NavBarUsername.propTypes = {
	username: PropTypes.string.isRequired,
};

export default NavBarUsername;
