import React, { useState } from 'react';
import { Button, Table, Input, Modal, Form, Input as AntInput, Select, Card } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ScreenCustomer = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchText, setSearchText] = useState('');
  const [customers, setCustomers] = useState([
    { key: '1', name: 'Nguyễn Văn A', email: 'a@example.com', phone: '0123456789', status: 'Active', joinDate: '2024-01-15' },
    { key: '2', name: 'Trần Thị B', email: 'b@example.com', phone: '0987654321', status: 'Inactive', joinDate: '2024-02-10' },
    { key: '3', name: 'Lê Minh C', email: 'c@example.com', phone: '0112233445', status: 'Active', joinDate: '2024-03-05' },
    { key: '4', name: 'Phan Quốc D', email: 'd@example.com', phone: '0933456789', status: 'Inactive', joinDate: '2024-04-20' },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const handleButtonClick = (option) => setSelectedOption(option);

  const handleSearch = (e) => setSearchText(e.target.value);

  const filteredCustomers = customers.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase()) ||
    item.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddOrEditCustomer = (values) => {
    if (editingCustomer) {
      setCustomers(customers.map(customer =>
        customer.key === editingCustomer.key ? { ...customer, ...values } : customer
      ));
    } else {
      const newCustomer = { key: Date.now().toString(), ...values };
      setCustomers([...customers, newCustomer]);
    }
    setIsModalVisible(false);
    setEditingCustomer(null);
  };

  const handleEditCustomer = (customer) => {
    setEditingCustomer(customer);
    setIsModalVisible(true);
  };

  const handleDeleteCustomer = (key) => {
    setCustomers(customers.filter(customer => customer.key !== key));
  };

  // Chart data preparation for the last few months
  const customerCountByMonth = customers.reduce((acc, customer) => {
    const month = new Date(customer.joinDate).getMonth(); // Get the month from the joinDate
    acc[month] = acc[month] ? acc[month] + 1 : 1; // Increment the count for the month
    return acc;
  }, {});

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dataForChart = months.map((month, index) => ({ name: month, customers: customerCountByMonth[index] || 0 }));

  return (
    <div className="container flex flex-col gap-5 bg-gray-100 p-5">
      <div className="days justify-center bg-white flex justify-around p-4 rounded-lg shadow-md">
        <div className="w-1/2 container mx-auto flex justify-around gap-5 p-5">
          {['Active', 'Inactive'].map(option => (
            <Button
              key={option}
              className="day"
              type={selectedOption === option ? 'primary' : 'default'}
              onClick={() => handleButtonClick(option)}
              size="large"
              shape="round"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="container mt-5 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Thống kê Khách Hàng</h2>
        <Card>
          <h3>Tổng số khách hàng theo tháng</h3>
          <BarChart width={600} height={300} data={dataForChart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="customers" fill="#8884d8" />
          </BarChart>
        </Card>
      </div>

      <div className="container mt-5 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Danh sách Khách Hàng</h2>
        <Input
          placeholder="Tìm kiếm khách hàng"
          value={searchText}
          onChange={handleSearch}
          className="mb-4"
        />
        <Button
          type="primary"
          onClick={() => setIsModalVisible(true)}
          className="mb-4"
        >
          Thêm Mới
        </Button>
        <Table
          dataSource={filteredCustomers}
          pagination={false}
          columns={[
            { title: 'Tên Khách Hàng', dataIndex: 'name', key: 'name' },
            { title: 'Email', dataIndex: 'email', key: 'email' },
            { title: 'Số Điện Thoại', dataIndex: 'phone', key: 'phone' },
            { title: 'Trạng Thái', dataIndex: 'status', key: 'status' },
            {
              title: 'Hành động', key: 'actions', render: (_, record) => (
                <div>
                  <Button
                    type="link"
                    onClick={() => handleEditCustomer(record)}
                  >
                    Sửa
                  </Button>
                  <Button
                    type="link"
                    onClick={() => handleDeleteCustomer(record.key)}
                  >
                    Xóa
                  </Button>
                </div>
              )
            }
          ]}
        />
      </div>

      <Modal
        title={editingCustomer ? 'Sửa Khách Hàng' : 'Thêm Mới Khách Hàng'}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingCustomer(null);
        }}
        footer={null}
      >
        <Form
          initialValues={editingCustomer}
          onFinish={handleAddOrEditCustomer}
        >
          <Form.Item
            label="Tên Khách Hàng"
            name="name"
            rules={[{ required: true, message: 'Vui lòng nhập tên khách hàng' }]} >
            <AntInput />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Vui lòng nhập email' }]} >
            <AntInput />
          </Form.Item>
          <Form.Item
            label="Số Điện Thoại"
            name="phone"
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]} >
            <AntInput />
          </Form.Item>
          <Form.Item
            label="Trạng Thái"
            name="status"
            rules={[{ required: true, message: 'Vui lòng chọn trạng thái' }]} >
            <Select defaultValue={editingCustomer?.status || 'Active'}>
              <Select.Option value="Active">Active</Select.Option>
              <Select.Option value="Inactive">Inactive</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingCustomer ? 'Cập Nhật' : 'Thêm'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ScreenCustomer;
