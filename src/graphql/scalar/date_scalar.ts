import { GraphQLScalarType, Kind } from "graphql";

export const dateScalar = new GraphQLScalarType({
    name: "Date",
    description: "Date ISO format",
    //Call to convert a internal value to 
    // serialized to a json-compatible type
    serialize(value) {
        if (value instanceof Date) {
            return value.toISOString()
        }
        throw Error("GraphQL Date Scalar serializer expected a 'Date' object")
    },
    //Call when the value is pass throughout parameters
    // Input user should follow the format ISO YYYY-MM-DD
    parseValue(value) {
        if (typeof value === "string") {
            return new Date(value)
        }
        throw Error("GraphQL Date Scalar parser expected a 'string' in format ISO")
    },
    // Call when the hard-coded value is received 
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            return new Date(ast.value)
        }
        return null
    }
})