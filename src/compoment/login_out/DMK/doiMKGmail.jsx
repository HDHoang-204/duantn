import React from 'react';

import '../doimk.scss';

const FormEmail = () => {
  return (
    <div className="form-container">
      <h2>Đổi mật khẩu</h2>
      <input type="email" placeholder="Nhập địa chỉ email" />
      <button className="btn-submit">Xác nhận</button>
    </div>
  );
};

export default FormEmail;
