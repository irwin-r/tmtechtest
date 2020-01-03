import React, { Fragment } from 'react';

import { gutter } from '../constants';

import { Container, GridCell, Grid, Use } from '.';

export const Page = ({ contain = true, main, aside }) => (
	<Use as={contain ? Container : Fragment}>
		<Grid gap={gutter * 3}>
			<GridCell width={9}>{main}</GridCell>
			<GridCell width={3}>{aside}</GridCell>
		</Grid>
	</Use>
);
