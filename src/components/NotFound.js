import React, { Fragment } from 'react';
import { Button, Page, H1 } from '../primitives';

export const NotFound = () => (
	<Page
		main={
			<>
				<H1>No found</H1>
				<p>Sorry, we couldn't find what you're looking for.</p>
				<p>
					<Button to="/">Home</Button>
				</p>
			</>
		}
	/>
);
