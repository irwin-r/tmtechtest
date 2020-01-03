import React from 'react';
import PropTypes from 'prop-types';

const Use = React.forwardRef(({ as: Component, ...props }, ref) => (
	<Component {...props} ref={ref} />
));

Use.propTypes = {
	as: PropTypes.node.isRequired,
};

export default Use;
