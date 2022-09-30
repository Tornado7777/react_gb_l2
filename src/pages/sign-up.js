import { useState } from "react";
import { auth } from "../api/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const onSubmit = (form) => {
    return createUserWithEmailAndPassword(auth, form.email, form.password);
}

export const SignUpPage = () => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChangeForm = (e) => {
        const field = e.target.getAttribute("data-name");

        setForm({
            ...form,
            [field]: e.target.value,
        });
    };
    return (
        <div>
            <hr />
            <h1>sign up page</h1>
            <hr />
            <input
                placeholder="email"
                value={form.email}
                data-name="email"
                onChange={handleChangeForm}
            />
            <input
                placeholder="password"
                value={form.password}
                data-name="password"
                onChange={handleChangeForm}
            />
            <button onClick={() => {
                onSubmit(form);
            }}>
                sign up
            </button>
        </div>
    );
};