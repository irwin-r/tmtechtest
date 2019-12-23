import { gql } from 'apollo-server-express';

const typeDefs = gql`
	scalar DateTime
	scalar EmailAddress

	type Job {
		id: String!
		title: String!
		logo: String
		source: String!
		suburb: String!
		labels: [String]
		description: String
		dateAdded: DateTime!
	}

	type Session {
		expires: DateTime!
		token: String!
	}

	type User {
		id: Int!
		name: String!
		email: EmailAddress!
		favorites: [Job]
	}
	type Query {
		job(jobId: String!): Job
		jobs: [Job]
		user: User
	}

	type Mutation {
		login(email: String!): Session
		logout: Boolean!
		removeFavorite(jobId: String!): User!
		saveFavorite(jobId: String!): User!
	}
`;

export default [typeDefs];
