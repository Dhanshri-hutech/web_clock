import React, { useState} from "react";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
//import './attendance.css';


const Attendance = () => {
    const { Header, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    const toggle = (collapsed) => {
        setCollapsed(!collapsed)
    }
  

    
    return (
        <div>
    
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          
 
      <div className="slot-1" style={{ color: 'red',backgroundColor:'blue',size:'10px',display:'inline-flex'}} >  </div>
      <div className="slot-2"style={{ color: 'red' }}></div>
      <div className="slot-3"style={{ color: 'red' }}></div>
      <div className="slot-4"style={{ color: 'red' }}></div>
      <div className="slot-5"style={{ color: 'red' }}>
  </div>


          </Content>
        </Layout>
      </Layout>
    
        </div>
    )
}

export default Attendance
