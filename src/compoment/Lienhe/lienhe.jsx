import React from "react";

function Lienhe() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: "100%", margin: "0 auto" }}>
      {/* Phần tiêu đề với ảnh nền */}
      <header
        style={{
          backgroundImage:
            "url('https://phuongnamvina.com/img_data/images/website-thuong-mai-dien-tu.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textAlign: "center",
          padding: "220px 40px",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
            marginLeft: "60px",
            color: "#990033",
          }}
        >
          Liên hệ
        </h1>
      </header>

      <div
        style={{
          marginBottom: "400px",
          display: "flex",
          justifyContent: "space-between",
          padding: "40px",
          backgroundColor: "#fff",
        }}
      >
        <div style={{ flex: 2 }}>
          <p
            style={{
              fontSize: "38px",
              marginTop: "200px",
              marginLeft: "600px",
              fontWeight: "bold",
              margin: "20px 0",
            }}
          >
            Đã gửi tin nhắn. Chúng tôi sẽ <br />
            sớm liên hệ với bạn.
          </p>
          <button
            style={{
              marginLeft: "60px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            QUAY LẠI
          </button>
        </div>

        <div style={{ flex: 1, textAlign: "left", lineHeight: "1.6" }}>
          <h4>Địa chỉ</h4>
          <p>Địa chỉ: 137 Nguyễn Thị Thập, Thanh Khê Tây, Liên Chiểu, Đà Nẵng</p>
          <h4>Liên hệ</h4>
          <p>
            Bạn có thể liên hệ với chúng tôi qua email được cung cấp dưới đây:
            <br />
            Email: <a href="mailto:ituyensv2022@fjcs.edu.vn">ituyensv2022@fjcs.edu.vn</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lienhe;
