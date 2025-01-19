import axios from "axios";
import { EmployeeStateType, FormLogin, FormRegister } from "../../types/types";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees'
const API_URL = "http://localhost:8080/api/auth";
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
export const registerUser = async (formData: FormRegister) => {
    return await axios.post(`${API_URL}/api/auth/register`, formData);
};

export const loginUser = async (formData: FormLogin) => {
    return await axios.post(`${API_URL}/api/auth/login`, formData);
};
