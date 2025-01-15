import axios from "axios";
import { EmployeeStateType } from "../../types/types";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees'
export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL)

}

export const addEmployee = (employee: EmployeeStateType) => {
    return axios.post(REST_API_BASE_URL, employee)
}

export const deleteEmployee = (employeeId: number) => {
    return axios.delete(`${REST_API_BASE_URL}/${employeeId}`)
}

export const getForUpdateEmployee = (employeeId: number) => {
    return axios.get(`${REST_API_BASE_URL}/${employeeId}`)
}

export const updateEmployee = (employeeId: number, employee: EmployeeStateType) => {
    return axios.put(`${REST_API_BASE_URL}/${employeeId}`, employee)
}