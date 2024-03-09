'use client';

const SkilllDetail = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <li className='p-1 bg-dark dark:bg-light text-light dark:text-dark rounded-md tracking-wide'>
      {children}
    </li>
  );
}

export default SkilllDetail;