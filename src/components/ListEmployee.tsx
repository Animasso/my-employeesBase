import { useEffect, useState } from "react"
import { EmployeeType } from "../types/types"
import { deleteEmployee, listEmployees } from "./services/EmployeeService"
import { useNavigate } from "react-router-dom"

const ListEmployee = () => {

    const [employees, setEmployees] = useState<EmployeeType[]>([])
    const nagivate = useNavigate()
    const updateEmployee = (id: number) => {
        nagivate(`/update-employee/${id}`)
    }
    useEffect(() => {
        getAllEmployees()
    }, [])
    const getAllEmployees = () => {
        listEmployees().then((response) => {
            console.log('response:', response)
            setEmployees(response.data)
        }).catch((error) => {
            console.error("Error fetching employees:", error)
        })
    }
    const addNewEmployee = () => {
        nagivate("/add-new-employee")
    }
    const removeEmployee = (id: number) => {
        deleteEmployee(id).then((response) => {
            console.log('response:', response)
            getAllEmployees()
        }).catch((error) => {
            console.error('Error:', error);
        });
    }
    return (
        <div className=" w-full px-12">

            <h2 className=" text-center font-semibold text-3xl mt-10  space-x-3 mb-9">List of Employees</h2>
            <button onClick={addNewEmployee} className=" bg-blue-700 text-white hover:bg-blue-900 px-3 py-2 mb-4 rounded-lg">Add Employee</button>
            <table className="w-full text-sm  text-center text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 ">Employee Id</th>
                        <th scope="col" className="px-6 py-3 ">Employee First Name</th>
                        <th scope="col" className="px-6 py-3 ">Employee Last Name</th>
                        <th scope="col" className="px-6 py-3 ">Employee Email </th>
                        <th scope="col" className="px-6 py-3 ">Actions </th>

                    </tr>
                </thead>
                <tbody>

                    {employees.length > 0 ? (
                        employees.map((employee) => (
                            <tr className="px-6 py-4 border-b-2 odd:bg-slate-300" key={employee.id}>
                                <td className="px-6 py-4 font-extrabold ">{employee.id}</td>
                                <td className="px-6 py-4 ">{employee.firstName}</td>
                                <td className="px-6 py-4 ">{employee.lastName}</td>
                                <td className="px-6 py-4 ">{employee.email}</td>
                                <td className="px-6 py-4 ">
                                    <div className=" space-x-5">
                                        <button onClick={() => updateEmployee(employee.id)} className=" bg-cyan-500 hover:bg-cyan-600 text-xs text-white px-3 rounded-lg py-3">Update</button>
                                        <button onClick={() => removeEmployee(employee.id)} className=" bg-red-600 hover:bg-red-700 text-xs text-white px-3 rounded-lg py-3">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="px-6 py-4 text-center">No employees found.</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}
export default ListEmployee