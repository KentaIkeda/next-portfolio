import {
  ContentfulCollection,
  Entry,
  EntrySkeletonType
} from 'contentful';
import React from 'react';
import Link from 'next/link';
import { notoSansJP } from '@/app/lib/fonts';
import { Divide } from 'lucide-react';

const Blog = ({
  blogs
}: {
  blogs: ContentfulCollection<Entry<EntrySkeletonType, any, string>>
}) => {
  return (
    <div className='px-4 w-full h-full'>
      <ul className='flex flex-col justify-center gap-y-7 w-full h-full '>
        {blogs.items.map((post: any, i) => {

          let publishedDate;

          // 日付の余計な部分排除
          post.fields.publishDate.length >= 11
            ? publishedDate = post.fields.publishDate.slice(0, 10)
            : publishedDate = post.fields.publishDate;

          return (
            <React.Fragment key={post.sys.id}>
              <Link href={`blog/${post.fields.slug}/`}>
                <li className={`${notoSansJP.className} text-2xl peer/blog`}>
                  <p className='line-clamp-1'>
                    {post.fields.title}
                  </p>
                  <p className='text-xs mt-0.5'>
                    {publishedDate}
                  </p>
                </li>
                {i <= 2 ? <div
                  className='w-[90%] h-[1px] mx-auto mt-2 bg-dark dark:bg-light opacity-0 peer-hover/blog:bg-indigo-500 peer-hover/blog:opacity-100 transition-all'></div> : null}
              </Link>
            </React.Fragment>
          );
        })}
      </ul>
    </div >
  );
}

export default Blog;