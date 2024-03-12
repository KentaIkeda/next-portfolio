import { client } from './contentfulClient';
import { EntrySkeletonType } from 'contentful';

const order: any = '-sys.createdAt';

export const getAllData = async () => {
  const blogPosts = await client.getEntries<EntrySkeletonType>({
    content_type: 'postBlog',
    order: order,
  })
  return blogPosts;
}
export const getData = async () => {
  const blogPosts = await client.getEntries<EntrySkeletonType>({
    content_type: 'postBlog',
    order: order,
    limit: 3
  })
  return blogPosts;
}