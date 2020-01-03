import { extractCritical } from 'emotion-server';
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const page = ctx.renderPage();
		const styles = extractCritical(page.html);
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps, ...styles };
	}

	render = () => (
		<html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<meta name="theme-color" content="#000000" />
				<link rel="stylesheet" href="/css/reset.css" />
				{/* eslint-disable-next-line react/no-danger */}
				<style dangerouslySetInnerHTML={{ __html: this.props.css }} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</html>
	);
}
