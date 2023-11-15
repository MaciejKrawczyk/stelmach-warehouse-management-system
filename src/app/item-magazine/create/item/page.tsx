'use client'



import Container from "@/src/frontend/components/itemsMagazine/Container";
import ItemForm from "@/src/frontend/components/itemsMagazine/form/forms/ItemForm";

const App = () => {

    return (
        <Container title={'Dodawanie przedmiotów'}>
            <ItemForm />
        </Container>
    );
};

export default App;
