import React from 'react';

import '../doimk.scss';

const FormOTP = () => {
  return (
    <div className="form-container">
      <h2>Nhập mã OTP</h2>
      <p>Nhập mã OTP gửi qua email của bạn</p>
      <div className="otp-inputs">
        {[...Array(4)].map((_, index) => (
          <input key={index} type="text" maxLength="1" />
        ))}
      </div>
      <p className="resend">
        Bạn chưa nhận được mã? <span>Gửi lại</span>
      </p>
      <button className="btn-submit">Xác nhận</button>
    </div>
  );
};

export default FormOTP;
