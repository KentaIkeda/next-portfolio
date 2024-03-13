import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeChanger = () => {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  if (!mounted) {
    return
  }
  const SunIcon = <Sun size={30} className='text-yellow-400 hover:scale-110 transition-all' />;
  const MoonIcon = <Moon size={30} className='text-sky-800 hover:scale-110 transition-all' />;

  return (
    <>
      <div className='h-[30px] w-[30px]'>
        <button
          className='inline'
          onClick={() => {
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
          }}>
          {theme === 'light' ? MoonIcon : SunIcon}
        </button>
      </div>
    </>
  )
}

export default ThemeChanger;