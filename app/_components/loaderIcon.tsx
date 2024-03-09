import { Loader } from 'lucide-react';
import { LoaderIconProps } from '../_types/types';

const LoaderIcon = ({ size }: LoaderIconProps) => {
  return (
    <Loader size={size} className='animate-spin' />
  );
}

export default LoaderIcon;