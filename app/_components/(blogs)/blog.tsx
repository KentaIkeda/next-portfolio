import { ContentfulCollection, Entry, EntrySkeletonType } from 'contentful';
import React from 'react';
import Link from 'next/link';
import { notoSansJP } from '@/app/lib/fonts';

const Blog = ({
  blogs,
}: {
  blogs: ContentfulCollection<Entry<EntrySkeletonType, any, string>>;
}) => {
  return (
    <div className='px-4 w-full h-full'>
      <ul className='flex flex-col justify-center gap-y-7 w-full h-full '>
        {blogs.items.map((post: any, i) => {
          let publishedDate;

          // 日付の余計な部分排除
          post.fields.publishDate.length >= 11
            ? (publishedDate = post.fields.publishDate.slice(0, 10))
            : (publishedDate = post.fields.publishDate);

          return (
            <React.Fragment key={post.sys.id}>
              <Link href={`blogs/${post.fields.slug}/`}>
                <li
                  className={`${notoSansJP.className} text-2xl shadow-cinema shadow-indigo-200 rounded-md w-[90%] px-4 py-6 mx-auto xl:mx-0`}
                >
                  <p className='line-clamp-1'>{post.fields.title}</p>
                  <p className='text-xs mt-0.5'>{publishedDate}</p>
                </li>
              </Link>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
