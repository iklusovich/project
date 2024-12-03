import React from 'react';
import Header from "../Header";
import {HeaderEnum} from "../enums/HeaderEnum";
import UserForm from "../UserForm";
import {PlusOutlined} from "@ant-design/icons";
import {Button} from "antd";
import UsersList from "../UsersList";


const Main = () => {
    const [isOpenSettings, setIsOpenSettings] = React.useState(false);

    const showSettings = () => setIsOpenSettings(!isOpenSettings);

    return (
        <div>
            <Header
                title={HeaderEnum.ADMIN_PAGE}
                isOpenModal={isOpenSettings}
                setIsOpenModal={setIsOpenSettings}
                showSettings={()=>showSettings()}/>
            <UserForm
                open={isOpenSettings}
                setOpen={setIsOpenSettings} />
            <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={showSettings}
            >Создать пользователя</Button>
            <UsersList/>
        </div>
    );
};

export default Main;