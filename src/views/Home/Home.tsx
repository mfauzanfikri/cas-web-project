import './Home.css';
import { Helmet } from 'react-helmet-async';

const Home = ({ title }: { title: string }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main id="home">
        <div
          id="homeCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="10000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active slide-one">
              <div className="carousel-item-contents row">
                <div className="caption col-12">
                  <p className="text-one">Architecture</p>
                  <h1 className="caption-header">
                    Halo, <br />
                    kami sebagai jasa <br />
                    pelayanan
                  </h1>
                  <p className="text-two">Konsultan Arsitek</p>
                </div>
                <div className="img col-12">
                  <picture>
                    <source
                      media="(min-width:1200px)"
                      srcSet="/img/home/img-1-desktop.png"
                    />
                    <img src="/img/home/img-1.png" alt="" />
                  </picture>
                </div>
              </div>
            </div>
            <div className="carousel-item slide-two">
              <div className="carousel-item-contents row">
                <div className="caption col-12">
                  <div className="mobile">
                    <h2 className="caption-header">
                      Kami merancang sesuai dengan kebutuhan pribadi Anda
                    </h2>
                  </div>
                  <div className="desktop">
                    <h2 className="caption-header">
                      Kami merancang sesuai <br />
                      dengan kebutuhan <br />
                      pribadi Anda
                    </h2>
                  </div>
                  <p className="text-one">
                    Pilihan yang sempurna untuk <br />
                    semua orang.
                  </p>
                  <p className="text-one">Banyak fitur dan penawaran hebat.</p>
                  <p className="text-one">
                    Lihat apa yang dapat Anda <br />
                    lakukan dengan design CAKA.
                  </p>
                </div>
                <div className="img col-12">
                  <picture>
                    <source
                      media="(min-width:1200px)"
                      srcSet="/img/home/img-2-desktop.png"
                    />
                    <img src="/img/home/img-2.png" alt="" />
                  </picture>
                </div>
              </div>
            </div>
            <div className="carousel-item slide-three">
              <div className="carousel-item-contents row">
                <div className="caption col-12">
                  <div className="mobile">
                    <h1 className="caption-header">
                      IDE ANDA, Kami buat untuk Anda dan dari Eksterior hingga
                      Interior.
                    </h1>
                  </div>
                  <div className="desktop">
                    <h1 className="caption-header">
                      IDE ANDA, <br />
                      Kami buat untuk Anda <br />
                      dan dari Eksterior <br />
                      hingga Interior.
                    </h1>
                  </div>
                  <a href="<?= base_url('/projects'); ?>">
                    <button className="home-btn">Our Project!</button>
                  </a>
                </div>
                <div className="img col-12">
                  <picture>
                    <source
                      media="(min-width:1200px)"
                      srcSet="/img/home/img-3-desktop.png"
                    />
                    <img src="/img/home/img-3.png" alt="" />
                  </picture>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
