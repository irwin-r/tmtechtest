import React from 'react';
import Head from 'next/head';

import { FavoritesList, Redirect } from '../components';
import { withApollo } from '../hoc';
import { useUserContext } from '../hooks';
import { Page } from '../primitives';

const Profile = () => {
	const user = useUserContext();

	if (!user) {
		return <Redirect to="/" />;
	}

	return (
		<Page
			main={
				<>
					<Head>
						<title>Your Profile</title>
					</Head>
					<FavoritesList favorites={user.favorites} />
				</>
			}
		/>
	);
};

export default withApollo(Profile);
