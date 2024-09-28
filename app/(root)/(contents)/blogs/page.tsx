import React, { useMemo } from 'react';
import Link from 'next/link';
import { getAllData } from '@/app/lib/_contentful/getData';
import { getFormatDate } from '@/app/lib/utils';

const Blog = async () => {
  const blogs = await useMemo(() => getAllData(), []);

  return (
    <div className='w-[90%] mx-auto'>
      <ul className='flex flex-col xl:flex-row xl:flex-wrap xl:justify-center gap-x-7 gap-y-7 w-full h-full'>
        {blogs.items.map((post: any) => (
          <li
            className='mx-auto w-full h-auto max-w-3xl xl:mx-0 xl:w-[45%]'
            key={post.sys.id}
          >
            <Link
              href={`/blogs/${post.fields.slug}`}
              className='w-full h-auto max-w-xl block mx-auto'
            >
              <div className='w-full group/post bg-light text-dark shadow-cinema shadow-indigo-200 dark:shadow-zinc-950 rounded-md px-4 py-6'>
                <p className='text-2xl group-hover/post:text-indigo-500 group-hover/post:tracking-wide group-hover/post:underline transition-all line-clamp-1 2xl:text-xl lg:text-lg'>
                  {post.fields.title}
                </p>
                <p className='text-xs mt-0.5'>
                  {getFormatDate(post.fields.publishDate)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
