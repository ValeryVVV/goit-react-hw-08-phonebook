import React from "react";
import PropTypes from 'prop-types';

import style from './ContactLists.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/contacts/selectors";
import { deleteContact } from "redux/contacts/operations";


const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      };
    
      const visibleContacts = getVisibleContacts();

    return(

        <>
        <ul>
        {visibleContacts.map(({ id, name, number }) => (
          <li key={id} className={style.item}>
            <p className={style.contact}>
              {name}...
              {number}
            </p>
            <button className={style.btn} type="submit" onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

export default ContactList;
