import React, { useState, useEffect } from 'react';
import { Button, Table, Input, Modal, Form, Select, Upload, message, InputNumber } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
const ScreenCategory = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [products, setProducts] = useState([]);

  // Load danh sách sản phẩm từ API
  const fetchFoodList = async () => {
    const res = await axios.get('http://localhost:3000/api/sanpham/sanpham')
    setProducts(res.data.data)
  }

  useEffect(() => {
    fetchFoodList()

  }, [])
  const url = "http://localhost:3000"

  const handleAddOrEditProduct = async (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('description', values.description);
    formData.append('price', values.price);
    formData.append('category', values.category);
    if (fileList.length > 0) {
      formData.append('image', fileList[0].originFileObj);
    }

    try {
      await axios.post('http://localhost:3000/api/sanpham/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success(editingCategory ? 'Cập nhật sản phẩm thành công!' : 'Thêm sản phẩm thành công!');
      fetchCategories(); // Tải lại danh sách sản phẩm sau khi thêm/cập nhật
    } catch (error) {
      message.error('Có lỗi xảy ra!');
    }
    setIsModalVisible(false);
    setEditingCategory(null);
    setFileList([]);
  };

  const handleFileChange = ({ fileList }) => setFileList(fileList);

  const handleEditCategory = (record) => {
    setEditingCategory(record);
    setIsModalVisible(true);
  };

  const handleDeleteCategory = async (key) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/sanpham/delete/${key}`);
      if (response.data.success) {
        message.success('Xóa sản phẩm thành công!');
        // Cập nhật lại danh sách sản phẩm trong state
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== key));
      } else {
        message.error(response.data.message || 'Không thể xóa sản phẩm!');
      }
    } catch (error) {
      message.error('Có lỗi xảy ra khi xóa sản phẩm!');
    }
  };

  return (
    <div className="container flex flex-col gap-5 bg-gray-100 p-5">
      <div className="container mt-5 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl mb-4" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
          <PlusOutlined style={{ marginRight: '10px' }} />
          Danh sách sản phẩm
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
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2980b9')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3498db')}
        >
          Thêm Mới
        </Button>
        <Table
          dataSource={products}
          rowKey="_id" // Đảm bảo mỗi sản phẩm có key duy nhất
          pagination={false}
          columns={[
            {
              title: 'Hình Ảnh',
              dataIndex: 'image',
              key: 'image',
              render: (image) => (
                <img
                  src={url + "/images/" + image}  // Sử dụng `image` thay vì `text.image`
                  alt="product"
                  style={{ width: 100, height: 100, objectFit: 'cover' }}
                />
              )
            },


            { title: 'Tên sản phẩm', dataIndex: 'name', key: 'name' },
            { title: 'Mô Tả', dataIndex: 'description', key: 'description' },
            { title: 'Giá', dataIndex: 'price', key: 'price', render: (price) => `${price.toLocaleString()} VND` },
            { title: 'Thể Loại', dataIndex: 'category', key: 'category' },
            {
              title: 'Hành động',
              key: 'actions',
              render: (_, record) => (
                <>
                  <Button type="link" onClick={() => handleEditCategory(record)} icon={<EditOutlined />} style={{ color: '#f39c12' }}>Sửa</Button>
                  <Button type="link" onClick={() => handleDeleteCategory(record._id)} icon={<DeleteOutlined />} style={{ color: '#e74c3c' }}>Xóa</Button>
                </>
              ),
            },
          ]}
        />
      </div>

      <Modal
        title={editingProduct ? 'Sửa sản phẩm' : 'Thêm Mới sản phẩm'}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setEditingProduct(null);
          setFileList([]);
        }}
        footer={null}
      >
        <Form initialValues={editingProduct || {}} onFinish={handleAddOrEditProduct} layout="vertical">
          <Form.Item label="Tên sản phẩm" name="name" rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Mô Tả" name="description" rules={[{ required: true, message: 'Vui lòng nhập mô tả' }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Giá" name="price" rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm' }]}>
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Thể Loại" name="category" rules={[{ required: true, message: 'Vui lòng chọn thể loại' }]}>
            <Select>
              <Select.Option value="Điện Thoại">Điện Thoại</Select.Option>
              <Select.Option value="Máy Tính">Máy Tính</Select.Option>
              <Select.Option value="Phụ Kiện">Phụ Kiện</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Hình ảnh">
            <Upload beforeUpload={() => false} fileList={fileList} onChange={handleFileChange} listType="picture" accept="image/*">
              <Button icon={<UploadOutlined />}>Tải lên</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{editingProduct ? 'Cập Nhật' : 'Thêm'}</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ScreenCategory;
