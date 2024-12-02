import {FormInstance} from "antd";
import React from "react";

export interface SubmitButtonProps {
    form: FormInstance;
    onSubmit: (data: React.MouseEvent<HTMLElement>) => void;
}