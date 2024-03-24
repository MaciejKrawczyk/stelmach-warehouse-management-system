import React, { FC, HTMLAttributes } from 'react';
import Link from "next/link";

const AddNewItemTile: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <div
            {...props}
            className='w-64 h-96 bg-gray-100 flex flex-col justify-center items-center border-gray-200 rounded-xl shadow-item'>
            <Link href={'/item-magazine/create/item'}
                  className="relative cursor-pointer mb-4 w-1/2 aspect-square rounded-full bg-amber-100 flex items-center justify-center transition duration-200 hover:bg-amber-200">
                <div
                    className="absolute top-50% left-50% transform -translate-x-50% w-1 h-10 bg-amber-400 rounded-xl"></div>
                <div
                    className="absolute top-50% left-50% transform -translate-x-50% -translate-y-50% w-10 h-1 bg-amber-400 rounded-xl"></div>
            </Link>
            <div className='flex justify-center items-center flex-col'>
                <h3 className='text-xl font-bold mb-2'>Dodaj przedmiot</h3>
                <p className='text-lg font-light text-gray-500 text-center'>Dodaj nowy przedmiot do bazy
                    danych</p>
            </div>
        </div>
    );
}

export default AddNewItemTile;
