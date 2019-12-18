import React, { Component, Fragment } from 'react';
import fetch from 'isomorphic-unfetch';
import querystring from 'querystring';
import getConfig from 'next/config';
import Router from 'next/router';
import Head from 'next/head';

import { Button, Card, Container, Page } from '../primitives';
import { SearchForm } from '../components/SearchForm';
import { NoResults } from '../components/NoResults';
import { JobItem } from '../components/JobItem';
import { history } from '../utils';

const {
	publicRuntimeConfig: { apiEndpoint },
} = getConfig();

export default class Home extends Component {
	static async getInitialProps({ query: { search } }) {
		const query = search ? `?${querystring.encode({ search })}` : '';
		const url = `${apiEndpoint}/jobs${query}`;

		const { jobs } = await fetch(url).then(res => res.json());

		return { jobs, search };
	}

	state = {
		jobs: this.props.jobs || [],
		search: this.props.search || '',
	};

	onSearch = event => {
		this.setState({ search: event.target.value });
	};

	handleSearchClear = () => {
		this.setState({ search: '' }, () => {
			Router.replace({
				pathname: '/',
			});
			this.fetchResults();
		});
	};

	handleSearchSubmit = e => {
		const { search } = this.state;
		e.preventDefault();
		Router.replace({
			pathname: '/',
			query: { search },
		});
		this.fetchResults({ search });
	};

	fetchResults = async opts => {
		const search = querystring.encode(opts);
		const query = search ? `?${search}` : '';
		const { jobs } = await fetch(`${apiEndpoint}/jobs${query}`).then(res =>
			res.json()
		);
		this.setState({ jobs });
	};

	uploadResume = () => {
		alert('Temporary disabled due to high demand!');
	};

	render() {
		const { jobs, search } = this.state;
		const hasNoResults = jobs.length === 0;

		return (
			<Fragment>
				<Head>
					<title>Job Search</title>
				</Head>
				<Container>
					<SearchForm
						onChange={this.onSearch}
						onSubmit={this.handleSearchSubmit}
						onClear={this.handleSearchClear}
						value={search}
					/>
				</Container>
				<Page
					main={
						<Card>
							{hasNoResults && (
								<NoResults onClearSearch={this.handleSearchClear} />
							)}
							{jobs.map((job, idx) => (
								<JobItem key={job.id} job={job} index={idx} />
							))}
						</Card>
					}
					aside={
						<Fragment>
							<p>Let employers find you:</p>
							<Button
								appearance="secondary"
								isBlock
								onClick={this.uploadResume}
							>
								Upload your resumé
							</Button>
						</Fragment>
					}
				/>
			</Fragment>
		);
	}
}
