import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

const NavForMobile = ({
  name,
  url,
  setIsModal,
}: {
  name: string;
  url: string;
  setIsModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Link
      href={url}
      onClick={() => setIsModal(false)}
    >
      <button className='text-light dark:text-dark text-lg font-bold tracking-wider'>
        {name}
      </button>
    </Link>
  );
};

export default NavForMobile;
