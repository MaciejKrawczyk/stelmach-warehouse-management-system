import React, {DetailedHTMLProps, DetailsHTMLAttributes, FC} from 'react';
import Image from "next/image";
import pin from "@/public/place-marker-svgrepo-com 1.svg";
import settings from "@/public/Setting_alt_line.svg";
import ItemTile from "@/src/frontend/components/itemsMagazine/ItemTile";
import AddNewItemTile from "@/src/frontend/components/itemsMagazine/AddNewItemTile";

interface SummaryDetailsItemsContainerProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
    title: string;
    placeId: number;
    items: any[];
}

const SummaryDetailsItemsContainer: FC<SummaryDetailsItemsContainerProps> = ({ title, placeId, items, ...rest }) => {
    return (
        <details {...rest}>
            <summary className="flex items-center my-5 p-2 cursor-pointer rounded-xl transition-colors duration-200 hover:bg-gray-200">
                <div className="flex items-center mr-2">
                    <Image className="" priority src={pin} alt="pin"/>
                    <div className="mx-4">
                        <span className='text-gray-900'>{title}</span>
                        <span className='mx-1 text-gray-400 text-sm'>({items.length})</span>
                    </div>
                </div>
                <hr className="flex-grow border-t-2"/>
                <Image className="ml-4" priority src={settings} alt="settings"/>
            </summary>
            <section className='flex gap-5 flex-wrap'>

                {placeId === 1 && (<AddNewItemTile />)}

                {items.map((item, index) => {
                    const orderCategoryColor = item.orderCategory !== null ? item.orderCategory.color : null
                    return (
                        <ItemTile
                            key={index}
                            placeId={placeId}
                            itemId={item.id}
                            itemType={item.itemType.name}
                            name={item.name}
                            company={item.company.name}
                            date={item.status[0].createdAt}
                            shelfSize={item.shelfSize}
                            shelfId={item.shelf ? item.shelf.name : null}
                            orderCategoryColor={orderCategoryColor}
                        />
                    )
                })}

            </section>
        </details>
    );
}

export default SummaryDetailsItemsContainer;
