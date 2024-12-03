import {Table, TableColumnsType, TableProps} from "antd";
import {FC, useEffect, useState} from "react";
import axios from "axios";
import {UserProps} from "./UsersListProps";
import {DeleteOutlined, EditOutlined, MessageOutlined} from "@ant-design/icons";
import Icon from "../Icon";
import {Modal} from "../Modal";

const UsersList: FC = () => {
    const [users, setUsers] = useState<UserProps[]>([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState<UserProps>();


    useEffect(() => {
        axios.get("http://localhost:8094/api/adminpage/all").then(
            r => setUsers(r.data),
        ).catch(e => {
            console.log(e)
        })
    })

    const onOpenDeleteModal = (user: UserProps) => {
        setIsModalOpen(true);
        setUser(user);
    }

    const columns: TableColumnsType<UserProps> = [
            {
                title: 'Имя',
                dataIndex: 'firstName',
                sorter: {
                    compare: (a, b) => a.firstName.localeCompare(b.firstName),

                },
            },
            {
                title: 'Фамилия',
                dataIndex: 'lastName',
                sorter: {
                    compare: (a, b) => a.lastName.localeCompare(b.lastName),

                },
            },
            {
                title: 'Почта',
                dataIndex: 'email',
                sorter: {
                    compare: (a, b) => a.email.localeCompare(b.email),

                },
            },
            {
                title: 'Номер телефона',
                dataIndex: 'phoneNumber',
                sorter: {
                    compare: (a, b) => a.phoneNumber.localeCompare(b.phoneNumber),

                },
            },
            {
                title: 'Роль',
                dataIndex: 'role',
                width: 100,
                sorter: {
                    compare: (a, b) => a.role.localeCompare(b.role),

                },
            },
            {
                title: 'Пол',
                dataIndex: 'sex',
                width: 100,
                sorter: {
                    compare: (a, b) => a.sex.localeCompare(b.sex),

                },
            },
            {
                key: "x",
                dataIndex: '',
                width: 40,
                render: (user: UserProps) => <Icon pointer component={<DeleteOutlined onClick={() => onOpenDeleteModal(user)} style={{color: "red"}}/>}
                                    />
            },
            {
                key: 'y',
                dataIndex: '',
                width: 40,
                render: () => <Icon pointer component={<EditOutlined style={{color: "blue"}}/>}/>

            },
            {
                key: 'z',
                dataIndex: '',
                width: 40,
                render: () => <Icon pointer component={<MessageOutlined/>}/>

            },

        ]
    ;

    const onChange: TableProps<UserProps>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <>
        <Table<UserProps> columns={columns}
                          dataSource={users.map(user => {
                              return ({
                                  ...user, key: user.id
                              })
                          })}
                          onChange={onChange}
                          pagination={{showSizeChanger: true, total: users.length, defaultPageSize: 5}}/>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} user={user}/>
        </>
    )
}

export default UsersList;