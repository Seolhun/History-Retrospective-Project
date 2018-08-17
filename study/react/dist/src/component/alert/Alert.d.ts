import React from 'react';
export interface AlertProps {
    onClickClose: () => any;
    message: string;
    title?: string;
    isShow?: boolean;
    buttonLabel?: string;
    color?: string;
    position?: string;
}
declare const Alert: React.SFC<AlertProps>;
export default Alert;
