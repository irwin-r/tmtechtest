import { css } from 'emotion';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { gutter } from '../../constants';

import { Button, FlexGroup, Input } from '../../primitives';

import { SearchFormClearButton, SearchFormIcon } from '..';

const SearchForm = ({ onChange, onClear, onSubmit, value }) => {
	const inputRef = useRef(null);

	const handleClear = () => {
		onClear();
		inputRef.current.focus();
	};

	return (
		<form
			method="get"
			action="/"
			onSubmit={onSubmit}
			style={{ marginBottom: gutter * 3 }}
		>
			<FlexGroup growIndexes={[0]}>
				<div className={css({ position: 'relative' })}>
					<SearchFormIcon />
					<Input
						aria-describedby="search-submit"
						aria-label="Search"
						name="search"
						onChange={onChange}
						placeholder="I'm looking for..."
						ref={inputRef}
						size="large"
						style={{ paddingLeft: 52 }}
						type="search"
						value={value}
					/>
					{value ? <SearchFormClearButton onClick={handleClear} /> : null}
				</div>
				<Button
					size="large"
					appearance="primary"
					type="submit"
					id="search-submit"
					style={{ paddingLeft: 32, paddingRight: 32 }}
				>
					Search
				</Button>
			</FlexGroup>
		</form>
	);
};

SearchForm.propTypes = {
	onChange: PropTypes.func.isRequired,
	onClear: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default SearchForm;
