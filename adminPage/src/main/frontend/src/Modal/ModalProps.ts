import {UserProps} from "../UsersList/UsersListProps";

export interface ModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    user?: UserProps
}