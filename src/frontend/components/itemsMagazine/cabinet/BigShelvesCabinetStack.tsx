import React from 'react';
import Image from "next/image";
import tool from '@/public/small-tool.svg';
import {Item, Shelf, ShelfCategory} from "@prisma/client";

interface ShelfExtended extends Shelf {
    shelfCategory: ShelfCategory
    item: Item[]
}

interface BigShelvesCabinetStackProps {
    fromId: number
    toId: number
    shelves: ShelfExtended[];
    handleShelfClick: (shelfId: number) => void;
    clickedShelves: number[];
    onRightClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, shelf: Shelf) => void;
}

const BigShelvesCabinetStack: React.FC<BigShelvesCabinetStackProps> = ({ shelves, handleShelfClick, clickedShelves, onRightClick, fromId, toId }) => {
    return (
        <div className={'gap-3 mx-3 border-2 border-black p-3 w-auto grid grid-cols-5 grid-rows-12'}>
            {shelves
            .filter(shelf => Number(shelf.name) >= fromId && Number(shelf.name) <= toId && shelf.size === "big")
            .map(shelf => (
                <div
                    onClick={() => handleShelfClick(shelf.id)}
                    className={`cursor-pointer flex items-center justify-center ${clickedShelves.includes(shelf.id) ? 'border-black border-2' : ''}`}
                    key={shelf.id}
                    onContextMenu={(e) => onRightClick(e, shelf)}
                    style={{backgroundColor: shelf.shelfCategory.color}}
                >
                    {shelf.item.length > 0 && (
                        <>
                            <div>{shelf.item.length}</div>
                            <Image src={tool} priority alt={'tool'}/>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default BigShelvesCabinetStack;
