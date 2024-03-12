'use client';
import { HandleNav, MDNavigation } from './handleNav';
import { useState } from 'react';

const NavProvider = () => {

  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <HandleNav isModal={isModal} setIsModal={setIsModal}/>
      <MDNavigation isModal={isModal} setIsModal={setIsModal}/>
    </>
  );
}
 
export default NavProvider;