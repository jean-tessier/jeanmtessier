import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import './Navigation.scss';

class Navigation extends React.Component<{}, {}> {
    render(): React.ReactNode {
        return (
            <Menu
                id="navigation-menu"
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['Home']}
            >
                <Menu.Item
                    disabled
                    className="navigation-title"
                >
                    <div>
                        Jean Tessier
                    </div>
                </Menu.Item>
                <Menu.Item key="Home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="Personal">
                    <Link to="/personal">Personal Projects</Link>
                </Menu.Item>
                <Menu.Item key="Professional">
                    <Link to="/professional">Professional Projects</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navigation;