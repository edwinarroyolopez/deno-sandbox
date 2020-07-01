import { getProperties } from "../models/propertyModel.ts";

export default class Resolvers {
  async addProperty({ input }: any) {
    return await [];
  }

  async getProperties() {
    return await getProperties();
  }
}
