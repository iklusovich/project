import {Button, Form} from "antd";
import {FC, PropsWithChildren, useEffect, useState} from "react";
import {SubmitButtonProps} from "./SubmitButtonProps";

const SubmitButton: FC<PropsWithChildren<SubmitButtonProps>> = ({ form, children, onSubmit }) => {
    const [submittable, setSubmittable] = useState<boolean>(false);

    const values = Form.useWatch([], form);

    useEffect(() => {
        form
            .validateFields({ validateOnly: true })
            .then(() => setSubmittable(true))
            .catch(() => setSubmittable(false));
    }, [form, values]);

    return (
        <Button type="primary" htmlType="submit" disabled={!submittable} onClick={(data)=>onSubmit(data)}>
            {children}
        </Button>
    );
};

export default SubmitButton;