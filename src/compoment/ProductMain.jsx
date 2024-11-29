import React from 'react'
const products = [
  {
      id: 1,
      name: 'iPhone 16 Pro Max',
      screenSize: 'Super Retina XDR • 6.9"',
      discountPrice: '34.590.000',
      originalPrice: null,
      badge: 'Trả chậm 0%',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-trang-thumbtgdd-600x600.png',
  },
  {
      id: 2,
      name: 'iPhone 16 Pro',
      screenSize: 'Super Retina XDR • 6.3"',
      discountPrice: '28.690.000',
      originalPrice: '28.990.000',
      badge: 'Online giá rẻ quá',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-trang-thumbtgdd-600x600.png',
  },
  {
      id: 3,
      name: 'iPhone 16 Plus',
      screenSize: 'Super Retina XDR • 6.7"',
      discountPrice: '25.590.000',
      originalPrice: '25.990.000',
      badge: 'Trả chậm 0%',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-trang-thumbtgdd-600x600.png',
  },
  {
      id: 4,
      name: 'Samsung Galaxy S24 Ultra 5G',
      screenSize: 'Quad HD+ (2K+) • 6.8"',
      discountPrice: '25.990.000',
      originalPrice: '33.990.000',
      badge: 'Galaxy AI is here',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-trang-thumbtgdd-600x600.png',
  },
  {
      id: 5,
      name: 'Samsung Galaxy S24 Ultra 5G',
      screenSize: 'Quad HD+ (2K+) • 6.8"',
      discountPrice: '25.990.000',
      originalPrice: '33.990.000',
      badge: 'Galaxy AI is here',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-trang-thumbtgdd-600x600.png',
  },
  {
      id: 6,
      name: 'iPhone 16 Pro Max',
      screenSize: 'Super Retina XDR • 6.9"',
      discountPrice: '34.590.000',
      originalPrice: null,
      badge: 'Trả chậm 0%',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-trang-thumbtgdd-600x600.png',
  },
  {
      id: 7,
      name: 'iPhone 16 Pro',
      screenSize: 'Super Retina XDR • 6.3"',
      discountPrice: '28.690.000',
      originalPrice: '28.990.000',
      badge: 'Online giá rẻ quá',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-trang-thumbtgdd-600x600.png',
  },
  {
      id: 8,
      name: 'iPhone 16 Plus',
      screenSize: 'Super Retina XDR • 6.7"',
      discountPrice: '25.590.000',
      originalPrice: '25.990.000',
      badge: 'Trả chậm 0%',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-trang-thumbtgdd-600x600.png',
  },
  {
      id: 9,
      name: 'Samsung Galaxy S24 Ultra 5G',
      screenSize: 'Quad HD+ (2K+) • 6.8"',
      discountPrice: '25.990.000',
      originalPrice: '33.990.000',
      badge: 'Galaxy AI is here',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-trang-thumbtgdd-600x600.png',
  },
  {
      id: 10,
      name: 'Samsung Galaxy S24 Ultra 5G',
      screenSize: 'Quad HD+ (2K+) • 6.8"',
      discountPrice: '25.990.000',
      originalPrice: '33.990.000',
      badge: 'Galaxy AI is here',
      image: 'https://cdn.tgdd.vn/Products/Images/42/329138/iphone-16-plus-trang-thumbtgdd-600x600.png',
  },
];

export const ProductMain = () => {
  return ( 
    <div className='w-full animotion-right-to-left bg-white m-auto'>
       <div className="p-8    ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
              <div
                  key={product.id} // Thêm `key` để tránh lỗi React
                  className="border rounded-lg shadow-md p-4 bg-white"
              >
                  {/* Image */}
                  <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-contain mb-4"
                  />
  
                  {/* Title */}
                  <h2 className="font-semibold  text-lg mb-2">
                      {product.name}
                  </h2>
  
                  {/* Display Screen Size */}
                  <p className="text-sm text-gray-500 mb-2">
                      {product.screenSize}
                  </p>
  
                  {/* Price and Discount */}
                  <div className="mb-2">
                      <p className="text-red-500 font-bold text-lg">
                          {product.discountPrice}₫
                      </p>
                      {product.originalPrice && (
                          <p className="text-gray-500 line-through text-sm">
                              {product.originalPrice}₫
                          </p>
                      )}
                  </div>
  
                  {/* Badge */}
                  <div className="bg-purple-100 text-purple-600 text-xs rounded-full px-2 py-1 mb-2 inline-block">
                      {product.badge}
                  </div>
  
                  {/* Button */}
                  <button className="w-full bg-purple-500 text-white py-2 rounded-lg mt-4">
                      Mua Trả Chậm
                  </button>
              </div>
          ))}
      </div>
  </div>
    </div>   
  )
}
