import React, { useMemo } from 'react';
import Link from 'next/link';
import { notoSansJP } from '@/app/lib/fonts';
import { ContentfulCollection, Entry, EntrySkeletonType } from 'contentful';
import { getData } from '@/app/lib/_contentful/getData';
import { getFormatDate } from '@/app/lib/utils';

const Blog = async () => {
  const limitedBlogs: ContentfulCollection<
    Entry<EntrySkeletonType, any, string>
  > = await useMemo(() => getData(), []);
  return (
    <ul className='flex flex-col justify-center gap-y-7 w-full h-full '>
      {limitedBlogs.items.map((post: any) => {
        return (
          <Link
            href={`blogs/${post.fields.slug}/`}
            key={post.sys.id}
          >
            <li
              className={`${notoSansJP.className} shadow-cinema shadow-indigo-200 dark:shadow-zinc-950 rounded-md px-4 py-6 mx-auto xl:mx-0`}
            >
              <article>
                <p className='line-clamp-1 text-lg'>{post.fields.title}</p>
                <p className='text-xs mt-1'>
                  {getFormatDate(post.fields.publishDate)}
                </p>
              </article>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Blog;
