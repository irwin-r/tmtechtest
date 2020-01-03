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
		labels: [String!]
		description: String
		dateAdded: DateTime!
	}

	type User {
		id: Int!
		name: String!
		email: EmailAddress!
		favorites: [Job!]
	}

	type Query {
		job(jobId: String!): Job
		jobs(searchTerm: String, offset: Int = 0, limit: Int = 20): [Job!]
		user: User
	}

	type Mutation {
		login(email: String!): User
		logout: Boolean!
		removeFavorite(jobId: String!): User!
		saveFavorite(jobId: String!): User!
	}
`;

export default [typeDefs];
