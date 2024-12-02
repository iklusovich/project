export interface UserFormProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export enum Roles  {
    USER = 'USER',
    SUPER_USER = 'SUPER_USER',
    ADMIN = 'ADMIN',
}

export enum Sex {
    MALE = 'Мужской',
    FEMALE = 'Женский',
}

export type FieldType = {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    repeatPassword?: string;
    sex?: string;
    phoneNumber?: string;
    role?: typeof Roles;
    date?: Date;
};