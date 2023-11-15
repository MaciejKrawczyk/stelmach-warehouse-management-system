'use client'

import React, { useState } from 'react';
import Container from "@/src/frontend/components/itemsMagazine/Container";
import CompanyForm from "@/src/frontend/components/itemsMagazine/form/forms/CompanyForm";


const MyForm = () => {

    return (
        <Container title={'Dodawanie Firm'}>

            <CompanyForm />

        </Container>
    );
};

export default MyForm;
