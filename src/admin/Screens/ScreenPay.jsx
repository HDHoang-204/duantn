import React, { useState } from 'react';
import { Button, Table, Input, Modal, Form, Select, Card } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ScreenPay = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [payments, setPayments] = useState([
    { key: '1', orderId: 'ORD001', customerName: 'Nguyễn Văn A', amount: 100000, paymentMethod: 'Credit Card', status: 'Pending' },
    { key: '2', orderId: 'ORD002', customerName: 'Trần Thị B', amount: 200000, paymentMethod: 'PayPal', status: 'Completed' },
    { key: '3', orderId: 'ORD003', customerName: 'Lê Minh C', amount: 150000, paymentMethod: 'Bank Transfer', status: 'Failed' },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingPayment, setEditingPayment] = useState(null);

  const handleButtonClick = (option) => setSelectedOption(option);

  const handleAddOrEditPayment = (values) => {
    if (editingPayment) {
      setPayments(payments.map(payment =>
        payment.key === editingPayment.key ? { ...payment, ...values } : payment
      ));
    } else {
      const newPayment = { key: Date.now().toString(), ...values };
      setPayments([...payments, newPayment]);
    }
    setIsModalVisible(false);
    setEditingPayment(null);
  };

  const handleEditPayment = (payment) => {
    setEditingPayment(payment);
    setIsModalVisible(true);
  };

  const handleDeletePayment = (key) => {
    setPayments(payments.filter(payment => payment.key !== key));
  };

  const filteredPayments = payments.filter((item) =>
    item.orderId.toLowerCase().includes(selectedOption.toLowerCase()) ||
    item.customerName.toLowerCase().includes(selectedOption.toLowerCase())
  );

  return (
    <div className="container flex flex-col gap-5 bg-gray-100 p-5">
      {/* Button Group for Status Filters */}
      <div className="days justify-center bg-white flex justify-around p-4 rounded-lg shadow-md">
        <div className="w-1/2 container mx-auto flex justify-around gap-5 p-5">
          {['Pending', 'Completed', 'Failed'].map(option => (
            <Button
              key={option}
              className="day"
              type={selectedOption === option ? 'primary' : 'default'}
              onClick={() => handleButtonClick(option)}
              size="large"
              shape="round"
              style={{
                backgroundColor: selectedOption === option ? '#1890ff' : '#f0f0f0',
                borderColor: selectedOption === option ? '#1890ff' : '#d9d9d9',
                color: selectedOption === option ? 'white' : 'black',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const target = e.target;
                target.style.backgroundColor = '#40a9ff';
              }}
              onMouseLeave={(e) => {
                const target = e.target;
                target.style.backgroundColor = selectedOption === option ? '#1890ff' : '#f0f0f0';
              }}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      {/* Payment Status Summary */}
      <div className="container mt-5 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Danh sách Thanh Toán</h2>
        <Card>
          <h3>Tổng số thanh toán theo trạng thái</h3>
          {/* Add Bar chart component here */}
        </Card>
      </div>

      {/* Payment List Table */}
      <div className="container mt-5 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4">Danh sách Thanh Toán</h2>
        <Button
          type="primary"
          onClick={() => setIsModalVisible(true)}
          className="mb-4"
          icon={<PlusOutlined />}
          style={{
            backgroundColor: '#4CAF50',
            borderColor: '#4CAF50',
            color: 'white',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            const target = e.target;
            target.style.backgroundColor = '#45a049';
          }}
          onMouseLeave={(e) => {
            const target = e.target;
            target.style.backgroundColor = '#4CAF50';
          }}
        >
          Thêm Mới
        </Button>
        <Table
          dataSource={filteredPayments}
          pagination={false}
          columns={[
            { title: 'Mã Đơn Hàng', dataIndex: 'orderId', key: 'orderId' },
            { title: 'Tên Khách Hàng', dataIndex: 'customerName', key: 'customerName' },
            { title: 'Số Tiền', dataIndex: 'amount', key: 'amount' },
            { title: 'Phương Thức Thanh Toán', dataIndex: 'paymentMethod', key: 'paymentMethod' },
            { title: 'Trạng Thái', dataIndex: 'status', key: 'status' },
            {
              title: 'Hành động', key: 'actions', render: (_, record) => (
                <div>
                  <Button
                    type="link"
                    icon={<EditOutlined />}
                    onClick={() => handleEditPayment(record)}
                    style={{ color: '#1890ff', marginRight: '8px' }}
                  >
                    Sửa
                  </Button>
                  <Button
                    type="link"
                    icon={<DeleteOutlined />}
                    onClick={() => handleDeletePayment(record.key)}
                    style={{ color: '#f5222d' }}
                  >
                    Xóa
                  </Button>
                </div>
              )
            }
          ]}
        />
      </div>

      {/* Add or Edit Payment Modal */}
      <Modal
        title={editingPayment ? 'Sửa Thanh Toán' : 'Thêm Mới Thanh Toán'}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingPayment(null);
        }}
        footer={null}
      >
        <Form
          initialValues={editingPayment || {}}
          onFinish={handleAddOrEditPayment}
        >
          <Form.Item
            label="Mã Đơn Hàng"
            name="orderId"
            rules={[{ required: true, message: 'Vui lòng nhập mã đơn hàng' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tên Khách Hàng"
            name="customerName"
            rules={[{ required: true, message: 'Vui lòng nhập tên khách hàng' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Số Tiền"
            name="amount"
            rules={[{ required: true, message: 'Vui lòng nhập số tiền' }]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Phương Thức Thanh Toán"
            name="paymentMethod"
            rules={[{ required: true, message: 'Vui lòng chọn phương thức thanh toán' }]}
          >
            <Select>
              <Select.Option value="Credit Card">Thẻ tín dụng</Select.Option>
              <Select.Option value="PayPal">PayPal</Select.Option>
              <Select.Option value="Bank Transfer">Chuyển khoản ngân hàng</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Trạng Thái"
            name="status"
            rules={[{ required: true, message: 'Vui lòng chọn trạng thái' }]}
          >
            <Select>
              <Select.Option value="Pending">Chờ xử lý</Select.Option>
              <Select.Option value="Completed">Đã hoàn tất</Select.Option>
              <Select.Option value="Failed">Thất bại</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: '#4CAF50',
                borderColor: '#4CAF50',
                color: 'white',
                transition: 'all 0.3s ease',
              }}
            >
              {editingPayment ? 'Cập Nhật' : 'Thêm'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ScreenPay;
