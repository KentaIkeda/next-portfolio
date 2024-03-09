import { client } from './contentfulClient';
import { EntrySkeletonType } from 'contentful';

export const getData = async () => {
  const blogPosts = await client.getEntries<EntrySkeletonType>({
    content_type: 'postBlog',
  })
  return blogPosts;
}