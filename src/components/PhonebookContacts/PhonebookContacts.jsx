import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { getError, getIsLoading } from "redux/contacts/selectors";

import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactLists/ContactLists";
import { useEffect } from "react";
import { styled } from '@mui/system';
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    flexDirection: 'column',
    alignItems: 'center'
});

export default function PhonebookContacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    return (
        <Container>
            <ContactForm />
            {isLoading && !error && <b>Request in progress...</b>}
            <Typography variant="h5" sx={{mt: 5}}>Contacts</Typography>
            <ContactList />
        </Container>
    )

};
