import Image from 'next/image';
import { ProductCardType } from '@/app/_types/types';
import Link from 'next/link';

export default function ProductCard({
  image,
  title,
  description,
  isDemo,
  isOtherSite,
  href,
}: ProductCardType) {
  return (
    <div
      className={`w-[90%] h-[22rem] md:w-[75%] md:h-[28rem] lg:h-[25rem] xl:h-[30rem] max-w-screen-sm mx-auto p-4 bg-light dark:bg-dark shadow-cinema shadow-indigo-200 dark:shadow-zinc-950 rounded-sm`}
    >
      <div className='relative aspect-video overflow-hidden'>
        <Image
          src={image}
          width='1000'
          height='1000'
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          alt='Image'
        />
      </div>
      <div className='px-2 pt-4'>
        <h3 className='text-center font-semibold text-base text-dark dark:text-light'>
          {title}
        </h3>
        <p className='text-sm text-dark dark:text-light line-clamp-3 mt-1 md:mt-2'>
          {description}
        </p>
        <p className='mt-1 text-sm text-indigo-500 underline underline-offset-1'>
          {isOtherSite ? (
            <a href={href}>{title}</a>
          ) : (
            <Link href={href}>{title}</Link>
          )}
        </p>
        {isDemo && <span className='text-xs text-slate-400'>デモサイト</span>}
      </div>
    </div>
  );
}
