import './footer.scss'
import anh1 from '../../assets/ig.webp'
import anh2 from '../../assets/face.jpg'
import anh3 from '../../assets/yout.jpg'
function Footer() {
    return (
        <>
            <footer>
                <div class="footer-container">

                    <div class="footer-section contact">
                        <h3>Liên hệ</h3>
                        <p>Email: contact@company.com</p>
                        <p>Điện thoại: +84 123 456 789</p>
                        <p>Địa chỉ: 123 Đường ABC, TP HCM</p>
                    </div>


                    <div class="footer-section about">
                        <h3>Về chúng tôi</h3>
                        <p>Chúng tôi là công ty chuyên cung cấp các sản phẩm chất lượng cao, mang đến giá trị tối ưu cho khách
                            hàng.</p>
                    </div>


                    <div class="footer-section categories">
                        <h3>Danh mục nổi bật</h3>
                        <ul>
                            <li><a href="#">Sản phẩm mới</a></li>
                            <li><a href="#">Khuyến mãi</a></li>
                            <li><a href="#">Sản phẩm bán chạy</a></li>
                            <li><a href="#">Liên hệ hỗ trợ</a></li>
                        </ul>
                    </div>


                    <div class="footer-section social">
                        <h3>Liên hệ với chúng tôi</h3>
                        <p>Theo dõi chúng tôi trên mạng xã hội:</p>
                        <div class="social-icons">
                            <a href="#"> <img src={anh3} alt="" /> </a>
                            <a href="#"> <img src={anh2} alt="" /></a>
                            <a href="#"> <img src={anh1} alt="" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer