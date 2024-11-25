import React from 'react';

import '../doimk.scss';

const FormNewPassword = () => {
  return (
    <div className="form-container">
      <h2>Đổi mật khẩu</h2>
      <input type="password" placeholder="Mật khẩu mới" />
      <input type="password" placeholder="Nhập lại mật khẩu mới" />
      <button className="btn-submit">Xác nhận</button>
    </div>
  );
};

export default FormNewPassword;
