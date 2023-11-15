'use client'

import React, {useState} from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import {useCompanies} from "@/frontend/hooks/itemsMagazine/useCompanies";
import {useOrderCategories} from "@/frontend/hooks/itemsMagazine/useOrderCategories";
import {Places} from "@/lib/objects/Places";
import {IOrder, OrderSchema} from "@/lib/types/zod/Order";
import {generateRandomUUID} from "@/lib/utils/generateRandomUUID";
import SelectInput from "@/frontend/components/itemsMagazine/form/SelectInput";
import InputDivider from "@/frontend/components/itemsMagazine/form/InputDivider";
import NumberInput from "@/frontend/components/itemsMagazine/form/NumberInput";
import TextAreaInput from "@/frontend/components/itemsMagazine/form/TextAreaInput";
import ItemTypeAttributesInput from "@/frontend/components/itemsMagazine/form/ItemTypeAttributesInput";
import FormEnding from "@/frontend/components/itemsMagazine/form/FormEnding";
import SubmitButton from "@/frontend/components/itemsMagazine/form/SubmitButton";
import ToastNotification from "@/frontend/components/itemsMagazine/form/notification/ToastNotification";
import SuccessModal from "@/frontend/components/itemsMagazine/form/modal/SuccessModal";


const OrderForm = () => {

    const { companies, loading: companiesLoading, error: companiesError} = useCompanies()
    const { orderCategories, loading:orderCategoriesLoading, error: orderCategoriesError} = useOrderCategories()
    const places = Places

    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({});

    const {
        ...methods
    } = useForm({
        resolver: zodResolver(OrderSchema)
    })

    const onSubmit = async (data: IOrder) => {
        try {
            setShowErrorModal(false)
            setErrorMessage('')

            for (let i=0;i<data.quantity; i++) {
                data.name = generateRandomUUID()
                const object = await axios.post('/api/item', data)
                setFormData(object.data)
            }

            // console.log(data)

            setShowSuccessModal(true);
            // setFormData(object.data);
        } catch (error) {
            if (error instanceof Error) {
                setShowErrorModal(true);
                setErrorMessage(error.message || 'Something went wrong!');
            } else {
                setShowErrorModal(true);
                setErrorMessage('Something went wrong!');
            }
        } finally {
            methods.reset();
        }
    };

    return (
        companiesLoading && orderCategoriesLoading ? (
            <div>Loading...</div>
        ) : (
        <FormProvider {...methods}>
        <form
            onSubmit={methods.handleSubmit(onSubmit)}
        >

            <SelectInput
                id={'orderCategoryId'}
                control={methods.control}
                title={'Zamówienie'}
                note={methods.formState.errors.orderCategoryId && `${methods.formState.errors.orderCategoryId.message}` || 'Wybierz zamówienie z listy'}
                description={'Producent przedmiotu jest wybierany z listy wszystkich firm dodanych do bazy.'}
                objectList={orderCategories}
            />

            <InputDivider />

            <NumberInput
                {...methods.register('quantity')}
                note={methods.formState.errors.quantity && `${methods.formState.errors.quantity.message}` || 'Wybierz ilość narzędzi tego typu, które zostaną dodane do zamówienia'}
                title={'Ilość'}
                description={'Wpisz ilość przedmiotów tego samego typu, które zamawiasz.'}
                id={'quantity'}
            />

            <InputDivider />

            <TextAreaInput
                {...methods.register('description')}
                note={methods.formState.errors.description && `${methods.formState.errors.description.message}` || ''}
                title={'Opis przedmiotu'}
                placeholder={'Opis'}
                description={'Opis jest dla Ciebie - cechy szczególne, ważne dodatkowe informacje'}
            />

            <InputDivider />

            <ItemTypeAttributesInput
                description={'Typ przedmiotu - dodawany w dodaj -> dodaj typ przedmiotów. Sposób tworzenia typów jest pozostawiony użytkownikowi.'}
                note={methods.formState.errors.itemTypId && `${methods.formState.errors.itemTypeId.message}` || 'Wybierz typ z listy, UWAGA! wpisywać wartości bez spacji i jednostek, aby algorytm odpowiednio segregował przedmoty'}
                title={'Typ przedmiotu'}
            />

            <InputDivider />

            <SelectInput
                id={'companyId'}
                control={methods.control}
                title={'Producent'}
                note={methods.formState.errors.companyId && `${methods.formState.errors.companyId.message}` || ''}
                description={'Producent przedmiotu jest wybierany z listy wszystkich firm dodanych do bazy.'}
                objectList={companies}
            />

            <InputDivider />

            <SelectInput
                id={'placeId'}
                control={methods.control}
                title={'Miejsce docelowe przedmiotu'}
                note={methods.formState.errors.placeId && `${methods.formState.errors.placeId.message}` || 'Domyślna opcja - nie można jej zmienić'}
                objectList={places}
                description={'Jest to zamówiony przedmiot, trafi on do listy zamówionych'}
                enabledOptions={[18]}
            />

            <FormEnding />

            <SubmitButton pending={methods.formState.isSubmitting} />

            {showErrorModal && <ToastNotification key={Date.now()} text={errorMessage} />}
            {showSuccessModal && <SuccessModal isOpen={true} text={'Success!'} bigText={'Success!'} objectData={formData} onClose={() => setShowSuccessModal(false)} />}
        
        </form>
        </FormProvider>
        )
    );
}

// Exporting the component
export default OrderForm;











