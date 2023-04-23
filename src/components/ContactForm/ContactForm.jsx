import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contacts/operations";
import { getContacts } from "redux/contacts/selectors";
import shortid from "shortid";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, TextField } from '@mui/material';
import Filter from "components/Filter/Filter";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleChange = evt => {

        switch(evt.currentTarget.name) {
            case 'name': 
            setName(evt.currentTarget.value);
            break;

            case 'number': 
            setNumber(evt.currentTarget.value);
            break;

            default: 
                return;
        }
      };

      const handleSubmit = e => {
        e.preventDefault();

        if(contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        )
        ) {
            alert(`${name} is already in contact.`)
            return;
        } else {
            dispatch(addContact({ id: shortid.generate(), name, number }));
            resetForm();
        }
      };

      const resetForm = () => {
        setName('');
        setNumber('');
      }

    return (
        <>
        <Card sx={{ maxWidth: 345, border: '1px solid black' }}>
            <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
                    Phonebook
                </Typography>
                <Filter />

            <Box component="form" autoComplete="off" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    fullWidth
                    id="name"
                    label="Name"
                    autoComplete="name"
                    autoFocus
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <TextField
                    margin="normal"
                    fullWidth
                    label="Number"
                    id="number"
                    autoComplete="current-password"
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Add contact
                </Button>
            </Box>
                </CardContent>
            </CardActionArea>
        </Card>

        {/* <form className={style.form} onSubmit={handleSubmit}>
            <label>
                Name
                <input
                className={style.inputName}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label>
                Number
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required

                />
                </label>
            <button type="submit">Add contact</button>
        </form> */}
        </>

    )

};
