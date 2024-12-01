import React from 'react';
import {HeaderProps} from "./HeaderProps";
import {Avatar, Badge, Flex, Typography} from "antd";
import Search from "../Search";
import {BellOutlined, LogoutOutlined, MessageOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import Icon from "../Icon";

const Header = ({title, isOpenModal, showSettings}: HeaderProps) => {

    const {Title} = Typography;

    return (
        <>
            <Flex gap={50} align={'center'} justify={'space-between'} style={{paddingLeft: 40, paddingRight: 40}}>
                <Flex gap={30} align={'center'}>
                    <Title style={{marginBottom: 30}}>{title}</Title>
                    <Search placeholder="input search text" allowClear onSearch={() => {
                    }}/>
                </Flex>
                <Flex gap={30} align={'center'}>
                    <Title style={{marginBottom: 30}} level={3}>Иванов Иван</Title>
                        <Badge count={1}>
                            <Avatar
                                shape="square"
                                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                                icon={<UserOutlined />} />
                        </Badge>
                    <Icon pointer component={<BellOutlined/>} value={3} isOpenSettings={false}/>
                    <Icon pointer component={<MessageOutlined/>} value={3} isOpenSettings={false}/>
                    <Icon pointer component={<SettingOutlined onClick = {showSettings}/>}  isOpenSettings={isOpenModal}/>
                    <Icon pointer component={<LogoutOutlined/>} isOpenSettings={false}/>
                </Flex>
            </Flex>
        </>
    );
};

export default Header;