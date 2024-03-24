import {Item, Place} from "@prisma/client";

interface ItemExtended extends Item {
    place: Place
}

function getPlacesItemsList(items: ItemExtended[], places: Place[]) {
    const placesItems = places.map(place => ({
        ...place,
        item: items
        .filter(item => item.placeId === place.id)
        .map(({ place, ...restOfItem }) => restOfItem)
    }));
    return placesItems
}

export default getPlacesItemsList