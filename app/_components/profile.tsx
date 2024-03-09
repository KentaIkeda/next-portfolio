'use client';

import Image from 'next/image';
import { getMyAge } from '../lib/utils';

const Profile = () => {

  const myInfo = {
    name: 'Kenta Ikeda',
    age: getMyAge(),
    email: 'ikeda.web.develop@gmail.com'
  }

  return (
    <div className='flex flex-col items-center'>
      <figure className='relative w-20 h-20'>
        <Image // Image component has Absolute default
          src={'/me.jpg'}
          fill
          priority
          className='rounded-full drop-shadow-md'
          sizes='100vw'
          alt='Me'
        />
      </figure>
      <p className='text-2xl font-bold'>
        {myInfo.name}
      </p>
      <p className='font-semibold text-xl'>
        {myInfo.age}
      </p>
      <p>
        {myInfo.email}
      </p>
    </div>
  );
}

export default Profile;