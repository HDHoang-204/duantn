import React, { useState } from 'react';
import { Button, Table, Input } from 'antd';

const ScreenOrder = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [searchText, setSearchText] = useState('');

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const data = [
    { key: '1', orderId: '001', customer: 'Nguyễn Văn A', status: 'Đang xử lý', date: '2024-11-15' },
    { key: '2', orderId: '002', customer: 'Trần Thị B', status: 'Đã giao', date: '2024-11-14' },
    { key: '3', orderId: '003', customer: 'Lê Minh C', status: 'Đang xử lý', date: '2024-11-16' },
    { key: '4', orderId: '004', customer: 'Phan Quốc D', status: 'Đã giao', date: '2024-11-13' },
    { key: '5', orderId: '005', customer: 'Nguyễn Thị E', status: 'Đang xử lý', date: '2024-11-17' },
  ];

  const handleButtonClick = (option) => setSelectedOption(option);

  const handleSearch = (e) => setSearchText(e.target.value);

  const filteredData = data.filter((item) =>
    item.customer.toLowerCase().includes(searchText.toLowerCase()) ||
    item.orderId.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container flex flex-col gap-5 bg-gray-100 p-5">
      <div className="days justify-center bg-white flex justify-around p-4 rounded-lg shadow-md">
        <div className="w-1/2 container mx-auto flex justify-around gap-5 p-5">
          {['Hôm nay', 'Hôm qua', 'Tuần trước', 'Tháng trước'].map(option => (
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
        <h2 className="text-xl mb-4">Danh sách đơn hàng</h2>
        <Table
          dataSource={filteredData}
          pagination={false}
          columns={[
            { title: 'Mã đơn hàng', dataIndex: 'orderId', key: 'orderId' },
            { title: 'Khách hàng', dataIndex: 'customer', key: 'customer' },
            { title: 'Trạng thái', dataIndex: 'status', key: 'status' },
            { title: 'Ngày', dataIndex: 'date', key: 'date' }
          ]}
        />
      </div>
    </div>
  );
};

export default ScreenOrder;
