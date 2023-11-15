'use client'

import React, { useState } from 'react';
import Draggable from 'react-draggable'; // import the Draggable component

export default function pdfPage() {
  const [inputValue, setInputValue] = useState('');
  const [pdfPath, setPdfPath] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const extractedValue = inputValue.split('_')[0];
    const newPath = `http://10.0.0.2/metrix/order_data/${extractedValue}/production.pdf`;
    setPdfPath(newPath);
    setInputValue('');
  };
  
  return (
    <div className={'overflow-hidden overflow-x-hidden'}>
      {/* Draggable Wrapper */}
      <Draggable defaultClassName={'absolute z-20'}>
        <div> {/* Wrapper div */}
          <form
            className={'z-50 w-full max-w-xs'}
            onSubmit={handleSubmit}
            style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}
          >
            <div className={'bg-white p-4 rounded-lg'}>
              <label htmlFor="searchInput" className="block text-lg font-medium text-gray-700">
                Wpisz nr zlecenia (XXXXXX)
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  id="searchInput"
                  autoFocus
                  type="text"
                  placeholder="XXXXXX"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className={'text-black flex-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-base'}
                  style={{ padding: '10px' }}
                />
                <button
                  type="submit"
                  className={'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'}
                >
                  Szukaj
                </button>
              </div>
            </div>
          </form>
        </div>
      </Draggable>
      
      {/* PDF Display */}
      <div className={'w-full h-screen relative'}>
        <iframe
          className={'w-full h-full'}
          src={pdfPath}
          title="PDF Viewer"
        />
        {!pdfPath && (
          <div className="text-white absolute inset-0 flex items-center justify-center bg-black">
            <p className="error">Brak pdf do wyświetlenia.</p>
          </div>
        )}
      </div>
    </div>
  );
}
