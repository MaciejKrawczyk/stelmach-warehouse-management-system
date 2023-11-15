'use client'

import React from "react";
import Container from "@/src/frontend/components/itemsMagazine/Container";
import ItemTypeForm from "@/src/frontend/components/itemsMagazine/form/forms/ItemTypeForm";


const Page = () => {

    return (
        <Container title={'Dodawanie typów przedmiotów'}>

            <ItemTypeForm />

        </Container>
    );
};

export default Page;
