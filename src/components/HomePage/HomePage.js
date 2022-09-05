import React from "react";
import { Button } from "../Navbar/Button/Button";
import './HomePage.css'
import Card1 from '../Images/img-homepage-card-1.png'
import Card2 from '../Images/img-homepage-card-2.png'
import Card3 from '../Images/img-homepage-card-3.png'

const HomePage = () => {
    return (
        <main>
            <article>
                <div className="container-homepage">
                    <div className="wrapper">
                        <h1 className="title-homepage">Jadilah Bagian dari Komunitas Tech Terbesar di Indonesia</h1>
                        <p className="text-homepage">Ikutan diskusi forum tanya jawab, tulis blog dan
                        Membangun portofolio semua di Kotakode</p>
                        <div className="wrapper-input">
                                <input type="email" placeholder="Masukkan Email Kamu" className="input-email" />
                                <Button buttonStyle='btn--signup-homepage'>Daftar</Button>
                        </div>
                        <div className="card-homepage">
                                <div className="card">
                                    <p className="numb">28792</p>
                                    <p className="text">User Bergabung</p>
                                </div>
                                <div className="card">
                                    <p className="numb">1028</p>
                                    <p className="text">Blog Ditulis</p>
                                </div>
                                <div className="card">
                                    <p className="numb">19156</p>
                                    <p className="text">Total Pertanyaan <br/>
                                    & Jawaban</p>
                                </div>
                        </div>
                    </div>
                </div>
            </article>

            <article className="fff">
                <div className="wrapper-card">
                    <div>
                        <div className="wrapper-small-card">
                            <figure>
                                <img src={Card1} alt="asdasdasd" className="small-card"></img>
                            </figure>
                            <div>
                                <h1 className="title-card-small">Jawaban cepat, tepat & gratis</h1>
                                <p className="teks-card-small">Dapat jawaban dalam hitunga menit dari ribuan programmer lainnya </p>
                            </div>
                        </div>
                        <div className="wrapper-small-card" >
                            <figure>
                                <img src={Card2} alt="asdasdasd" className="small-card"></img>
                            </figure>
                            <div>
                                <h1 className="title-car-small">Konsep Gamifikasi</h1>
                                <p className="teks-card-small">Dapatkan badge menarik yang akan meningkatkan personal branding kamu sebagai seorang programmer.</p>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper-meduim-card">
                        <figure>
                            <img src={Card3} alt="asdasdasd" className="medium-card"></img>
                        </figure>
                        <div>
                            <h1>Bangun Online Portofolio</h1>
                            <p>Portofolio ibaratkan sebuah aset yang berharga bagi setiap orang. Semakin kamu aktif di dalam forum, semakin membuktikan bahwa kamu adalah programmer yang berkualitas.</p>
                        </div>
                    </div>

                    <div className="sub-wrapper">
                        <h1 className="title-header">Mengapa perlu menggunakan Kotakode?</h1>
                        <p className="teks-header">Ibaratkan sebuah kota dengan penduduk para programmer, Kotakode memberikan fasilitas guna mensejahterakan kehidupan penduduknya</p>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default HomePage;
