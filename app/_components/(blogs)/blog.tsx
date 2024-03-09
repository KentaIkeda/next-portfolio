import {
  ContentfulCollection,
  Entry,
  EntrySkeletonType
} from 'contentful';
import React from 'react';
import { notoSansJP } from '@/app/lib/fonts';

const Blog = ({
  blogs
}: {
  blogs: ContentfulCollection<Entry<EntrySkeletonType, any, string>>
}) => {
  return (
    <ul className='flex flex-col h-full justify-center gap-y-7'>
      {blogs.items.map((post: any) => {
        return (
          <React.Fragment key={post.sys.id}>
            <li className={`${notoSansJP.className} text-2xl`}>
              {post.fields.title}
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default Blog;