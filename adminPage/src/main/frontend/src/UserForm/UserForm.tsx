import React, {FC, useState} from 'react';
import {Button, DatePicker, DatePickerProps, Form, Input, Modal, Radio, RadioChangeEvent, Select, Space} from "antd";
import {FieldType, Roles, Sex, UserFormProps} from "./UserFormProps";
import {ModalTitle} from "./ModalTitle";
import SubmitButton from "../SubmitButton";
import {MaskedInput} from "antd-mask-input";
import axios from "axios";


const UserForm: FC<UserFormProps> = ({open, setOpen}) => {
    const [form] = Form.useForm();

    const [sexValue, setSexValue] = useState(Sex.MALE);

    const onChangeSex = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setSexValue(e.target.value);
    };

    const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };

   const onCloseModal = () => {
        setOpen(false);
    }

   const onSubmit = () => {
       axios.post("http://localhost:8094/api/users/add", form)
   }

    return (
        <Modal title={ModalTitle.SETTINGS} open={open} footer={null} onCancel={onCloseModal}>
            <Form
                form={form}
                name="validateOnly"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Имя"
                    name="firstName"
                    rules={[{required: true, message: 'Введите имя'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Фамилия"
                    name="lastName"
                    rules={[{required: true, message: 'Введите фамилию'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Email"
                    name="email"
                    rules={[{required: true, type: 'email', message: 'Введите email'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<FieldType>
                    label="Роль"
                    name="role"
                    rules={[{required: true, message: 'Выберите роль'}]}
                    initialValue={Roles.USER}
                >
                    <Select
                        style={{maxWidth: "400"}}
                        options={Object.values(Roles).map((item) => {
                            return {value: item}
                        })}
                    />
                </Form.Item>
                <Form.Item<FieldType>
                    label="Дата рождения"
                    name="date"
                    rules={[{required: true, message: 'Выберите дату'}]}
                >
                    <DatePicker onChange={onChangeDate}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Пол"
                    name="sex"
                    rules={[{required: true}]}
                    initialValue={Sex.MALE}
                >
                    <Radio.Group onChange={onChangeSex} value={sexValue}>
                        {
                            Object.entries(Sex).map(([key, value]) => (
                                <Radio key={key} value={value}>{value}</Radio>
                            ))
                        }
                    </Radio.Group>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Номер телефона"
                    name="phoneNumber"
                    rules={[
                        {required: true, message: 'Введите номер телефона'},
                        {
                            pattern: /^\+\d\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
                            message: "Не правильный формат номера телефона"
                        }
                    ]}
                >

                   <MaskedInput mask="+0 (000) 000-00-00"/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Пароль"
                    name="password"
                    rules={[{required: true, message: 'Введите пароль'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item<FieldType>
                    label="Повторите пароль"
                    name="repeatPassword"
                    rules={
                        [
                            {required: true, message: 'Пароли должны совпадать'},
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (getFieldValue('password') == value) {
                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject(new Error("Пароли должны совпадать"));
                                    }
                                },
                            }),

                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item>
                    <Space style={{marginLeft: 310}}>
                        <SubmitButton form={form} onSubmit={onSubmit}>Submit</SubmitButton>
                        <Button onClick={onCloseModal}>Cancel</Button>
                    </Space>
                </Form.Item>
            </Form>

        </Modal>
    );
};

export default UserForm;