import { useState } from "react";
import { FormLogin, FormRegister, LoginAndRegisterProps } from "../types/types";
import { loginUser, registerUser } from "./services/EmployeeService";
import { useNavigate } from "react-router-dom";



const LoginAndRegister: React.FC<LoginAndRegisterProps> = ({ type }) => {
    const [formDataLogin, setFormDataLogin] = useState<FormLogin>({
        email: "",
        password: "",
    });
    const [formDataRegister, setFormDataRegister] = useState<FormRegister>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormDataLogin({
            ...formDataLogin,
            [name]: value,
        });
    };

    const handleChangeRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormDataRegister({
            ...formDataRegister,
            [name]: value,
        });
    };

    const handleSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await loginUser(formDataLogin);
            console.log("response:", response);
            // Redirection après connexion réussie
            navigate("/listemployee");
        } catch (error) {
            alert("Invalid email or password");
        }
    };

    const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await registerUser(formDataRegister);
            console.log("response:", response);
            // Redirection après enregistrement réussi
            navigate("/login");
        } catch (error) {
            alert("Error during registration");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {type === "login" ? (
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                    <form onSubmit={handleSubmitLogin} className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="email"
                                value={formDataLogin.email}
                                onChange={handleChangeLogin}
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                type="password"
                                value={formDataLogin.password}
                                onChange={handleChangeLogin}
                                id="password"
                                name="password"
                                placeholder="********"
                            />
                        </div>
                        <button
                            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                            type="submit"
                        >
                            Login
                        </button>
                        <div>
                            <p onClick={() => navigate("/register")} className="cursor-pointer mt-4 underline">
                                You don't have an account? Register
                            </p>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl font-bold mb-6 text-center">Registration</h1>
                    <form onSubmit={handleSubmitRegister} className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                value={formDataRegister.firstName}
                                onChange={handleChangeRegister}
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="John"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                value={formDataRegister.lastName}
                                onChange={handleChangeRegister}
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Doe"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                value={formDataRegister.email}
                                onChange={handleChangeRegister}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                value={formDataRegister.password}
                                onChange={handleChangeRegister}
                                type="password"
                                id="password"
                                name="password"
                                placeholder="********"
                            />
                        </div>
                        <button
                            className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                            type="submit"
                        >
                            Register
                        </button>
                        <div>
                            <p onClick={() => navigate("/login")} className="cursor-pointer mt-4 underline">
                                Already have an account? Login
                            </p>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default LoginAndRegister;
