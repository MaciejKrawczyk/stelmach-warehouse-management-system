'use client'

import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import back from '@/public/back-svgrepo-com.svg';

interface MenuButtonProps {}

const Modal: FC<{ onConfirm: () => void; onCancel: () => void }> = ({ onConfirm, onCancel }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCancel]);
  
  return (
    <div className='fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex'>
      <div className='relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg'>
        <p className='text-lg leading-6 font-medium text-gray-900'>Na pewno chcesz wrócić do menu głównego?</p>
        <div className='mt-4'>
          <button className='mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500' onClick={onConfirm}>Wróć do menu</button>
          <button className='inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' onClick={onCancel}>Anuluj</button>
        </div>
      </div>
    </div>
  );
};

const MenuButton: FC<MenuButtonProps> = () => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  
  const handleOnClick = (e) => {
    e.preventDefault();
    setShowConfirmDialog(true);
  };
  
  const handleConfirm = () => {
    setShowConfirmDialog(false);
    // Redirect to main menu
    window.location.href = '/';
  };
  
  const handleCancel = () => {
    setShowConfirmDialog(false);
  };
  
  return (
    <>
      {showConfirmDialog && (
        <Modal onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
      
      <Link href={'/'} onClick={handleOnClick} className={'text-xl text-white flex justify-center items-center fixed rounded-full w-20 h-20 bg-blue-500 font-bold z-50 bottom-5 right-5'}>
        <Image className={'w-10 h-10'} src={back} alt={'return to menu'} />
      </Link>
    </>
  );
};

export default MenuButton;
