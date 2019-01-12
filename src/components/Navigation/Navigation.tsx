import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import './Navigation.css';

class Navigation extends React.Component<{}, {}> {
    render(): React.ReactNode {
        return (
            <Menu mode="horizontal">
                <Menu.Item disabled>
                    Jean Tessier
                </Menu.Item>
                <Menu.Item key="Home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="About">
                    <Link to="/about">About</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;