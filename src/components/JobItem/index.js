import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import { colors, gutter } from '../../constants';
import { FlexGroup, H3 } from '../../primitives';
import { formatDate, jobShape } from '../../utils';

import { FavoriteInline, Link } from '..';

const JobItem = ({ job, index }) => (
	<>
		{index ? (
			<div
				className={css({
					backgroundColor: colors.blueGrey['50'],
					height: 2,
				})}
			/>
		) : null}
		<div className={css({ fontSize: 14, padding: 16 })}>
			<FlexGroup align="center" growIndexes={[0]}>
				<div>
					<H3 as="h2">
						<Link
							to={`/job?jobId=${job.id}`}
							as={`/job/${job.id}`}
							className={css({
								':hover, :focus': {
									color: colors.blue.a700,
									outline: 0,
									textDecoration: 'underline',
								},
							})}
						>
							{job.title}
						</Link>
					</H3>

					<div>Added: {formatDate(job.dateAdded)}</div>
					<div>Source: {job.source}</div>
					<p className={css({ color: colors.grey['700'], marginTop: gutter })}>
						{job.description}
					</p>
				</div>
				<FlexGroup isVertical>
					<img src={job.logo} alt={job.source} style={{ maxWidth: 80 }} />
					<FavoriteInline jobId={job.id} />
				</FlexGroup>
			</FlexGroup>
		</div>
	</>
);

JobItem.propTypes = {
	index: PropTypes.number.isRequired,
	job: jobShape.isRequired,
};

export default JobItem;
