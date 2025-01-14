import { useState } from "react";
import { EmployeeStateType } from "../types/types";

const NewEmployee = () => {
    const [formSubmit, setFormSubmit] = useState(false)
    const [formData, setFormData] = useState<EmployeeStateType>({
        firstName: '',
        lastName: '',
        email: '',

    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Employee added successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                })
                setFormSubmit(true)
            } else {
                console.error('Failed to add employee.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className=" shadow-2xl w-1/2 border-2 px-9 py-5 mt-10 justify-self-center ">
            <h2 className=" font-bold mt-12 text-center mb-8">Add New Employee</h2>
            {!formSubmit && (
                <form onSubmit={handleSubmit} className=" text-center flex flex-col gap-9" >
                    {/* form fields */}

                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input className=" ml-5 bg-slate-100 shadow-lg border-2 rounded-sm" type="text" id="firstName" name="firstName" onChange={handleChange} value={formData.firstName} required />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input className=" ml-5 bg-slate-100 shadow-lg border-2 rounded-sm" type="text" id="lastName" name="lastName" onChange={handleChange} value={formData.lastName} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input className=" ml-5 bg-slate-100 shadow-lg border-2 rounded-sm" type="email" id="email" name="email" onChange={handleChange} value={formData.email} required />
                    </div>
                    <div>
                        <button className=" hover:bg-blue-800 bg-blue-700 border shadow-2xl px-3 py-2 text-white rounded-lg" type="submit">Submit</button>
                    </div>
                </form>
            )}

            {formSubmit && (
                <div className=" text-center">
                    <h3 className="">You add a new employee</h3>
                    <button className="  mt-5 px-3 py-2 bg-blue-600 text-white hover:bg-blue-700" onClick={(() => setFormSubmit(!formSubmit))}>Add new employee</button>
                </div>

            )}
        </div>
    )
}

export default NewEmployee