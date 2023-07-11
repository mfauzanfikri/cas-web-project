import './PricingAndProcedure.css'
import {Helmet} from 'react-helmet-async'

const PricingAndProcedure = ({title}: {title:string}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <main id="pricingAndProcedure">
                <div className="container">
                    <div className="page-header">
                        <h1>
                            Pricing <br />
                            & Procedure
                        </h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4 packet bronze">
                            <div className="row">
                                <div className="col">
                                    <img className="packet-bg" src="/img/pricing_and_procedure/01.png" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="packet-title">
                                                <p>Packet</p>
                                                <h2 className="packet-name">bronze</h2>
                                            </div>
                                            <div className="packet-features">
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>Gambar Pradesain</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>DED Arsitektur</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>DED Struktur</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>DED MEP</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>3D Eksterior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/no.png" alt="" />
                                                    <p>3D Interior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/no.png" alt="" />
                                                    <p>RAB Eksterior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/no.png" alt="" />
                                                    <p>RAB Interior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/no.png" alt="" />
                                                    <p>Animasi 3D Eksterior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/no.png" alt="" />
                                                    <p>Animasi 3D Interior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/no.png" alt="" />
                                                    <p>Analisis Struktur</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4  packet silver">
                            <div className="row">
                                <div className="col">
                                    <img className="packet-bg" src="/img/pricing_and_procedure/02.png" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="packet-title">
                                                <p>Packet</p>
                                                <h2 className="packet-name">silver</h2>
                                            </div>
                                            <div className="packet-features">
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>Gambar Pradesain</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>DED Arsitektur</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>DED Struktur</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>DED MEP</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>3D Eksterior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>3D Interior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>RAB Eksterior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/no.png" alt="" />
                                                    <p>RAB Interior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/no.png" alt="" />
                                                    <p>Animasi 3D Eksterior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/no.png" alt="" />
                                                    <p>Animasi 3D Interior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/no.png" alt="" />
                                                    <p>Analisis Struktur</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4  packet gold">
                            <div className="row">
                                <div className="col">
                                    <img className="packet-bg" src="/img/pricing_and_procedure/03.png" alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="packet-title">
                                                <p>Packet</p>
                                                <h2 className="packet-name">gold</h2>
                                            </div>
                                            <div className="packet-features">
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>Gambar Pradesain</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>DED Arsitektur</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>DED Struktur</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>DED MEP</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>3D Eksterior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>3D Interior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>RAB Eksterior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>RAB Interior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>Animasi 3D Eksterior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>Animasi 3D Interior</p>
                                                </div>
                                                <div className="feature">
                                                    <img src="/img/pricing_and_procedure/yes.png" alt="" />
                                                    <p>Analisis Struktur</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="procedure">
                                <h2>Procedure</h2>
                                {/* <a href=""> */}
                                    <button type="button" className="download-btn">Download</button>
                                {/* </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PricingAndProcedure