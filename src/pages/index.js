import { useQuery } from '@apollo/react-hooks';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { JobItem, NoResults, SearchForm } from '../components';
import { Button, Card, Container, Page } from '../primitives';

import { GET_JOBS_QUERY } from './_queries';

const HomePage = ({ initialSearchTerm }) => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState(router.query?.search);
	const {
		data: { jobs = [] } = {},
		error,
		loading,
		refetch: getJobs,
	} = useQuery(GET_JOBS_QUERY, {
		variables: { searchTerm: initialSearchTerm },
	});

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

HomePage.defaultProps = {
	initialSearchTerm: undefined,
};

HomePage.propTypes = {
	initialSearchTerm: PropTypes.string,
};

HomePage.getInitialProps = ({ query: { search } } = {}) => ({
	initialSearchTerm: search,
});

export default HomePage;
