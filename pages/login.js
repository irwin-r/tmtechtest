import React, { Fragment } from 'react';
import { css } from 'emotion';
import Head from 'next/head';

import { Button, Container, Input, H2, Grid, GridCell } from '../primitives';
import { UserConsumer } from '../components/UserContext';
import { Redirect } from '../components/Router';

// ==============================
// FORM
// ==============================

export class LoginForm extends React.Component {
	state = { username: '', error: false };
	inputRef = React.createRef();
	componentDidMount() {
		this.inputRef.current.focus();
	}

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value,
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const { username } = this.state;

		if (!username) {
			this.setState({ error: 'Please provide a username' });
			return;
		}

		this.props.login(username);
	};

	render() {
		const { error, username } = this.state;
		return (
			<form action="/api/login" method="POST" onSubmit={this.handleSubmit}>
				<H2 as="h1">Login</H2>
				{error ? (
					<p className={css({ color: colors.red['600'] })}>{error}</p>
				) : null}
				<p>
					<label htmlFor="username">User name</label>
					<Input
						id="username"
						name="email"
						onChange={this.handleUsernameChange}
						ref={this.inputRef}
						type="text"
						value={username}
					/>
					<input type="hidden" name="redirect" value="/profile" />
				</p>
				<Button type="submit">Login</Button>
			</form>
		);
	}
}

// ==============================
// PAGE
// ==============================

export default class Login extends React.Component {
	render() {
		return (
			<Fragment>
				<Head>
					<title>Login</title>
				</Head>
				<Container>
					<Grid>
						<GridCell width={3} />
						<GridCell width={6}>
							<UserConsumer>
								{({ user }) =>
									user.isLoggedIn ? (
										<Redirect to="/profile" />
									) : (
										<LoginForm login={user.login} />
									)
								}
							</UserConsumer>
						</GridCell>
						<GridCell width={3} />
					</Grid>
				</Container>
			</Fragment>
		);
	}
}
