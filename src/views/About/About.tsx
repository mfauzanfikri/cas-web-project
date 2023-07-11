import './About.css'
import {Helmet} from 'react-helmet-async'


const About = ({title}: {title:string}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <main id="about">
                <div className="container-fluid">
                    <div id="aboutCarousel" className="carousel slide" data-bs-interval="false">
                        <div className="carousel-indicators">
                            {/* <!-- <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button> --> */}
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active about-company">
                                <div className="row">
                                    <div className="col-12 col-lg-6 order-lg-2 position-relative">
                                        <img className="about-img" src="../../../../img/about/company.png" alt="..." />
                                        {/* <!-- <div className="to-next">
                                            <p className="m-0">PEOPLE <i className="fa-solid fa-arrow-right"></i></p>
                                        </div> --> */}
                                    </div>
                                    <div className="col-12 col-lg-6 order-lg-1 company-content">
                                        <section className="section-one">
                                            <h1>COMPANY</h1>
                                            <p>
                                                Kami merancang suatu design kami agar dapat menciptakan
                                                suatu bangunan yang efisien dan berkelanjutan serta mengoptimalkan
                                                lokasi proyek.
                                            </p>
                                            <p>
                                                Bangunan yang kami rancang harus memiliki nilai estetika,
                                                efisien, ekonomis dan ramah lingkungan, kami bekerja secara maksimal untuk memberikan proyek yang dapat diapresiasi oleh pemilik/pengembang dan dinilai baik oleh pasar.
                                            </p>
                                            <p>
                                                Kami selalu memberikan komitmen kami untuk memberikan layanan design yang sangat baik dan solusi design yang sangat optimal untuk terus berkelanjutan di tahun-tahun mendatang.
                                            </p>
                                        </section>
                                        <section className="section-two">
                                            <h2>Philosophy</h2>
                                            <p>
                                                Perusahaan Caka ini sendiri telah berdiri sejak 2012. Dengan memiliki beberapa tim didalamnya yang menjalankan suatu proyek design arsitektural dan pengawasan dalam pembangunan.
                                            </p>
                                        </section>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- <div className="carousel-item about-people">
                                <div className="row">
                                    <div className="col-12 col-lg-6 position-relative">
                                        <img className="about-img" src="../../../../img/about/people.png" alt="..." />
                                        <div className="to-next">
                                            <p className="m-0"><i className="fa-solid fa-arrow-left"></i> COMPANY</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6 people-content">
                                        <h1>PEOPLE</h1>
                                        <div className="row g-0 justify-content-center  people-gallery">
                                            <div className="col-6 col-sm-4 col-xxl-3">
                                                <img className="people-gallery-img" src="../../../../img/about/people.png" alt="..." />
                                            </div>
                                            <div className="col-6 col-sm-4 col-xxl-3">
                                                <img className="people-gallery-img" src="../../../../img/about/people.png" alt="..." />
                                            </div>
                                            <div className="col-6 col-sm-4 col-xxl-3">
                                                <img className="people-gallery-img" src="../../../../img/about/people.png" alt="..." />
                                            </div>
                                            <div className="col-6 col-sm-4 col-xxl-3">
                                                <img className="people-gallery-img" src="../../../../img/about/people.png" alt="..." />
                                            </div>
                                            <div className="col-6 col-sm-4 col-xxl-3">
                                                <img className="people-gallery-img" src="../../../../img/about/people.png" alt="..." />
                                            </div>
                                            <div className="col-6 col-sm-4 col-xxl-3">
                                                <img className="people-gallery-img" src="../../../../img/about/people.png" alt="..." />
                                            </div>
                                            <div className="col-6 col-sm-4 col-xxl-3">
                                                <img className="people-gallery-img" src="../../../../img/about/people.png" alt="..." />
                                            </div>
                                            <div className="col-6 col-sm-4 col-xxl-3">
                                                <img className="people-gallery-img" src="../../../../img/about/people.png" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> --> */}
                        </div>
                        {/* <!-- <button className="carousel-control-prev d-none" type="button" data-bs-target="#aboutCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#aboutCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button> --> */}
                    </div>
                </div>
            </main>
        </>
    )
}

export default About