import React, { useState } from 'react';
import { Card, Tooltip } from 'antd';
import { UserOutlined, DollarCircleOutlined, EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';

const ScreenHome = () => {
  const [todayUser, setTodayUser] = useState(120);
  const [todayMoney, setTodayMoney] = useState(5000000);
  const [todayView, setTodayView] = useState(350);
  const [todaySales, setTodaySales] = useState(75);

  const data = [
    { name: '0h', user: 5, money: 0, view: 10, sales: 1 },
    { name: '1h', user: 6, money: 500, view: 15, sales: 2 },
    { name: '2h', user: 7, money: 1000, view: 20, sales: 3 },
    { name: '3h', user: 9, money: 1500, view: 25, sales: 4 },
    { name: '4h', user: 10, money: 2000, view: 30, sales: 5 },
    { name: '5h', user: 15, money: 2500, view: 35, sales: 6 },
    { name: '6h', user: 20, money: 3000, view: 40, sales: 7 },
    { name: '7h', user: 25, money: 3500, view: 45, sales: 8 },
    { name: '8h', user: 30, money: 4000, view: 50, sales: 9 },
    { name: '9h', user: 35, money: 4500, view: 55, sales: 10 },
    { name: '10h', user: 40, money: 5000, view: 60, sales: 11 },
    { name: '11h', user: 45, money: 5500, view: 65, sales: 12 },
    { name: '12h', user: 50, money: 6000, view: 70, sales: 13 },
    { name: '13h', user: 55, money: 6500, view: 75, sales: 14 },
    { name: '14h', user: 60, money: 7000, view: 80, sales: 15 },
    { name: '15h', user: 65, money: 7500, view: 85, sales: 16 },
    { name: '16h', user: 70, money: 8000, view: 90, sales: 17 },
    { name: '17h', user: 75, money: 8500, view: 95, sales: 18 },
    { name: '18h', user: 80, money: 9000, view: 100, sales: 19 },
    { name: '19h', user: 85, money: 9500, view: 105, sales: 20 },
    { name: '20h', user: 90, money: 10000, view: 110, sales: 21 },
    { name: '21h', user: 95, money: 10500, view: 115, sales: 22 },
    { name: '22h', user: 100, money: 11000, view: 120, sales: 23 },
    { name: '23h', user: 120, money: 11500, view: 125, sales: 24 },
  ];

  return (
    <div className="container p-5 bg-gray-100">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="text-center p-5 hover:shadow-lg transition-all duration-300 ease-in-out" title="Số Người Dùng Hôm Nay" bordered={false} hoverable>
          <Tooltip title="Số người dùng hiện tại">
            <UserOutlined style={{ fontSize: 24, color: '#1890ff' }} />
          </Tooltip>
          <h3 className="text-2xl mt-3">{todayUser}</h3>
        </Card>
        <Card className="text-center p-5 hover:shadow-lg transition-all duration-300 ease-in-out" title="Doanh Thu Hôm Nay" bordered={false} hoverable>
          <Tooltip title="Tổng doanh thu hôm nay">
            <DollarCircleOutlined style={{ fontSize: 24, color: '#52c41a' }} />
          </Tooltip>
          <h3 className="text-2xl mt-3">{todayMoney.toLocaleString()} VND</h3>
        </Card>
        <Card className="text-center p-5 hover:shadow-lg transition-all duration-300 ease-in-out" title="Lượt Xem Hôm Nay" bordered={false} hoverable>
          <Tooltip title="Tổng lượt xem hôm nay">
            <EyeOutlined style={{ fontSize: 24, color: '#faad14' }} />
          </Tooltip>
          <h3 className="text-2xl mt-3">{todayView}</h3>
        </Card>
        <Card className="text-center p-5 hover:shadow-lg transition-all duration-300 ease-in-out" title="Số Lượng Bán Hôm Nay" bordered={false} hoverable>
          <Tooltip title="Tổng số lượng sản phẩm bán hôm nay">
            <ShoppingCartOutlined style={{ fontSize: 24, color: '#ff4d4f' }} />
          </Tooltip>
          <h3 className="text-2xl mt-3">{todaySales}</h3>
        </Card>
      </div>

      {/* Chart */}
      <div className="mt-10">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <RechartsTooltip />
            <Legend />
            <Line type="monotone" dataKey="user" stroke="#8884d8" name="Số Người Dùng" strokeWidth={2} />
            <Line type="monotone" dataKey="money" stroke="#82ca9d" name="Doanh Thu" strokeWidth={2} />
            <Line type="monotone" dataKey="view" stroke="#ffc658" name="Lượt Xem" strokeWidth={2} />
            <Line type="monotone" dataKey="sales" stroke="#ff7300" name="Số Lượng Bán" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ScreenHome;
