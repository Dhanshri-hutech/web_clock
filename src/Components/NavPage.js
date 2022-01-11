import React, { useState, Fragment } from "react";
//import { nanoid } from "nanoid";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined, PieChartOutlined, FileOutlined,
    TeamOutlined, UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { Modal, Button, Form, Input, message} from 'antd';
import Draggable from 'react-draggable';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
//import ReadOnlyRow from "./ReadOnlyRow";
//import EditableRow from "./EditableRow";





const employees = [
    {
        "id": "101",
        "fullname": "Romin Irani",
        "phonenumber": "9876543210",
        "email": "romin.k.irani@gmail.com",
        "salary": "50,000",
        "designation": "Developer",
        "department": "computers",
        "manager": "rakesh patil"

    },
    {
        "id": "102",
        "fullname": "ganesh deshmukh",
        "phonenumber": "408-1111111",
        "email": "neilrirani@gmail.com",
        "salary": "50,000",
        "designation": "Developer",
        "department": "computers",
        "manager": "reva sharma"

    },
    {
        "id": "103",
        "fullname": "Romin Irani",
        "phonenumber": "9876543210",
        "email": "romin.k.irani@gmail.com",
        "salary": "50,000",
        "designation": "Developer",
        "department": "computers",
        "manager": "rakesh patil"

    },
    {
        "id": "104",
        "fullname": "Romin Irani",
        "phonenumber": "408-2222222",
        "email": "tomhanks@gmail.com",
        "salary": "50,000",
        "designation": "Programmer",
        "department": "computers",
        "manager": "rakesh patil"

    }
];




// const  employees= [];
// for (let i = 0; i < 20; i++) {
//     employees.push({
//     key: i,
//     id: id++,
//     // fullname: `Edrward ${i}`,
//     // phonenumber: 32,
//     // email: `London Park no. ${i}`,
//     // salary: `Edrward ${i}`,
//     // designation: 32,
//     // department: `London Park no. ${i}`,
//     // manager: `London Park no. ${i}`,
//   });
// }




