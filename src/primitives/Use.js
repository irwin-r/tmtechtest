import React from 'react';
import PropTypes from 'prop-types';

const Use = React.forwardRef(({ as: Component, ...props }, ref) => (
	<Component {...props} ref={ref} />
));

Use.defaultProps = {
	as: undefined,
};

Use.propTypes = {
	as: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.string,
		PropTypes.shape({ render: PropTypes.func.isRequired }),
	]),
};

export default Use;
