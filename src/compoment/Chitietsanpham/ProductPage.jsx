import React from "react";
import "./../styles/ctsp.scss";

const ProductPage = () => {
  const productData = {
    currentProduct: {
      id: 1,
      name: "iPhone 16 Pro Max 256 GB",
      image: "https://cdn.hoanghamobile.com/i/content/Uploads/2024/09/11/iphone-16-pro-natural-titanium-pdp-image-position-1a-natural-titanium-color-vn-vi.jpg",
      price: "43,000,000 VNĐ",
      description: "iPhone 16 Pro Max - Đỉnh cao công nghệ của Apple mới nhất năm 2024, với cấu hình cao, màn hình đẹp, camera sắc nét, hệ điều hành IOS mượt mà.",
      specifications: [
        "Màn hình: 6.7 inch OLED, 120Hz",
        "Chip: A18 Bionic",
        "RAM: 12GB",
        "Bộ nhớ: 512GB",
        "Camera: 48MP + 12MP + 12MP",
        "Pin: 4500mAh, sạc nhanh 30W"
      ]
    },
    relatedProducts: [
      {
        id: 2,
        name: "iPhone 16 Plus",
        image: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2024/09/10/ip16-xanh-luu-ly.png",
        price: "25,000,000 VNĐ"
      },
      {
        id: 3,
        name: "iPhone 16",
        image: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2024/09/10/ip16-xanh-mong-ket.png",
        price: "21,000,000 VNĐ"
      },
      {
        id: 4,
        name: "XIaomi 14 Ultra",
        image: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2024/03/10/xiaomi-14-ultra.png",
        price: "30,000,000 VNĐ"
      },
      {
        id: 5,
        name: "Xiaomi 14",
        image: "https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2024/03/09/xiaomi-14.png",
        price: "27,000,000 VNĐ"
      }
    ]
  };

  return (
    <div className="product-page">
      {/* Sản phẩm đang chọn */}
      <div className="main-section">
        <div className="product-image">
          <img
            src={productData.currentProduct.image}
            alt={productData.currentProduct.name}
          />
        </div>
        <div className="product-info">
          <h1>{productData.currentProduct.name}</h1>
          <div className="price">{productData.currentProduct.price}</div>
          <div className="description">{productData.currentProduct.description}</div>
          {/* Cấu hình sản phẩm */}
          <ul className="specifications">
            {productData.currentProduct.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          {/* Chọn số lượng */}
          <div className="quantity-select">
            <label htmlFor="quantity">Chọn số lượng:</label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
          </div>
          {/* Nút hành động */}
          <div className="actions">
            <button className="add-to-cart">Thêm vào giỏ hàng</button>
            <button className="buy-now">Mua ngay</button>
          </div>
          <div className="social-share">
            <i className="icon-facebook"></i>
            <i className="icon-twitter"></i>
            <i className="icon-instagram"></i>
          </div>
        </div>
      </div>

      {/* Sản phẩm tương tự */}
      <div className="related-products">
        {productData.relatedProducts.map((product) => (
          <div className="product-thumbnail" key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
