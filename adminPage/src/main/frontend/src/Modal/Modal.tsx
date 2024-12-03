import React, {FC} from 'react';
import {Modal as AntdModal, Typography} from 'antd';
import {ModalProps} from "./ModalProps";
import axios from "axios";

const Modal:FC<ModalProps> = ({isModalOpen, setIsModalOpen, user}) => {
    const {Title} = Typography;

    const handleOk = () => {
        setIsModalOpen(false);
        axios.delete(`http://localhost:8094/api/adminpage/delete?id=${user?.id}`).then(r => {
            console.log("OK")
        })
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <AntdModal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Title level={4}>Вы действительно хотите удалить пользователя {user?.firstName} {user?.lastName}</Title>
        </AntdModal>
    );
};

export default Modal;