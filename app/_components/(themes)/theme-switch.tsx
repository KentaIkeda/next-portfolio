import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import LoaderIcon from '../loaderIcon';

const ThemeChanger = () => {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoaderIcon size={37} />;
  }


  return (
    <>
      <div>
        {theme === 'dark' && (
          <button
            className='inline'
            onClick={() => setTheme('light')}>
            <Sun size={30} className='text-yellow-400 hover:scale-110 transition-all' />
          </button>
        )}
        {theme === 'light' && (
          <button
            className='inline'
            onClick={() => setTheme('dark')}>
            <Moon size={30} className='text-sky-800 hover:scale-110 transition-all' />
          </button>
        )}
      </div>
    </>
  )
}

export default ThemeChanger;