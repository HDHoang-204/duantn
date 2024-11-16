document.addEventListener('DOMContentLoaded', () => {
    let quantity = 1;
    const pricePerUnit = 25990000; // Giá của một sản phẩm
    const totalPriceElement = document.getElementById('total-price');
    const quantityValueElement = document.getElementById('quantity-value');
  
    function updateTotalPrice() {
      const totalPrice = quantity * pricePerUnit;
      totalPriceElement.textContent = totalPrice.toLocaleString(); // Hiển thị định dạng có dấu phẩy
    }
  
    document.getElementById('increase-btn').addEventListener('click', () => {
      quantity++;
      quantityValueElement.textContent = quantity;
      updateTotalPrice();
    });
  
    document.getElementById('decrease-btn').addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        quantityValueElement.textContent = quantity;
        updateTotalPrice();
      }
    });
  });
  