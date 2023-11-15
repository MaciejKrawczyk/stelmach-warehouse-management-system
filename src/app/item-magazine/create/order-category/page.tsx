'use client'

import React from 'react';
import Container from "@/src/frontend/components/itemsMagazine/Container";
import OrderCategoryForm from "@/src/frontend/components/itemsMagazine/form/forms/OrderCategoryForm";


const MyForm = () => {

    return (
        <Container title={'Dodawanie Zamówienia'}>

            <OrderCategoryForm />

        </Container>
    );
};

export default MyForm;
