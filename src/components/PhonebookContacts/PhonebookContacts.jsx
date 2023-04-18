import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { getError, getIsLoading } from "redux/contacts/selectors";

import style from '../App.module.css';
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactLists/ContactLists";
import { useEffect } from "react";

export default function PhonebookContacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    return (
        <div className={style.container}>
            <h1>Phonebook</h1>
            <ContactForm />
            {isLoading && !error && <b>Request in progress...</b>}
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    )

};
