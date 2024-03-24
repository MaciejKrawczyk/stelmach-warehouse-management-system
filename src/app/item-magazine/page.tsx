'use client'

import Image from "next/image";
import loadingSVG from "../../../public/Dual Ring-1.5s-191px.svg";
import {useItems} from "@/src/frontend/hooks/itemsMagazine/useItems";
import {usePlaces} from "@/src/frontend/hooks/itemsMagazine/usePlaces";
import getPlacesItemsList from "@/src/lib/utils/getPlacesItemsList";
import SummaryDetailsItemsContainer from "@/src/frontend/components/itemsMagazine/SummaryDetailsItemsContainer";

export default function Home() {

    const {items, loading: loadingItems, error: errorItems} = useItems()
    const {places, loading: loadingPlaces, error: errorPlaces} = usePlaces()

    const placeItemsList = getPlacesItemsList(items, places)

    if (loadingItems && loadingPlaces) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Image priority alt={'loading...'} src={loadingSVG}/>
            </div>
        );
    }

    if (errorItems || errorPlaces) return <div>Error loading data</div>;

    return (
        <div className='flex justify-center'>
            <main className='w-10/12 h-auto mb-28'>
                <h1 className='font-semibold text-3xl my-10 mx-auto'>Przegląd</h1>

                {placeItemsList.map((placeWithItems, index) => {

                    return (
                        <SummaryDetailsItemsContainer
                            items={placeWithItems.items}
                            placeId={placeWithItems.id}
                            title={placeWithItems.name}
                            key={index}
                        />
                    )
                })}

            </main>
        </div>
    );
}
