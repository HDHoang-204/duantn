import "./trangchu.scss"
import trangchu from '../../assets/sp.jpg'
import React from 'react'
function TrangChu() {
    return (
        <main>
            <section id="home">
                <h2>Trang Chủ</h2>
                <p>
                    Chào mừng bạn đến với F5 Shop! Chúng tôi cung cấp các sản phẩm chất
                    lượng với dịch vụ khách hàng tận tâm.
                </p>
                <img src={trangchu} alt="Trang Chủ" style={{ width: "100%", height: "auto" }} />
            </section>
            <h2 className="h2">Sản phẩm hot 2024</h2>
            <h2 className="h2" style={{ padding: "100px 0px 20px 0px" }}>Sản Phẩm</h2>


            <section id="products">
                <div className="product-list">
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 1</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 2</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 3</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 4</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 5</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 5</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 5</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 6</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 7</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 8</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bang">
                <div className="bang1">
                    <h1 style={{ paddingBottom: " 30px" }}>THƯƠNG MẠI ĐIỆN TỬ</h1>
                    <h3 style={{ paddingBottom: " 30px" }}>Luôn cung cấp những đồ dùng thực dụng hiện nay</h3>
                    <button>Mua ngay</button>
                </div>
                <div className="bang2">
                    <h1 style={{ paddingBottom: " 30px" }}>MUA 2 TẶNG 1 MIỄN PHÍ</h1>
                    <button>Mua ngay</button>

                </div>
            </div>


            <h1 style={{ textAlign: "center", paddingTop: "80px" }}>SẢN PHẨM BÁN CHẠY NHẨT </h1>
            <section id="products">
                <div className="product-list">
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 1</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 2</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 3</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src={trangchu} alt="Sản phẩm 3" />
                        <div style={{ paddingLeft: "20px" }}>
                            <h3>Sản phẩm 4</h3>
                            <p>1.000.000$</p>
                        </div>
                        <div className="cartbtn">
                            <button>Mua</button>
                            <div className="icon"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default TrangChu