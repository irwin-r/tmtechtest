import { ApolloProvider } from '@apollo/react-hooks';
import NextApp from 'next/app';
import React from 'react';

import { NavBar, UserProvider } from '../components';
import { withApollo } from '../hoc';

class App extends NextApp {
	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps
			? await Component.getInitialProps(ctx)
			: {};

		return { pageProps };
	}

	render = () => {
		const { apollo, Component, pageProps, user } = this.props;

		return (
			<ApolloProvider client={apollo}>
				<UserProvider value={user}>
					<div className="App">
						<NavBar />
						{/* eslint-disable-next-line react/jsx-props-no-spreading */}
						<Component {...pageProps} />
					</div>
				</UserProvider>
			</ApolloProvider>
		);
	};
}

export default withApollo(App);
