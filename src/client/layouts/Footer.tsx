import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className="footer-tong">
            <div className="footer-tong1">
                <div className="flex">
                    <div className="box">
                        <h1 className="title">HỆ THỐNG CỬA HÀNG</h1>
                        <div className="mb-[20px]">
                            <h1 className="title-1">Hà Nội</h1>
                            <div className="nd">
                                <p>120 Thái Hà, Q. Đống Đa</p>
                                <p>Điện thoại: 0969.120.120 (Bán hàng) - 037.437.9999 (Kỹ thuật)</p>
                            </div>
                            <div className="nd">
                                <p>398 Cầu Giấy, Q. Cầu Giấy</p>
                                <p>Điện thoại: 096.1111.398 (Bán hàng) - 037.437.9999 (Kỹ thuật)</p>
                            </div>
                            <div className="nd">
                                <p>42 Phố Vọng, Hai Bà Trưng</p>
                                <p>Điện thoại: 0979.884242 (Bán hàng) - 037.437.9999 (Kỹ thuật)</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="title-1">Hồ Chí Minh</h1>
                            <div className="nd">
                                <p>123 Trần Quang Khải, Q.1</p>
                                <p>Điện thoại: 0965.123.123 - 0969.520.520</p>
                            </div>
                            <div className="nd">
                                <p>602 Lê Hồng Phong, P.10, Q.10</p>
                                <p>Điện thoại: 097.1111.602 - 097.3333.602</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <h1 className="title">QUY ĐỊNH - CHÍNH SÁCH</h1>
                        <div>
                            <ul className="relative">
                                <li className="my-[10px] ml-[15px]"><Link to="">Chính sách bảo hành</Link></li>
                                <li className="my-[10px] ml-[15px]"><Link to="">Chính sách vận chuyển</Link></li>
                                <li className="my-[10px] ml-[15px]"><Link to="">Chính sách đổi trả hàng</Link></li>
                                <li className="my-[10px] ml-[15px]"><Link to="">Chính sách bảo mật thông tin</Link></li>
                                <li className="my-[10px] ml-[15px]"><Link to="">Hướng dẫn thanh toán</Link></li>
                                <li className="my-[10px] ml-[15px]"><Link to="">Hướng dẫn mua hàng Online</Link></li>
                                <li className="my-[10px] ml-[15px]"><Link to="">Dịch vụ Ship COD Toàn quốc</Link></li>
                                <li className="my-[10px] ml-[15px]"><Link to="">Chính sách đại lý linh, phụ kiện</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="box">
                        <h1 className="title uppercase">Liên kết</h1>
                        <div className="mb-[15px]">
                            <i className="fa text-[24px] text-sky-700"></i>
                            <a href="https://www.facebook.com/nguyenthanhdat2704">Facebook</a>
                        </div>
                        <div>
                            <i className="fa text-[24px] text-red-500"></i>
                            <a href="https://www.youtube.com/channel/UC4sDBq20omspK3BZdEfI5fQ">Youtube</a>
                        </div>
                    </div>
                    <div className="box1">
                        <div className="box1">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29794.982875816757!2d105.79869220277648!3d21.01776191473486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab49d66d6f0d%3A0x8706a412aad866b3!2zTW9iaWxlQ2l0eSBD4bqndSBHaeG6pXk!5e0!3m2!1svi!2s!4v1644851791172!5m2!1svi!2s" width={345} height={190} style={{ border: 0 }} allowFullScreen loading="lazy" /><br />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29794.967225399767!2d105.79869219708482!3d21.017840244158766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7dbc584289%3A0x67ad89a2aa290186!2sMobileCity%20-%20120%20Th%C3%A1i%20H%C3%A0!5e0!3m2!1svi!2s!4v1644851917036!5m2!1svi!2s" width={345} height={190} style={{ border: 0 }} allowFullScreen loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer