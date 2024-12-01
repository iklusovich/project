
import {IconProps} from "./IconProps";
import "./style.css";
import React, {ReactNode} from "react";
import {Badge} from "antd";
const Icon = ({component, value, pointer}: IconProps) => {

    const HOC: ReactNode = <div className="icon" style={{cursor: pointer ? "pointer" : "none"}}>
        {value && <Badge count={value} size={"small"}>
            {component}
        </Badge>}
        {!value && component}
    </div>

    return (
       HOC
    );
};

export default Icon;