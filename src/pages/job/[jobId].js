import { useQuery } from '@apollo/react-hooks';
import { Mail } from '@githubprimer/octicons-react';
import { useRouter } from 'next/router';
import React from 'react';
import { css } from 'emotion';
import Head from 'next/head';

import { FavoriteButton, LoremText, NotFound } from '../../components';
import { colors, gutter } from '../../constants';
import { withApollo } from '../../hoc';
import {
	Button,
	Card,
	Page,
	FlexGroup,
	IconButton,
	H1,
} from '../../primitives';
import { formatDate } from '../../utils';

import { GET_JOB_QUERY } from './_queries';

const JobPage = () => {
	const router = useRouter();
	const { data: { job } = {} } = useQuery(GET_JOB_QUERY, {
		variables: { jobId: router?.query?.jobId },
	});

	const applyForJob = () => {
		alert('Good Luck!');
	};

	const sendJob = () => {
		alert('Sent!');
	};

	if (!job) {
		return <NotFound />;
	}

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
							<LoremText count={4} />
						</div>
					</Card>
				}
				aside={
					<aside>
						<Button appearance="secondary" isBlock onClick={applyForJob}>
							Apply for this job
						</Button>
						<FlexGroup stretch style={{ marginTop: gutter }}>
							<FavoriteButton jobId={job.id} isBlock />
							<IconButton onClick={sendJob} isBlock icon={Mail}>
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
};

export default withApollo(JobPage);
