import React, { useState } from 'react';
import { Button, Table, Input, Modal, Form, Select } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const ScreenCategory = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [categories, setCategories] = useState([
    { key: '1', categoryName: 'Điện thoại Android', brand: 'Samsung', description: 'Điện thoại sử dụng hệ điều hành Android' },
    { key: '2', categoryName: 'Điện thoại iOS', brand: 'Apple', description: 'Điện thoại sử dụng hệ điều hành iOS' },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const handleAddOrEditCategory = (values) => {
    if (editingCategory) {
      setCategories(categories.map(category =>
        category.key === editingCategory.key ? { ...category, ...values } : category
      ));
    } else {
      const newCategory = { key: Date.now().toString(), ...values };
      setCategories([...categories, newCategory]);
    }
    setIsModalVisible(false);
    setEditingCategory(null);
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
    setIsModalVisible(true);
  };

  const handleDeleteCategory = (key) => {
    setCategories(categories.filter(category => category.key !== key));
  };

  return (
    <div className="container flex flex-col gap-5 bg-gray-100 p-5">
      <div className="container mt-5 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
          <PlusOutlined style={{ marginRight: '10px' }} />
          Danh sách Danh Mục
        </h2>
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
          dataSource={categories}
          pagination={false}
          columns={[
            { title: 'Tên Danh Mục', dataIndex: 'categoryName', key: 'categoryName' },
            { title: 'Thương Hiệu', dataIndex: 'brand', key: 'brand' },
            { title: 'Mô Tả', dataIndex: 'description', key: 'description' },
            {
              title: 'Hành động', key: 'actions', render: (_, record) => (
                <div>
                  <Button
                    type="link"
                    onClick={() => handleEditCategory(record)}
                    icon={<EditOutlined />}
                    style={{ color: '#f39c12' }}
                  >
                    Sửa
                  </Button>
                  <Button
                    type="link"
                    onClick={() => handleDeleteCategory(record.key)}
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
        title={editingCategory ? 'Sửa Danh Mục' : 'Thêm Mới Danh Mục'}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingCategory(null);
        }}
        footer={null}
      >
        <Form
          initialValues={editingCategory || {}}
          onFinish={handleAddOrEditCategory}
        >
          <Form.Item
            label="Tên Danh Mục"
            name="categoryName"
            rules={[{ required: true, message: 'Vui lòng nhập tên danh mục' }]} >
            <Input style={{ borderRadius: '4px', borderColor: '#3498db' }} />
          </Form.Item>

          <Form.Item
            label="Thương Hiệu"
            name="brand"
            rules={[{ required: true, message: 'Vui lòng chọn thương hiệu' }]} >
            <Select style={{ borderRadius: '4px' }}>
              <Select.Option value="Samsung">Samsung</Select.Option>
              <Select.Option value="Apple">Apple</Select.Option>
              <Select.Option value="Xiaomi">Xiaomi</Select.Option>
              <Select.Option value="Oppo">Oppo</Select.Option>
              <Select.Option value="Vivo">Vivo</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Mô Tả"
            name="description"
            rules={[{ required: true, message: 'Vui lòng nhập mô tả' }]} >
            <Input.TextArea style={{ borderRadius: '4px', borderColor: '#3498db' }} />
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
              {editingCategory ? 'Cập Nhật' : 'Thêm'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ScreenCategory;
