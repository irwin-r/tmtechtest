import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { SignOut } from '@githubprimer/octicons-react';
import React from 'react';

import { NavBarItem } from '..';

import { LOGOUT_QUERY } from './queries';

const NavBarLogout = () => {
	const apolloClient = useApolloClient();

	const [logout] = useMutation(LOGOUT_QUERY, {
		onCompleted: () => apolloClient.resetStore(),
	});

	return (
		<NavBarItem icon={SignOut} onClick={logout}>
			Logout
		</NavBarItem>
	);
};

export default NavBarLogout;
