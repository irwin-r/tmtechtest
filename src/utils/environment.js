export const Environments = {
	DEVELOPMENT: 'development',
	PRODUCTION: 'production',
	TEST: 'test',
};

export const getEnvironment = () => {
	const environment = (process.env?.NODE_ENV ?? '').toLowerCase();

	switch (environment) {
		case Environments.DEVELOPMENT:
		case Environments.TEST:
		case Environments.PRODUCTION:
			return environment;

		default:
			throw new Error(`Unexpected NODE_ENV "${environment}" encountered`);
	}
};

export const isDevelopmentEnvironment = () =>
	getEnvironment() === Environments.DEVELOPMENT;

export const isProductionEnvironment = () =>
	getEnvironment() === Environments.PRODUCTION;
