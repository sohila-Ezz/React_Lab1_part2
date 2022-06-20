import { useState } from "react";

export default function RegisterForm() {
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validPassword = new RegExp('^(?=.?[A-Za-z])(?=.?[0-9])(?=.?[#?!@$%^&-]).{8,}$');
    const [user, setUser] = useState({
        name: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        nameError: null,
        emailError: null,
        userNameError: null,
        passwordError: null,
        confirmPasswordError: null
    });
    const handleChange = (evt) => {
        console.log(evt.target);

        if (evt.target.name == "name") {
            setUser({ ...user, name: evt.target.value });
        } else if (evt.target.name == "email") {
            setUser({ ...user, email: evt.target.value });
        } else if (evt.target.name == "userName") {
            setUser({ ...user, userName: evt.target.value });
        } else if (evt.target.name == "password") {
            setUser({ ...user, password: evt.target.value });
        } else if (evt.target.name == "confirmPassword") {
            setUser({ ...user, confirmPassword: evt.target.value });
        }

        if (evt.target.name == "name") {
            setErrors({
                ...errors,
                nameError:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : null,
            });
        }
        if (evt.target.name == "email") {
            setErrors({
                ...errors,
                emailError:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : !validEmail.test(evt.target.value)
                            ? "Email format not match"
                            : null,
            });
        }
        if (evt.target.name == "userName") {
            setErrors({
                ...errors,
                userNameError:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : evt.target.value.includes(" ")
                            ? "User Name must not contain space"
                            : null,
            });
        }
        if (evt.target.name == "password") {
            setErrors({
                ...errors,
                passwordError:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : !validPassword.test(evt.target.value)
                            ? "password lenght not less than 8 Characters and must contains at least on digit and Special charactre ex[@&*$]"
                            : null,
            });
        }
        if (evt.target.name == "confirmPassword") {
            setErrors({
                ...errors,
                confirmPasswordError:
                    evt.target.value.length == 0
                        ? "This field is required"
                        : evt.target.value === validPassword
                            ? "not match password"
                            : null,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Register Successfully")
    }
    return (
        <>
            <form onSubmit={(e) => { handleSubmit(e) }} style={{margin:"auto",width:"500px"}} className="border p-4 text-light">
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className={`form-control ${(errors.nameError) ? 'border-danger' : ''}`}
                        placeholder="Enter your name"
                        value={user.name}
                        name="name"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    <small className="text-danger">{errors.nameError}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                        value={user.email}
                        name="email"
                        onChange={(e) => {
                            handleChange(e);
                        }}

                    />
                    <small className="text-danger">{errors.emailError}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">
                        User Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your User Name"
                        value={user.userName}
                        name="userName"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    <small className="text-danger">{errors.userNameError}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={user.password}
                        name="password"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    <small className="text-danger">{errors.passwordError}</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder=" Confirm Password"
                        value={user.confirmPassword}
                        name="confirmPassword"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    <small className="text-danger">{errors.confirmPasswordError}</small>
                </div>
                <div className=" d-grid gap-2">
                <button type="submit" className="btn btn-outline-light btn-block">Register</button>
                </div>
            </form>
        </>
    );
}