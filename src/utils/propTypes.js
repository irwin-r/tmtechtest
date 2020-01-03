import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const jobShape = PropTypes.shape({
	dateAdded: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	labels: PropTypes.arrayOf(PropTypes.string).isRequired,
	logo: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
	suburb: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
});

export const urlShape = PropTypes.oneOfType([
	PropTypes.string,
	PropTypes.object,
]);
