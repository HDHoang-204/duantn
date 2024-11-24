import React, { useState } from 'react';
import { Button, Table, Input, Modal, Form, Select } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ScreenVoucher = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchText, setSearchText] = useState('');
  const [vouchers, setVouchers] = useState([
    { key: '1', code: 'VOUCHER1', description: 'Giảm 10%', status: 'Active', expiryDate: '2024-12-31' },
    { key: '2', code: 'VOUCHER2', description: 'Giảm 20%', status: 'Expired', expiryDate: '2024-10-31' },
    { key: '3', code: 'VOUCHER3', description: 'Giảm 15%', status: 'Active', expiryDate: '2025-01-01' },
    { key: '4', code: 'VOUCHER4', description: 'Giảm 5%', status: 'Inactive', expiryDate: '2024-12-01' },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingVoucher, setEditingVoucher] = useState(null);

  const handleButtonClick = (option) => setSelectedOption(option);

  const handleSearch = (e) => setSearchText(e.target.value);

  const filteredVouchers = vouchers.filter((item) =>
    item.code.toLowerCase().includes(searchText.toLowerCase()) ||
    item.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddOrEditVoucher = (values) => {
    if (editingVoucher) {
      setVouchers(vouchers.map(voucher =>
        voucher.key === editingVoucher.key ? { ...voucher, ...values } : voucher
      ));
    } else {
      const newVoucher = { key: Date.now().toString(), ...values };
      setVouchers([...vouchers, newVoucher]);
    }
    setIsModalVisible(false);
    setEditingVoucher(null);
  };

  const handleEditVoucher = (voucher) => {
    setEditingVoucher(voucher);
    setIsModalVisible(true);
  };

  const handleDeleteVoucher = (key) => {
    setVouchers(vouchers.filter(voucher => voucher.key !== key));
  };

  return (
    <div className="container flex flex-col gap-5 bg-gray-100 p-5">
      <div className="days justify-center bg-white flex justify-around p-4 rounded-lg shadow-md">
        <div className="w-1/2 container mx-auto flex justify-around gap-5 p-5">
          {['Active', 'Inactive', 'Expired'].map(option => (
            <Button
              key={option}
              className="day"
              type={selectedOption === option ? 'primary' : 'default'}
              onClick={() => handleButtonClick(option)}
              size="large"
              shape="round"
              style={{
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="container mt-5 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
          <PlusOutlined style={{ marginRight: '10px' }} />
          Danh sách Khuyến Mãi
        </h2>
        <Input
          placeholder="Tìm kiếm mã khuyến mãi"
          value={searchText}
          onChange={handleSearch}
          className="mb-4"
          style={{
            borderColor: '#3498db',
            borderRadius: '4px',
          }}
        />
        <Button
          type="primary"
          onClick={() => setIsModalVisible(true)}
          className="mb-4"
          icon={<PlusOutlined />}
          style={{
            backgroundColor: '#3498db',
            borderColor: '#3498db',
            color: 'white',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
        >
          Thêm Mới
        </Button>
        <Table
          dataSource={filteredVouchers}
          pagination={false}
          columns={[
            { title: 'Mã Voucher', dataIndex: 'code', key: 'code' },
            { title: 'Mô Tả', dataIndex: 'description', key: 'description' },
            { title: 'Trạng Thái', dataIndex: 'status', key: 'status' },
            { title: 'Ngày hết hạn', dataIndex: 'expiryDate', key: 'expiryDate' },
            {
              title: 'Hành động', key: 'actions', render: (_, record) => (
                <div>
                  <Button
                    type="link"
                    onClick={() => handleEditVoucher(record)}
                    icon={<EditOutlined />}
                    style={{ color: '#f39c12' }}
                  >
                    Sửa
                  </Button>
                  <Button
                    type="link"
                    onClick={() => handleDeleteVoucher(record.key)}
                    icon={<DeleteOutlined />}
                    style={{ color: '#e74c3c' }}
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
        title={editingVoucher ? 'Sửa Voucher' : 'Thêm Mới Voucher'}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingVoucher(null);
        }}
        footer={null}
      >
        <Form
          initialValues={editingVoucher}
          onFinish={handleAddOrEditVoucher}
        >
          <Form.Item
            label="Mã Voucher"
            name="code"
            rules={[{ required: true, message: 'Vui lòng nhập mã voucher' }]} >
            <Input style={{ borderRadius: '4px', borderColor: '#3498db' }} />
          </Form.Item>
          <Form.Item
            label="Mô Tả"
            name="description"
            rules={[{ required: true, message: 'Vui lòng nhập mô tả' }]} >
            <Input style={{ borderRadius: '4px', borderColor: '#3498db' }} />
          </Form.Item>
          <Form.Item
            label="Trạng Thái"
            name="status"
            rules={[{ required: true, message: 'Vui lòng chọn trạng thái' }]} >
            <Select defaultValue={editingVoucher?.status || 'Active'} style={{ borderRadius: '4px' }}>
              <Select.Option value="Active">Active</Select.Option>
              <Select.Option value="Inactive">Inactive</Select.Option>
              <Select.Option value="Expired">Expired</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Ngày hết hạn"
            name="expiryDate"
            rules={[{ required: true, message: 'Vui lòng chọn ngày hết hạn' }]} >
            <Input type="date" style={{ borderRadius: '4px', borderColor: '#3498db' }} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: '#2ecc71',
                borderColor: '#2ecc71',
                color: 'white',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#27ae60'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2ecc71'}
            >
              {editingVoucher ? 'Cập Nhật' : 'Thêm'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ScreenVoucher;
