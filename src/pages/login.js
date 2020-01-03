import Head from 'next/head';
import React from 'react';

import { LoginForm, Redirect } from '../components';
import { useUserContext } from '../hooks';
import { Container, Grid, GridCell } from '../primitives';

const LoginPage = () => {
	const user = useUserContext();

	if (user) {
		return <Redirect to="/profile" />;
	}

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<Container>
				<Grid>
					<GridCell width={3} />
					<GridCell width={6}>
						<LoginForm />
					</GridCell>
					<GridCell width={3} />
				</Grid>
			</Container>
		</>
	);
};

export default LoginPage;
