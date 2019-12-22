const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;

const createTokenExpiryDate = () => new Date(Date.now() + ONE_DAY);

export default createTokenExpiryDate;
