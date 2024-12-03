import {Key} from "react";
import {Roles, Sex} from "../UserForm/UserFormProps";

export interface UserProps {
    key: Key;
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    role: Roles;
    date: Date;
    sex: Sex;
    email: string;
}