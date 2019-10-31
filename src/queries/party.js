import { GraphQLList, GraphQLString } from 'graphql';

// import the user type we created
import PartyType from '../types/party';

// import the user resolver we created
import { index, single, search} from '../resolvers/party';

export function PartyIndex() {
	return {
		type: new GraphQLList(PartyType),
		description: 'This will return all the party present in the database',
		resolve(parent, args, context, info) {
			return index();
		}
	}
}

export function PartySingle() {
	return {
		type: PartyType,
		description: 'This will return party details by ID',
		args: {
			id: {
				type: GraphQLString,
				description: 'Party ID',
			}
		},
		resolve(parent, args, context, info) {
			return single(args);
		}
	}
}

export function	PartySearch() {
	return {
		type: new GraphQLList(PartyType),
		description: 'This will return party search result',
		args: {
			q: {
				type: GraphQLString,
				description: 'Party search keyword',
			}
		},
		resolve(parent, args, context, info) {
			return search(args);
		}
	}
}