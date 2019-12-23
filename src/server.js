import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import Express from 'express';
import jwt from 'express-jwt';
import Next from 'next';

import { JWT_COOKIE_NAME } from './constants';
import { createContext, dataSources, resolvers, typeDefs } from './graphql';
import { getJwtSecret, getListenPort, isDevelopmentEnvironment } from './utils';

(async () => {
	const next = Next({
		dev: isDevelopmentEnvironment(),
	});

	await next.prepare();

	const apollo = new ApolloServer({
		context: createContext,
		dataSources,
		playground: {
			settings: {
				'request.credentials': 'include', // ensure our JWT cookie is getting used in the playground
			},
		},
		resolvers,
		typeDefs,
	});

	const express = Express();

	express.use(cookieParser());

	express.use(
		jwt({
			credentialsRequired: false,
			getToken: req => req?.cookies?.[JWT_COOKIE_NAME],
			requestProperty: 'session',
			secret: getJwtSecret(),
		})
	);

	apollo.applyMiddleware({ app: express, bodyParserConfig: true });

	express.use(Express.static('../public'));

	express.get('/job/:jobId', (req, res) => {
		const { jobId } = req.params;

		next.render(req, res, '/job', { jobId, ...req.query });
	});

	express.get('*', next.getRequestHandler());

	express.listen(getListenPort());
})();
