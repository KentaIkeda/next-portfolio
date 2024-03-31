import { getAllData } from '@/app/lib/_contentful/getData';
import Link from 'next/link';
import React from 'react';

const Blog = async () => {
  const blogs = await getAllData();

  return (
    <div className='w-[90%] mx-auto'>
      <ul className='flex flex-wrap justify-start gap-y-7 w-full h-full'>
        {blogs.items.map((post: any) => {
          let publishedDate;

          // 日付の余計な部分排除
          post.fields.publishDate.length >= 11
            ? (publishedDate = post.fields.publishDate.slice(0, 10))
            : (publishedDate = post.fields.publishDate);

          return (
            <React.Fragment key={post.sys.id}>
              <li className='mx-auto w-full max-w-3xl lg:w-1/2 xl:mx-0'>
                <Link
                  href={`/blogs/${post.fields.slug}`}
                  className='w-full max-w-xl block mx-auto'
                >
                  <div className='w-full group/post bg-light text-dark shadow-cinema shadow-indigo-200 dark:shadow-zinc-950 rounded-md px-4 py-6'>
                    <p className='text-2xl group-hover/post:text-indigo-500 group-hover/post:tracking-wide group-hover/post:underline transition-all line-clamp-1 2xl:text-xl lg:text-lg'>
                      {post.fields.title}
                    </p>
                    <p className='text-xs mt-0.5'>{publishedDate}</p>
                  </div>
                </Link>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Blog;
