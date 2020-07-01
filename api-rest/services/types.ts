import { buildSchema } from '../deps.ts';

const schema = buildSchema(`
  type Property {
    id: ID!
    tag: String
    title_description: String
    price: String
    area: String
    bedrooms: String
    bathrooms: String
    garages: String
    phone: String
    whatsapp: String
    location: String
    area_builded: String
    price_m2: String
    stratum: String
    status: String
    building_administration: String
    old: String
    description: String
  }

  type PropertyInput {
    id: ID!
    tag: String
  }

  type Query {
    "Return all properties"
    getProperties: [Property]
  }

  type Mutation {
    "Add a property"
    addProperty: Property
  }
  `);

export default schema;