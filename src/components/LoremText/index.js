import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { generateLoremIpsum } from './utils';

const LoremText = ({ count }) => {
	const paragraphs = useMemo(() => generateLoremIpsum(count), [count]);

	return paragraphs.map((paragraph, index) => (
		// eslint-disable-next-line react/no-array-index-key
		<p key={`lorem-paragraph-${index}`}>{paragraph}</p>
	));
};

LoremText.propTypes = {
	count: PropTypes.number.isRequired,
};

export default LoremText;
