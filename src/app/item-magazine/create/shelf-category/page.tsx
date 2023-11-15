'use client'

import React from 'react';
import ShelfCategoryForm from "@/src/frontend/components/itemsMagazine/form/forms/ShelfCategoryForm";
import Container from "@/src/frontend/components/itemsMagazine/Container";


const MyForm = () => {

    return (
        <Container title={'Dodawanie kategorii szuflad'}>
                <ShelfCategoryForm />
        </Container>
    );
};

export default MyForm;
