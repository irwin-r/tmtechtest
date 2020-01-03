import Octicon from '@githubprimer/octicons-react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import { colors } from '../../constants';
import { FlexGroup, Use } from '../../primitives';

import { Link } from '..';

const NavBarItem = ({
	avatar,
	children,
	icon,
	iconSize,
	onClick,
	to,
	...rest
}) => {
	const as = to ? Link : 'button';

	return (
		<Use
			as={as}
			to={to}
			onClick={onClick}
			className={css({
				background: 0,
				border: 0,
				cursor: 'pointer',

				':hover, :focus': {
					color: colors.blue.a700,
					outline: 0,
					textDecoration: 'underline',
				},
			})}
			{...rest}
		>
			{icon || avatar ? (
				<FlexGroup align="center">
					{avatar ? (
						<img
							alt="avatar"
							height="32"
							width="32"
							className={css({
								backgroundColor: colors.blueGrey['100'],
								borderRadius: '50%',
								display: 'block',
							})}
							src={avatar}
						/>
					) : (
						<Octicon icon={icon} size={iconSize} />
					)}
					{children}
				</FlexGroup>
			) : (
				children
			)}
		</Use>
	);
};

NavBarItem.defaultProps = {
	avatar: undefined,
	children: undefined,
	icon: undefined,
	iconSize: 'small',
	onClick: undefined,
	to: undefined,
};

NavBarItem.propTypes = {
	avatar: PropTypes.string,
	children: PropTypes.node,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	iconSize: PropTypes.string,
	onClick: PropTypes.func,
	to: PropTypes.string,
};

export default NavBarItem;
