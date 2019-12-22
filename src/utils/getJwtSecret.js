// NOTE: in the the real world, you should NEVER allow fall-backs for secret keys
const getJwtSecret = () => process.env?.JWT_SECRET ?? 'test-secret-key';

export default getJwtSecret;
