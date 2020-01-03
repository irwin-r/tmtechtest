import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { UserContext } from '../../context';

import { GET_USER_QUERY } from './queries';

const UserProvider = ({ children }) => {
	const { data } = useQuery(GET_USER_QUERY);

	return (
		<UserContext.Provider value={data?.user}>{children}</UserContext.Provider>
	);
};

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserProvider;
