import * as React from 'react';
import './Header.scss';
export interface HeaderProps extends React.Props<Header> {
}
export interface HeaderState {
    is_open: boolean;
    clickedMenu: string;
    dropdownIsOpen: boolean;
}
declare class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: any);
    handleDropdownToggle: (clickedMenu: any) => void;
    handleToggle: () => void;
    renderNavs(): JSX.Element[];
    render(): JSX.Element;
}
export default Header;
