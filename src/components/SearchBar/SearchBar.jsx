import { Field, Form, Formik } from "formik";
import toast, { Toaster } from 'react-hot-toast';
import s from './SearchBar.module.css';

export const SearchBar = ({ setQuery }) => {
    const initialValues = {
        query: '',
    };
    const handleSubmit = values => {
        if (values.query.trim() === '') {
            toast.error('Please enter a search query');
            return;
        }
        setQuery(values.query);

    }



    return (
        <header className={s.form}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field name='query' placeholder='Enter search...' type='search' />
                    <button type='submit'>Search</button>
                </Form>
            </Formik>
            <Toaster />
        </header>
    )
}


