import Image from 'next/image';
import { getMyAge } from '../lib/utils';

const Profile = () => {
  const myInfo = {
    name: 'Kenta Ikeda',
    age: getMyAge(),
    email: 'ikeda.web.develop@gmail.com',
  };

  return (
    <div className='grid justify-items-center gap-y-1 w-full'>
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
      <h1 className='text-2xl font-bold cursor-default'>{myInfo.name}</h1>
      <p className='font-semibold text-xl cursor-default'>{myInfo.age}</p>
      <p>{myInfo.email}</p>
    </div>
  );
};

export default Profile;
