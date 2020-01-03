import NextApp from 'next/app';
import React from 'react';

import { NavBar, UserProvider } from '../components';

class App extends NextApp {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps({ ...ctx });
		}

		return { pageProps };
	}

	render = () => {
		const { Component, pageProps } = this.props;

		return (
			<UserProvider>
				<div className="App">
					<NavBar />
					{/* eslint-disable-next-line react/jsx-props-no-spreading */}
					<Component {...pageProps} />
				</div>
			</UserProvider>
		);
	};
}

export default App;
