import React from 'react';

import { useState } from 'react';
import FormEmail from './doiMKGmail';
import FormOTP from './doiMKOTP';
import FormNewPassword from './doinewpass';

const DoiMK = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && <FormEmail />}
      {step === 2 && <FormOTP />}
      {step === 3 && <FormNewPassword />}

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {step > 1 && (
          <button onClick={() => setStep(step - 1)} style={{ marginRight: '10px' }}>
            Quay lại
          </button>
        )}
        {step < 3 && <button onClick={() => setStep(step + 1)}>Tiếp tục</button>}
      </div>
    </div>
  );
};

export default DoiMK;
