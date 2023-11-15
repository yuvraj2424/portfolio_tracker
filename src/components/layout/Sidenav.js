
import React, { useCallback, useContext } from "react";
import { Menu } from "antd";
import { useLocation } from "react-router-dom";
import {
    UploadOutlined, DashboardOutlined,
    UserOutlined
} from '@ant-design/icons';
import { AuthContext } from "../../context/AuthContext";

function Sidenav() {
    const { pathname } = useLocation();
    const page = pathname.replace("/", "");
    const { setAuth } = useContext(AuthContext);
    
    const onPress = useCallback((e)=>{
        switch (e.key) {
            case '3':
                setAuth(false);
                break;
        
            default:
                break;
        }
    },[])

    return (
        <>
            <Menu
                theme="light"
                mode="inline"
                className="menu-list"
                onClick={onPress}
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <DashboardOutlined />,
                        label: 'Dashbord',
                    },
                    {
                        key: '2',
                        icon: <UserOutlined />,
                        label: 'My Profile',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'LogOut',
                        
                    }
                ]}
            />
        </>
    );
}

export default React.memo(Sidenav);
