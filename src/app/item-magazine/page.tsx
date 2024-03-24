'use client'

import Image from "next/image";
import loadingSVG from "../../../public/Dual Ring-1.5s-191px.svg";
import {useItems} from "@/src/frontend/hooks/itemsMagazine/useItems";
import {usePlaces} from "@/src/frontend/hooks/itemsMagazine/usePlaces";
import getPlacesItemsList from "@/src/lib/utils/getPlacesItemsList";
import Container from '@/src/frontend/components/itemsMagazine/Container'
import PlacesItemsDetailsSummaryList from "@/src/frontend/components/itemsMagazine/PlacesItemsDetailsSummaryList";
import {useMemo} from "react";

export default function Home() {

    const {items, loading: loadingItems, error: errorItems} = useItems()
    const {places, loading: loadingPlaces, error: errorPlaces} = usePlaces()

    const placeItemsList = useMemo(() => getPlacesItemsList(items, places), [items, places]);

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
            <Container title={'Przegląd'}>
                <PlacesItemsDetailsSummaryList placeItemsList={placeItemsList}/>
            </Container>
        </div>
    );
}
