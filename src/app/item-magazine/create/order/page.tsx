'use client'

import React from "react";
import Container from "@/src/frontend/components/itemsMagazine/Container";
import OrderForm from "@/src/frontend/components/itemsMagazine/form/forms/OrderForm";


const App = () => {

    return (
        <Container title={'Dodawanie przedmiotów'}>
            <OrderForm />
        </Container>
    );
};

export default App;
