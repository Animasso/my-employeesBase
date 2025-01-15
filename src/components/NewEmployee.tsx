import { useEffect, useState } from "react";
import { EmployeeStateType } from "../types/types";
import { useNavigate, useParams } from "react-router-dom";
import { addEmployee, getForUpdateEmployee, updateEmployee } from "./services/EmployeeService";

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


    const navigate = useNavigate()
    const { id } = useParams()
    const pageTitle = () => {
        if (id) {
            return "Edit Employee"
        } else {
            return "Add New Employee"
        }
    }

    useEffect(() => {
        if (id) {
            const numericId = parseInt(id, 10);
            getForUpdateEmployee(numericId).then((response) => {
                setFormData(response.data);
            }).catch((error) => {
                console.error("Error fetching employee data:", error);
            });
        }


    }, [id])
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (id) {
            await updateEmployee(parseInt(id, 10), formData);
            setFormSubmit(true)

        }
        addEmployee(formData).then((response) => {
            console.log('Employee added successfully!', response.data);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
            })
            setFormSubmit(true)

        })

    };
    const changeButton = () => {
        if (id) {
            return <button className=" hover:bg-blue-500 bg-blue-400 border shadow-2xl px-3 py-2 text-white rounded-lg" type="submit">Update Employee</button>

        } else {
            return <button className=" hover:bg-blue-800 bg-blue-700 border shadow-2xl px-3 py-2 text-white rounded-lg" type="submit">Add Employee</button>

        }

    }
    return (
        <div className=" shadow-2xl w-1/2 border-2 px-9 py-5 mt-10 justify-self-center ">
            <h2 className=" font-bold mt-12 text-center mb-8">{pageTitle()}</h2>
            {!formSubmit && (
                <form onSubmit={handleSubmit} className=" text-center flex flex-col gap-9" >

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
                        {changeButton()}
                    </div>
                </form>
            )}

            {formSubmit && id ? (
                <div className=" text-center">
                    <h3 className="">Employee data Update</h3>
                    <div className="flex text-center gap-4  mt-5 ">
                        <button className="rounded-lg px-3 py-2 bg-blue-600 text-white hover:bg-blue-700" onClick={(() => setFormSubmit(!formSubmit))}>Add new employee</button>
                        <button onClick={() => navigate("/")} className=" hover:bg-green-500  bg-green-400 border shadow-2xl px-3 py-2 text-white rounded-lg" type="button">Go to My employees List</button>
                    </div>
                </div>

            ) : (formSubmit &&
                <div className=" text-center">
                    <h3 className="">You add a new employee</h3>
                    <div className="flex text-center gap-4  mt-5 ">
                        <button className="rounded-lg px-3 py-2 bg-blue-600 text-white hover:bg-blue-700" onClick={(() => setFormSubmit(!formSubmit))}>Add new employee</button>
                        <button onClick={() => navigate("/")} className=" hover:bg-green-500  bg-green-400 border shadow-2xl px-3 py-2 text-white rounded-lg" type="button">Go to My employees List</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NewEmployee