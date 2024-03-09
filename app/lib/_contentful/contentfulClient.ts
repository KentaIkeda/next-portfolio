import {
  ContentfulClientApi,
  CreateClientParams,
  createClient
} from 'contentful';

const config: CreateClientParams = {
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_DELIVERY_API || ''
}

export const client: ContentfulClientApi<any> = createClient(config);