import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import { gutter } from '../../constants';
import { Button, H1, Hr } from '../../primitives';

const NoResults = ({ onClearSearch }) => (
	<div className={css({ padding: gutter * 2 })}>
		<H1>No results</H1>
		<p>Sorry, we couldn't find what you're looking for.</p>
		<Hr />
		<p>You can try clearing the search filter.</p>
		<Button onClick={onClearSearch}>Clear search</Button>
	</div>
);

NoResults.propTypes = {
	onClearSearch: PropTypes.func.isRequired,
};

export default NoResults;
