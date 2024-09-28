'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PathNameType } from '../_types/types';

const Navigation = () => {
  const pathName = usePathname();
  const pageLists: Array<{ id: number; name: PathNameType; href: string }> = [
    { id: 1, name: 'TOP', href: '/' },
    { id: 2, name: 'PRODUCTS', href: '/products' },
    { id: 3, name: 'BLOGS', href: '/blogs' },
  ];

  // "TOP"が来たら"/"を返す、その他は"/"を除外した文字列を返す
  // 引数テキストはpageListのnameの想定
  const formatPathName = (text: PathNameType) => {
    if (text === 'TOP') {
      return pathName.replace('/', 'top');
    }
    if (text === 'PRODUCTS') {
      return pathName.slice(1);
    }
    if (text === 'BLOGS') {
      return pathName.slice(1);
    }
  };

  return (
    <ul className='flex flex-col gap-4'>
      {pageLists.map(page => {
        const path = formatPathName(page.name);
        const isActiveColor =
          path === page.name.toLowerCase()
            ? 'text-indigo-500 dark:text-indigo-500'
            : 'text-light';
        return (
          <Link
            key={page.id}
            className='group/nav w-11/12 max-w-80 h-auto mx-auto block'
            href={page.href}
          >
            <li
              className={`w-full h-full p-4 mx-auto bg-dark dark:bg-light dark:text-dark transition-all rounded-md group-hover/nav:tracking-wider group-hover/nav:text-indigo-500 group-hover/nav:underline text-center text-xl ${isActiveColor}`}
            >
              {page.name}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Navigation;
