import React, {FC, useState} from 'react';
import SmallShelvesCabinetStack from "@/src/frontend/components/itemsMagazine/cabinet/SmallShelvesCabinetStack";
import BigShelvesCabinetStack from "@/src/frontend/components/itemsMagazine/cabinet/BigShelvesCabinetStack";
import {useShelves} from "@/src/frontend/hooks/itemsMagazine/useShelves";
import {Shelf} from "@prisma/client";

interface ContainerProps {

}

type ModalPosition = { x: number; y: number; };

const ShelvesCabinet: FC<ContainerProps> = () => {

    const [clickedShelves, setClickedShelves] = useState<number[]>([]); // Assuming shelfId is a string
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalPosition, setModalPosition] = useState<ModalPosition>({x: 0, y: 0});
    const [selectedShelf, setSelectedShelf] = useState<Shelf | null>(null);
    const [showItemOptionsModal, setShowItemOptionsModal] = useState<boolean>(false);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null); // Assuming itemId is a string

    const {shelves, loading: shelvesLoading, error: shelvesError, refetch: refetchShelves} = useShelves();

    const onLeftClick = (shelfId: number) => {
        if (!clickedShelves.includes(shelfId)) {
            setClickedShelves(prev => [...prev, shelfId]);
        } else {
            setClickedShelves(prev => prev.filter(id => id !== shelfId));
        }
    }

    const onRightClick = (event: React.MouseEvent<HTMLElement>, shelf: any) => {
        event.preventDefault();
        setShowModal(true);
        setModalPosition({x: event.clientX, y: event.clientY});
        setSelectedShelf(shelf);
        setShowItemOptionsModal(false);
        setSelectedItemId(null);
    }

    return (
        <>
            <div className={'flex'}>
                <SmallShelvesCabinetStack
                    clickedShelves={clickedShelves}
                    fromId={1}
                    toId={80}
                    shelves={shelves}
                    handleShelfClick={onLeftClick}
                    onRightClick={onRightClick}
                />
                <BigShelvesCabinetStack
                    clickedShelves={clickedShelves}
                    fromId={72}
                    toId={1}
                    shelves={shelves}
                    onRightClick={onRightClick}
                    handleShelfClick={onLeftClick}
                />
                <SmallShelvesCabinetStack
                    clickedShelves={clickedShelves}
                    fromId={81}
                    toId={160}
                    shelves={shelves}
                    handleShelfClick={onLeftClick}
                    onRightClick={onRightClick}
                />
            </div>
        </>
    );
}

export default ShelvesCabinet;