const NavPage = () => {
    
    <Alert message="Success Tips" type="success" showIcon />
        const [componentSize, setComponentSize] = useState('default');
      
        const onFormLayoutChange = ({ size }) => {
          setComponentSize(size);
        };
    const [form] = Form.useForm();
    const [page, setPage] = useState(1);
    const [pageSize, setPagesize] = useState(10);
    const { Header, Content, Footer, Sider } = Layout;
    const { SubMenu } = Menu;
    const [collapsed, setCollapsed] = useState(false);

    const [visibleAddModal, setVisible] = useState(false);
    const [visible, setVisibleForEdit] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [contactId, setContactId] = useState('');
    const bounds = { left: 0, top: 0, bottom: 0, right: 0 }



    // const success = () => {
    //     message.success('This is a success message');
    //   };
    const showModal = (visible) => {
        setVisible(true)
    }
    const handleCancelForAdd = () => {
        setVisible(false)
    }
    const showModalForEdit = (contactId) => {
        const getIndividualRowData=contacts.find(data=>data.id===contactId);
       
        const formValues = {
           id: getIndividualRowData.id,
            fullname: getIndividualRowData.fullname,
            phonenumber: getIndividualRowData.phonenumber,
            email: getIndividualRowData.email,
            salary: getIndividualRowData.salary,
            designation: getIndividualRowData.designation,
            department: getIndividualRowData.department,
            manager: getIndividualRowData.manager,
        };

        setEditFormData(formValues);
        form.setFieldsValue({
            id:getIndividualRowData.id,
            fullname:getIndividualRowData.fullname,
            phonenumber: getIndividualRowData.phonenumber,
            email: getIndividualRowData.email,
            salary:getIndividualRowData.salary,
            designation:getIndividualRowData.designation,
            department:getIndividualRowData.department,
            manager: getIndividualRowData.manager
          });
        setVisibleForEdit(true)
        setEditContactId(contactId);
    }
    const cancelModalForEdit = (visible) => {
        setVisibleForEdit(false)
    }
    const handleOk = (e) => {
        setVisible(visible)
    }

    // const handleCancel = (e) => {
    //     setVisible(!visible)
    // }
    const onMouseOver = (e) => {
        if (disabled) {
            setDisabled(disabled);
        }
    }
    const onMouseOut = (e) => {
        setDisabled(!disabled);
    }


    const draggleRef = React.createRef();

    const onStart = (event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setDisabled({
            bounds: {
                left: -targetRect.left + uiData.x,
                right: clientWidth - (targetRect.right - uiData.x),
                top: -targetRect.top + uiData.y,
                bottom: clientHeight - (targetRect.bottom - uiData.y),
            },
        });
    };



    const [contacts, setContacts] = useState(employees);
    const [addFormData, setAddFormData] = useState({
        id: "",
        fullname: "",
        phonenumber: "",
        email: "",
        salary: "",
        designation: "",
        department: "",
        manager: "",

    });

    const [editFormData, setEditFormData] = useState
        ({
            id: "",
            fullname: "",
            phonenumber: "",
            email: "",
            salary: "",
            designation: "",
            department: "",
            manager: "",

        });
    //const [index, setIndex] = useState(null);
    const [editContactId, setEditContactId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        const newContact = {
            id: addFormData.id,
            fullname: addFormData.fullname,
            phonenumber: addFormData.phonenumber,
            email: addFormData.email,
            salary: addFormData.salary,
            designation: addFormData.designation,
            department: addFormData.department,
            manager: addFormData.manager,
        };
        const validate = contacts.some(data => (data.phonenumber === addFormData.phonenumber) || (data.email === addFormData.email)||(data.id === addFormData.id));
        if (validate) {
            message.error('User already exist')
        } else {
            const newContacts = [...contacts, newContact];
            setContacts(newContacts);
            setVisible(false)
            message.success("Employee Data Succesfully added!");
        }

    };


    const handleEditFormSubmit = (event) => {
        
        const editedContact = {
            id: editFormData.id,
            fullname: editFormData.fullname,
            phonenumber: editFormData.phonenumber,
            email: editFormData.email,
            salary: editFormData.salary,
            designation: editFormData.designation,
            department: editFormData.department,
            manager: editFormData.manager,
        };

        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
        setVisibleForEdit(false)
        
    };

    // const handleEditClick = (event, contact) => {
    //     event.preventDefault();
       

    //     const formValues = {

    //         id:contact.id,
    //         fullname: contact.fullname,
    //         phonenumber: contact.phonenumber,
    //         email: contact.email,
    //         salary: contact.salary,
    //         designation: contact.designation,
    //         department: contact.department,
    //         manager: contact.manager,
    //     };

    //     setEditFormData(formValues);
    // };

    // const handleCancelClick = () => {
    //     setEditContactId(null);
    // };
    const confirmDelete = () => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);
        setDeleteModalVisible(false);
        setContacts(newContacts);
    }
    const handleDeleteClick = (contactId) => {
        setContactId(contactId);
        setDeleteModalVisible(true);

    };


    const onCollapse = (collapsed) => {
        setCollapsed(!collapsed)
    }
    //--added
    // const showModalOnDelete = () => {
    //     setDeleteModalVisible(true);
    // };

    // const handleOkOnDelete = () => {
    //     setDeleteModalVisible(false);
    // };

    const handleCancelOnDelete = () => {
        setDeleteModalVisible(false);
    };
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 101,
            
        },
    
        {
            title: 'FULL NAME',
            width: 100,
            dataIndex: 'fullname',
            key: 'fullname',
            fixed: 'left',
        },
        {
            title: 'PHONE NUMBER',
            width: 100,
            dataIndex: 'phonenumber',
            key: 'phonenumber',
            fixed: 'left',
        },
        {
            title: 'EMAIL',
            dataIndex: 'email',
            key: 'email',
            width: 150,
        },
        {
            title: 'SALARY',
            dataIndex: 'salary',
            key: 'salary',
            width: 150,
        },
        {
            title: 'DESIGNATION',
            dataIndex: 'designation',
            key: 'designation',
            width: 150,
        },
        {
            title: 'DEPARTMENT',
            dataIndex: 'department',
            key: 'department',
            width: 150,
        },
        {
            title: 'MANAGER',
            dataIndex: 'manager',
            key: 'manager',
            width: 150,
        },
    
    
        {
            title: 'ACTIONS',
            render: (contactId) => {
                return <>
                    <EditOutlined onClick={()=>showModalForEdit(contactId.id)} />
                    <DeleteOutlined onClick={()=>handleDeleteClick(contactId.id)} style={{ color: "red", marginLeft: 12 }} />
                    {/* <button
              type="button"
              onClick={(event) => handleEditClick(event, contact)}
            >
              Edit
            </button> */}
    
                    {/* <button type="button" onClick={() => showModalOnDelete(contactId)}>
              Delete
            </button>  */}
                </>
            }
    
        },
    ];
    return (
        <div>
            <Modal title="Basic Modal" visible={deleteModalVisible} onOk={confirmDelete} onCancel={handleCancelOnDelete}>
                <p>Are you sure delete this employee data?</p>
            </Modal>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Directory
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            My Profile
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">USER1</Menu.Item>
                            <Menu.Item key="4">USER2</Menu.Item>
                            <Menu.Item key="5">USER3</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>EMPLOYEE DATA</Breadcrumb.Item>

                        </Breadcrumb>

                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360, alignItems:"end"}}>
