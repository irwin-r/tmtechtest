import Octicon, { Star } from '@githubprimer/octicons-react';
import { css } from 'emotion';
import React from 'react';

import { gutter } from '../../constants';

const NoFavorites = () => (
	<div className={css({ padding: gutter * 2, textAlign: 'center' })}>
		<h1>No favorites</h1>
		<p>
			You can favourite a job by clicking on the <Octicon icon={Star} /> button
			on a Job listing.
		</p>
	</div>
);

export default NoFavorites;
