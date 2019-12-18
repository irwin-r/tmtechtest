import { Mail } from '@githubprimer/octicons-react';
import React, { Component, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';
import { css } from 'emotion';
import Head from 'next/head';

import { Button, Card, Page, FlexGroup, IconButton, H1 } from '../primitives';
import { colors, formatDate, gutter, Lorem } from '../utils';
import { FavoriteButton } from '../components/Favorite';
import { NotFound } from '../components/NotFound';

const {
	publicRuntimeConfig: { apiEndpoint },
} = getConfig();

export default class Details extends Component {
	static async getInitialProps({ query }) {
		const { jobId } = query;
		const { job } = await fetch(`${apiEndpoint}/jobs/${jobId}`).then(res =>
			res.json()
		);
		return { job };
	}

	applyForJob = () => {
		alert('Good Luck!');
	};

	sendJob = () => {
		alert('Sent!');
	};

	render() {
		const { job } = this.props;

		if (!job) return <NotFound />;

		return (
			<>
				<Head>
					<title>Job Details: {job.title}</title>
				</Head>
				<Page
					main={
						<Card pad>
							<H1>{job.title}</H1>
							<p>{job.description}</p>
							<div
								className={css({
									color: colors.grey['600'],
									fontSize: 14,
									marginTop: gutter,
								})}
							>
								<Lorem count={4} />
							</div>
						</Card>
					}
					aside={
						<aside>
							<Button appearance="secondary" isBlock onClick={this.applyForJob}>
								Apply for this job
							</Button>
							<FlexGroup stretch style={{ marginTop: gutter }}>
								<FavoriteButton id={job.id} isBlock />
								<IconButton onClick={this.sendJob} isBlock icon={Mail}>
									Send
								</IconButton>
							</FlexGroup>

							<Card pad style={{ fontSize: '0.85rem', marginTop: gutter * 3 }}>
								<img
									src={job.logo}
									alt={job.source}
									className="mr-3"
									style={{ maxWidth: 100 }}
								/>
								<div>Added: {formatDate(job.dateAdded)}</div>
								<div>Source: {job.source}</div>
							</Card>
						</aside>
					}
				/>
			</>
		);
	}
}
