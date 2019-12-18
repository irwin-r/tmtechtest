import Octicon, { Star } from '@githubprimer/octicons-react';
import React, { Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import { css } from 'emotion';
import Head from 'next/head';

import { Card, Container, FlexGroup, H2, Page } from '../primitives';
import { UserConsumer } from '../components/UserContext';
import { colors, gutter, Lorem } from '../utils';
import { Redirect } from '../components/Router';
import { JobItem } from '../components/JobItem';

export const NoFavorites = () => (
	<div className={css({ padding: gutter * 2, textAlign: 'center' })}>
		<h1>No favorites</h1>
		<p>
			You can favourite a job by clicking on the <Octicon icon={Star} /> button
			on a Job listing.
		</p>
	</div>
);

const {
	publicRuntimeConfig: { apiEndpoint },
} = getConfig();

function fetchUser(options = {}) {
	const url = `${apiEndpoint}/session`;
	return fetch(url, options).then(res => res.json());
}

function fetchFavorites(options = {}) {
	const url = `${apiEndpoint}/favorites`;
	return fetch(url, options).then(res => res.json());
}

const cleanFavourites = arr => arr.filter(i => i && i.id);

export default class Profile extends React.Component {
	static async getInitialProps({ req }) {
		// We need to forward the request headers on the server.
		const options = !!req ? { headers: req.headers } : {};
		const { user } = await fetchUser(options);
		const { favorites } = await fetchFavorites(options);
		return { favorites: cleanFavourites(favorites), user };
	}

	render() {
		const { favorites, user } = this.props;

		if (!user.id) {
			return <Redirect to="/" />;
		}

		return favorites.length === 0 ? (
			<NoFavorites />
		) : (
			<Page
				main={
					<Fragment>
						<Head>
							<title>Your Profile</title>
						</Head>
						<H2>Saved Listings</H2>
						<Card>
							{favorites.map((job, idx) => (
								<JobItem key={job.id} job={job} index={idx} />
							))}
						</Card>
					</Fragment>
				}
			/>
		);
	}
}
