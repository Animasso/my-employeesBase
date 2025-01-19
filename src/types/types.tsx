export interface EmployeeType {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}

export interface EmployeeStateType {
    firstName: string;
    lastName: string;
    email: string;
}

export interface FormLogin {
    email: string;
    password: string;
}

export interface FormRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface LoginAndRegisterProps {
    type: "login" | "register";
}
