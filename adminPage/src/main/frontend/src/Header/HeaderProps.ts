export interface HeaderProps {
    title: string;
    isOpenModal: boolean;
    setIsOpenModal: (isOpen: boolean) => void;
    showSettings: () => void;
}