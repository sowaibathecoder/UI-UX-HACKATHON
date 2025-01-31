import { type SchemaTypeDefinition } from 'sanity'
import { carsSchema } from './car'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [carsSchema],
}
