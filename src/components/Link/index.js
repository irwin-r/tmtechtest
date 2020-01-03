import NextLink from 'next/link';
import React from 'react';

import { urlShape } from '../../utils';

const Link = React.forwardRef(({ to, as, ...props }, ref) => (
	<NextLink href={to} as={as}>
		<a ref={ref} {...props} />
	</NextLink>
));

Link.propTypes = {
	as: urlShape.isRequired,
	to: urlShape.isRequired,
};

export default Link;
