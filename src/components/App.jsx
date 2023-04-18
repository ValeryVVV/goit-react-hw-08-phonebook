import ContactList from "./ContactLists/ContactLists";
import Filter from "./Filter/Filter";

import style from './App.module.css';
import ContactForm from "./ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getError, getIsLoading } from "redux/contacts/selectors";
import { fetchContacts } from "redux/contacts/operations";
import { AppBar } from "./AppBar/AppBar";
import { Route, Routes } from "react-router-dom";
import PhonebookContacts from "./PhonebookContacts/PhonebookContacts";
import { Layout } from "./Layout";
import Home from "./HomePage/HomePage";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { LoginForm } from "./LoginForm/LoginForm";

export default function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/contacts" element={<PhonebookContacts />} />
            </Route>
        </Routes>
    )

};
