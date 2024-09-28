import Profile from './profile';
import Title from './title';
import Navigation from './navigation';
import ThemeChanger from './(themes)/theme-switch';
import SNS from './sns';

const SideBar = () => {
  return (
    <header className='mt-12 grid justify-items-center gap-y-4 lg:mt-0 lg:sticky lg:top-0 lg:left-0 lg:h-svh lg:w-ful lg:gap-y-0 lg:items-center  lg:col-span-2'>
      <Profile />
      <div className='w-full hidden lg:block'>
        <Navigation />
      </div>
      <div className='flex justify-center gap-x-4 '>
        <ThemeChanger />
        <div className='flex place-items-center'>
          <SNS href='https://github.com/KentaIkeda' />
        </div>
      </div>
    </header>
  );
};

export default SideBar;
