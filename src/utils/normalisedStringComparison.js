const normalisedStringComparison = (text, other, sensitivity = 'accent') =>
	text.trim().localeCompare(other.trim(), undefined, { sensitivity }) === 0;

export default normalisedStringComparison;
