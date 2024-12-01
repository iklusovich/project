import {ComponentType, FunctionComponent, JSX, ReactNode} from "react";

export interface IconProps  {
    component: ReactNode;
    value?: number
    pointer?: boolean
    onClick?: () => void
    isOpenSettings: boolean
}