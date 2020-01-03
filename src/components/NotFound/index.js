import React from 'react';

import { Button, Page, H1 } from '../../primitives';

const NotFound = () => (
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

export default NotFound;
