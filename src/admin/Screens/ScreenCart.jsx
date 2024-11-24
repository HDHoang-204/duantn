import React, { useState } from 'react';
import { Button, Table, Input, Modal } from 'antd';
import { ShoppingCartOutlined, DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';

const ScreenCart = () => {
  const [cartItems, setCartItems] = useState([
    { key: '1', name: 'Item 1', price: 100, quantity: 1 },
    { key: '2', name: 'Item 2', price: 200, quantity: 2 },
    { key: '3', name: 'Item 3', price: 150, quantity: 1 },
  ]);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const updateQuantity = (key, quantity) => {
    setCartItems(cartItems.map(item =>
      item.key === key ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeItem = (key) => {
    setCartItems(cartItems.filter(item => item.key !== key));
  };

  const handleCheckout = () => {
    Modal.info({
      title: 'Thanh toán',
      content: <div>Đang tiến hành thanh toán...</div>,
      icon: <CheckCircleOutlined style={{ color: 'green' }} />,
    });
  };

  return (
    <div className="cart-container" style={{ padding: '20px' }}>
      <h2 style={{ color: '#2c3e50', fontWeight: 'bold' }}>
        <ShoppingCartOutlined style={{ marginRight: '10px' }} />
        Giỏ Hàng
      </h2>

      <Table
        dataSource={cartItems}
        columns={[
          {
            title: 'Tên Sản Phẩm',
            dataIndex: 'name',
            key: 'name',
            render: (name) => <span style={{ color: '#34495e' }}>{name}</span>,
          },
          {
            title: 'Giá',
            dataIndex: 'price',
            key: 'price',
            render: (price) => <span>${price}</span>,
          },
          {
            title: 'Số Lượng',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (quantity, record) => (
              <Input
                type="number"
                value={quantity}
                onChange={(e) => updateQuantity(record.key, parseInt(e.target.value))}
                min={1}
                style={{
                  width: 80,
                  borderColor: '#3498db',
                  borderRadius: '4px',
                  transition: 'border-color 0.3s',
                }}
                onFocus={(e) => e.target.style.borderColor = '#1abc9c'}
                onBlur={(e) => e.target.style.borderColor = '#3498db'}
              />
            ),
          },
          {
            title: 'Thành Tiền',
            dataIndex: 'total',
            key: 'total',
            render: (text, record) => <span>${record.price * record.quantity}</span>,
          },
          {
            title: 'Hành Động',
            key: 'action',
            render: (text, record) => (
              <Button
                onClick={() => removeItem(record.key)}
                type="link"
                style={{ color: '#e74c3c' }}
                icon={<DeleteOutlined />}
              >
                Xóa
              </Button>
            ),
          },
        ]}
        pagination={false}
        rowKey="key"
      />

      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <h3 style={{ color: '#2ecc71', fontSize: '18px' }}>
          <strong>Tổng Tiền:</strong> ${totalPrice}
        </h3>
        <Button
          type="primary"
          onClick={handleCheckout}
          icon={<CheckCircleOutlined />}
          style={{
            backgroundColor: '#2980b9',
            borderColor: '#2980b9',
            color: 'white',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
        >
          Thanh Toán
        </Button>
      </div>
    </div>
  );
};

export default ScreenCart;
