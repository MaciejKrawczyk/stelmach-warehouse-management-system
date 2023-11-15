'use client'

import React from 'react';
import Container from "@/src/frontend/components/itemsMagazine/Container";
import ParcelForm from "@/src/frontend/components/itemsMagazine/form/forms/ParcelForm";



const MyForm = () => {

    return (
        <Container title={'Dodawanie Wysyłki'}>
                <ParcelForm />
        </Container>
    );

};

export default MyForm;
