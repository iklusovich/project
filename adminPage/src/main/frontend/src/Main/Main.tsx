import React from 'react';
import Header from "../Header";
import {HeaderEnum} from "../enums/HeaderEnum";
import UserForm from "../UserForm";

const Main = () => {
    const [isOpenSettings, setIsOpenSettings] = React.useState(false);
    const showSettings = () => {

        setIsOpenSettings(!isOpenSettings);
        console.log(isOpenSettings);
    }
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
        </div>
    );
};

export default Main;