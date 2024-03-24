import React, { FC } from 'react';
import {Item, Shelf, ShelfCategory} from "@prisma/client";
import tool from '@/public/small-tool.svg'
import Image from "next/image";

interface ShelfExtended extends Shelf {
    shelfCategory: ShelfCategory
    item: Item[]
}

interface SmallShelvesCabinetStackProps {
    fromId: number
    toId: number
    shelves: ShelfExtended[];
    handleShelfClick: (shelfId: number) => void;
    clickedShelves: number[];
    onRightClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, shelf: Shelf) => void;
}

const SmallShelvesCabinetStack: FC<SmallShelvesCabinetStackProps> = ({ shelves, handleShelfClick, clickedShelves, onRightClick, fromId, toId }) => {
    return (
        <div className={'gap-3 border-2 border-black p-3 w-auto grid grid-cols-5 grid-rows-16'}>
            {
                shelves
                .filter(shelf => Number(shelf.name) >= fromId && Number(shelf.name) <= toId && shelf.size === "small")
                .map(shelf => (
                    <div
                        onClick={() => handleShelfClick(shelf.id)}
                        className={`cursor-pointer flex items-center justify-center py-1 ${clickedShelves.includes(shelf.id) ? 'border-black border-2' : ''}`}
                        key={shelf.id}
                        onContextMenu={(e) => onRightClick(e, shelf)}
                        style={{backgroundColor: shelf.shelfCategory.color}}
                    >
                        {shelf.item.length > 0 && (
                            <>
                                <div>{shelf.item.length}</div>
                                <Image src={tool} priority alt={'tool'} />
                            </>
                        )}
                    </div>
                ))
            }
        </div>
    );
};

export default SmallShelvesCabinetStack;
