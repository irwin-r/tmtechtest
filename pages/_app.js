import App, { Container } from 'next/app';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import React from 'react';

import { UserProvider } from '../components/UserContext';
import Navbar from '../components/Navbar';

const {
	publicRuntimeConfig: { apiEndpoint },
} = getConfig();

export default class MyApp extends React.Component {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		// We need to forward the request headers on the server.
		const url = `${apiEndpoint}/session`;
		const headers = ctx.req ? { cookie: ctx.req.headers.cookie } : undefined;

		const { user } = await fetch(url, { headers }).then(res => res.json());

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps({ user, ...ctx });
		}

		return { pageProps, user };
	}

	render() {
		const { Component, pageProps, user } = this.props;
		return (
			<UserProvider initialUserValue={user}>
				<div className="App">
					<Navbar />
					<Component {...pageProps} />
				</div>
			</UserProvider>
		);
	}
}