<div className="button">
                     <Button style={{float: 'right'}} onClick={showModal} >ADD</Button>
                            <Modal
                                title={
                                    <div
                                        style={{ width: '100%', cursor: 'move', }}
                                        onMouseOver={onMouseOver}
                                        onMouseOut={onMouseOut}

                                        onFocus={() => { }}
                                        onBlur={() => { }}
                                    // end
                                    >Add Your Deatails here!
                                    </div>
                                }
                                visible={visibleAddModal}
                                footer={null}
                                onCancel={handleCancelForAdd}
                                modalRender={modal => (
                                    <Draggable
                                        disabled={disabled}
                                        bounds={bounds}
                                        onStart={(event, uiData) => onStart(event, uiData)}
                                    >
                                        <div ref={draggleRef}>{modal}</div>
                                    </Draggable>
                                )} > 
                                    <Form onFinish={handleAddFormSubmit}labelCol={{span: 6,}}
                                    wrapperCol={{span: 14,}}layout="horizontal" initialValues={{size: componentSize,}}
                                    onValuesChange={onFormLayoutChange}size={componentSize}
                                    requiredMark={false}
                                            colon={false}>
                         
                            {/* <Input disabled/> */}
                            <Form.Item name="id" label="ID" 
                                    rules ={[
                                        {
                                        required:true,
                                        message:"please enter your id" },
                                        {whitespace:true},{min:3},
                                   ]}
                                    //hasFeedback
                                    >
                                        <Input
                                            type="text"
                                            name="id"
                                            
                                
                                            autocapitalize= "on"
                                            placeholder="Enter a id..."
                                            onChange={handleAddFormChange} ></Input>
                                    </Form.Item>
                            
                                <Form.Item name="fullname" label="Full Name" 
                                    rules ={[
                                        {
                                       required:true,
                                        message:"Please enter your fullname" },
                                        {whitespace:true},{min:3},
                                   ]} 
                                   //hasFeedback
                                   >
                                        <Input
                                            type="text"
                                            name="fullname"
                                            required="required"
                                
                                            autocapitalize= "on"
                                            placeholder="Enter a fullname..."
                                            onChange={handleAddFormChange} ></Input>
                                    </Form.Item>


                                    <Form.Item
                                        name="phonenumber"
                                        label="Phone Number"
                                        rules={[
                                            { required: true,
                                                 message: 'Please input your phone number!' },
                                    ]}
                                       // hasFeedback
                                    >
                                        <Input
                                            type="tel"
                                            id="phone"
                                            name="phonenumber"
                                            required="required"
                                            placeholder="Enter an phonenumber..."
                                            onChange={handleAddFormChange}
                                        ></Input>
                                    </Form.Item>


                                    <Form.Item
                                        name="email"
                                        label="E-mail"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ]}
                                        //hasFeedback
                                    >
                                        <Input
                                            type="email"
                                            name="email"
                                            required="required"
                                            placeholder="Enter a email..."
                                            onChange={handleAddFormChange}
                                        ></Input>
                                    </Form.Item>

                                    <Form.Item 
                                    name="salary"
                                        label="Salary"
                                        rules={[
                                         
                                            {
                                                required: true,
                                                message: 'Please input your Salary',
                                            },
                                        ]}    
                                        // hasFeedback
                                        >
                                    
                                        <Input
                                            type= "text"
                                            name="salary"
                                            required="required"
                                            placeholder="Enter an salary..."
                                            onChange={handleAddFormChange}
                                        ></Input>
                                    </Form.Item>

                                    <Form.Item  name="designation" label="Designation"  
                                      rules={[
                                         
                                         {
                                             required: true,
                                             message: 'Please input your designation',
                                         },
                                     ]} 
                                        // hasFeedback
                                         >
                                 
                                        <Input
                                            type="text"
                                            name="designation"
                                            required="required"
                                            placeholder="Enter an designation..."
                                            onChange={handleAddFormChange}
                                        ></Input>
                                    </Form.Item>

                                    <Form.Item name="department"label="Department"  
                                     rules={[
                                         
                                         {
                                             required: true,
                                             message: 'Please input your department',
                                         },
                                     ]}  
                                    //    hasFeedback
                                       >
                                 
                                        <Input
                                            type="text"
                                            name="department"
                                            required="required"
                                            placeholder="Enter an department..."
                                            onChange={handleAddFormChange}
                                        ></Input>
                                    </Form.Item>

                                    <Form.Item  name="manager" label="Manager"  
                                    rules={[
                                         
                                         {
                                            required: true,
                                             message: 'Please input your manager',
                                         },
                                     ]}    
                                     //hasFeedback
                                     >
                                 
                                 
                                        <Input
                                            type="text"
                                            name="manager"
                                           required="after"
                                            placeholder="Enter an manager..."
                                            onChange={handleAddFormChange}
                                        //   footer=""
                                        >
                                        </Input>
                                    </Form.Item>
                                    <div style={{display:'flex',float:'right'}}>
                                   
                                        <Button type="primary" htmlType="submit">SUBMIT</Button>
                                 
                                    
                                        <Button style={{marginLeft:'10px'}} type="primary" htmlType="reset">RESET</Button>
                               
                                    </div>
                                    <br/>
{/*                                   
<Space>
    <Button onClick={success}>Success</Button>

  </Space>, */}

                                    </Form>

                            </Modal>
                            </div>
                            <div className="Table-Container">
                            <Table  columns={columns} dataSource={contacts}
                                pagination={{
                                    current: page,
                                    pageSize: pageSize,
                                    onChange: (page, pageSize) => {
                                        setPage(page);
                                        setPagesize(pageSize)
                                    }
                                }} /></div>
                            {/* <form onSubmit={handleEditFormSubmit}>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>FULL NAME</th>
      <th>PHONE NUMBER</th>
      <th>EMAIL</th>
      <th>SALARY</th>
      <th>DESIGNATION</th>
      <th>DEPARTMENT</th>
      <th>MANAGER</th>
      <th>ACTIONS</th>
    </tr>
  </thead>
  <tbody>


    {contacts.map((contact) => {
      return (
        <Fragment>
          {editContactId === contact.id ? (
            <EditableRow
              editFormData={editFormData}
              handleEditFormChange={handleEditFormChange}
              handleCancelClick={handleCancelClick}
            />
          ) : (
            <ReadOnlyRow
              contact={contact}
              handleEditClick={handleEditClick}
              handleDeleteClick={handleDeleteClick}
            />
          )}

        </Fragment>
      )
    })}

  </tbody >

</table>
</form> */}
                            {/* <Button onClick={showModalForEdit}>EDIT here!</Button> */}
                        
                            <Modal
                                title={
                                    <div style={{ width: '100%', cursor: 'move',}}
                                        onMouseOver={onMouseOver}
                                        onMouseOut={onMouseOut}

                                        onFocus={() => { }}
                                        onBlur={() => { }}
                                    // end
                                    >Edit Details
                                    </div>
                                }
                                footer={null}
                                visible={visible}
                                onOk={handleOk}
                                onCancel={cancelModalForEdit}
                                modalRender={modal => (
                                    <Draggable
                                        disabled={disabled}
                                        bounds={bounds}
                                        onStart={(event, uiData) => onStart(event, uiData)}
                                    >
                                        <div ref={draggleRef}>{modal}</div>
                                    </Draggable>
                                )}
                            >
                            
                               <Form form={form} onFinish={handleEditFormSubmit}labelCol={{span: 6,}}
                                    wrapperCol={{span: 14,}}layout="horizontal" initialValues={{size: componentSize,}}
                                    onValuesChange={onFormLayoutChange}size={componentSize}requiredMark={false}
                                    colon={false}>
                               
                                {/* <Input disabled/> */}
                            <Form.Item name="id" label="ID" 
                                    rules ={[
                                        {
                                        //required:true,
                                        message:"please enter your id" },
                                        {whitespace:true},{min:3},
                                   ]} >
                                        <Input
                                            type="text"
                                            name="id"
                                            disabled ="disabled"
                                            readonly="readonly"
                                            required="required"
                                            autocapitalize= "on"
                                            placeholder="Enter a id..."
                                            value={editFormData.id}
                                            onChange={handleAddFormChange} ></Input>
                                    </Form.Item>
                                    <Form.Item name="fullname" label="Full Name" >
                                        <Input
                                            type="text"
                                            name="fullname"
                                            required="required"
                                            placeholder="Enter a fullname..."
                                            value={editFormData.fullname}
                                            onChange={handleEditFormChange}></Input>
                                    </Form.Item>


                                    <Form.Item name="phonenumber" label="Phone Number"


                                       
                                        rules={[{ //required: true,
                                             message: 'Please input your phone number!' }]}
                                    >
                                        <Input
                                            type="text"
                                            name="phonenumber"
                                           required="required"
                                            placeholder="Enter phonenumber..."
                                           value={editFormData.phonenumber}
                                            onChange={handleEditFormChange}
                                        ></Input>
                                    </Form.Item>


                                    <Form.Item
                                        name="email"
                                        label="E-mail"
                                        rules={[
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                //required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            type="email"
                                            name="email"
                                            required="required"
                                            placeholder="Enter an email..."
                                            value={editFormData.email}
                                            onChange={handleEditFormChange}
                                        ></Input>
                                    </Form.Item>

                                    <Form.Item name="salary" label="Salary">
                                        <Input
                                            type="text"
                                            name="salary"
                                            required="required"
                                            placeholder="Enter a salary..."
                                            value={editFormData.salary}
                                            onChange={handleEditFormChange}
                                        ></Input>
                                    </Form.Item>

                                    <Form.Item name="designation" label="Designation">
                                   
                                     {/* <Input disabled/>  */}
                                     <Input 
                                          type="text"
                                            name="designation"
                                            //readonly="readonly"
                                            required="required"
                                            placeholder="Enter an designation..."
                                            value={editFormData.designation}
                                            onChange={handleEditFormChange}
                                        ></Input> 
                                    </Form.Item>

                                    <Form.Item name="department" label="Department">
                                        <Input
                                            type="text"
                                            name="department"
                                            
                                            required="required"
                                            value={editFormData.department}
                                            onChange={handleEditFormChange}
                                        ></Input>
                                    </Form.Item>

                                    <Form.Item name="manager" label="Manager">
                                        <Input
                                            type="text"
                                            name="manager"
                                            required="required"
                                            placeholder="Enter an manager..."
                                            value={editFormData.manager}
                                            onChange={handleEditFormChange}
                                        >
                                        </Input>
                                    </Form.Item>
                                    <div style={{display:'flex',float:'right'}}>
                                    
                                        <Button type="primary" htmlType="submit">Save</Button>
                                   
                                   
                                        <Button style={{marginLeft:'10px'}} className="ml-2" type="primary" onClick={cancelModalForEdit}>Cancel</Button>
                                  
                                    </div>
                                   <br/>
                                </Form>

                            </Modal>

                        </div>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Hutech soutions ©2019 Created by people central</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default NavPage
