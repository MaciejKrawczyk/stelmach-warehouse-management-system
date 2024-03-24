import React, {FC} from 'react';
import SummaryDetailsItemsContainer from "@/src/frontend/components/itemsMagazine/SummaryDetailsItemsContainer";
import {Item, Place} from "@prisma/client";

interface PlaceExtended extends Place {
    item: Item[]
}

interface PlacesItemsDetailsSummaryListProps {
    placeItemsList: PlaceExtended[]
}

const PlacesItemsDetailsSummaryList: FC<PlacesItemsDetailsSummaryListProps> = ({placeItemsList}) => {

    return (
        <div>
            {placeItemsList.map((placeWithItems, index) => {

                return (
                    <SummaryDetailsItemsContainer
                        items={placeWithItems.item}
                        placeId={placeWithItems.id}
                        title={placeWithItems.name}
                        key={index}
                    />
                )
            })}
        </div>
    );
}

export default PlacesItemsDetailsSummaryList;
