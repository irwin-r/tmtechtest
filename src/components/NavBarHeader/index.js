import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

const NavBarHeader = React.forwardRef(({ children, hasScroll }, ref) => (
	<header
		className={css({
			backgroundColor: 'white',
			boxShadow: hasScroll
				? '0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1)'
				: '0 1px 0 rgba(0, 0, 0, 0.1)',
			left: 0,
			position: 'fixed',
			right: 0,
			top: 0,
			transition: 'box-shadow 200ms',
			zIndex: 3,
		})}
		ref={ref}
	>
		{children}
	</header>
));

NavBarHeader.propTypes = {
	children: PropTypes.node.isRequired,
	hasScroll: PropTypes.bool.isRequired,
};

export default NavBarHeader;
