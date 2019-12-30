import PropTypes from 'prop-types';
import React from 'react';

import NotFound from '../components/NotFound';

const Error = ({ statusCode }) => {
	if (statusCode === 404) {
		return <NotFound />;
	}

	const reason = statusCode
		? `A ${statusCode} error occurred on the server.`
		: 'An error occurred.';

	return <p>{reason}</p>;
};

Error.defaultProps = {
	statusCode: null,
};

Error.propTypes = {
	statusCode: PropTypes.number,
};

Error.getInitialProps = ({ res, err }) => ({
	statusCode: res?.statusCode ?? err?.statusCode ?? null,
});

export default Error;
