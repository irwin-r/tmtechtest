import { useRouter } from 'next/router';
import { useMount } from 'react-use';

import { urlShape } from '../../utils';

const Redirect = ({ to }) => {
	const router = useRouter();

	useMount(() => router.push(to));

	return null;
};

Redirect.propTypes = {
	to: urlShape.isRequired,
};

export default Redirect;
