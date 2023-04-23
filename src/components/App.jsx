import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PhonebookContacts from "./PhonebookContacts/PhonebookContacts";
import { Layout } from "./Layout";
import Home from "./HomePage/HomePage";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { LoginForm } from "./LoginForm/LoginForm";
import { refreshUser } from "redux/auth/auth-operations";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);


    return (
        <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route
                    path="/register"
                    element={
                        <RestrictedRoute redirectTo="/contacts" component={<RegisterForm />} />
                    }
                />

                <Route
                    path="/login"
                    element={
                        <RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />
                    }
                />

                <Route
                    path="/contacts"
                    element={
                        <PrivateRoute redirectTo="/login" component={<PhonebookContacts />} />
                    }
                />
            </Route>
        </Routes>


        </>
    )

};
