import React from 'react';
import {Modal} from "antd";
import {UserFormProps} from "./UserFormProps";

const UserForm = ({open, setOpen}: UserFormProps) => {

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <Modal title="Basic Modal" open={open} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    );
};

export default UserForm;