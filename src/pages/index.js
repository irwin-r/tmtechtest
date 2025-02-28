import { useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { JobItem, NoResults, SearchForm } from '../components';
import { withApollo } from '../hoc';
import { Button, Card, Container, Page } from '../primitives';

import { GET_JOBS_QUERY } from './_queries';

const HomePage = () => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState(router.query?.search ?? '');
	const {
		data: { jobs = [] } = {},
		error,
		loading,
		refetch: getJobs,
	} = useQuery(GET_JOBS_QUERY);

	const fetchJobs = (term = searchTerm) => getJobs({ searchTerm: term });

	const onChange = event => {
		setSearchTerm(event?.target?.value);
	};

	const onClear = () => {
		setSearchTerm('');
		router.replace('/');
		fetchJobs('');
	};

	const onSubmit = event => {
		event.preventDefault();
		fetchJobs();

		if (searchTerm === '') {
			router.replace('/');
		} else {
			router.replace('/', { query: { search: searchTerm } });
		}
	};

	const uploadResume = () => {
		alert('Temporary disabled due to high demand!');
	};

	const hasNoResults = jobs.length === 0;

	return (
		<>
			<Head>
				<title>Job Search</title>
			</Head>
			<Container>
				<SearchForm
					onChange={onChange}
					onSubmit={onSubmit}
					onClear={onClear}
					value={searchTerm}
				/>
			</Container>
			<Page
				main={
					<Card>
						{hasNoResults && <NoResults onClearSearch={onClear} />}
						{!error &&
							!loading &&
							jobs.map((job, idx) => (
								<JobItem key={job.id} job={job} index={idx} />
							))}
					</Card>
				}
				aside={
					<>
						<p>Let employers find you:</p>
						<Button appearance="secondary" isBlock onClick={uploadResume}>
							Upload your resumé
						</Button>
					</>
				}
			/>
		</>
	);
};

export default withApollo(HomePage);
