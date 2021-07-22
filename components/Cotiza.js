import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Cotiza = () => {
    return (
        <>        
        <div className="txt-cotiza">
        <div className="container p-4">
            <p><span>Cotiza tu proyecto</span> con nosotros <i className="bi bi-arrow-bar-right"></i></p>
            <div className="col-md-12">
                <div className="card-body animate__animated animate__fadeIn">
                <div className="row">
                    <div className="col-md-7 txt-servicios">
                        <p><span><i className="bi bi-arrow-bar-right"></i>Páginas Web</span></p>
                        <ul>
                            <li><p>Formato adaptable en celulares: Tu páigna web tendrá el formato adecuado para mejorar la 
                                    experiencia del cliente en tu web usando el celular.
                                </p>
                            </li>
                            <li><p>Administración de productos: A través de una plataforma de fácil uso, puedes incluir productos 
                                    a tu catalogo digital, con la cual podrás tener actualizada tú página 
                                    web.
                                </p>
                            </li>
                            <li><p>Correos Coorporativos: Mejora tu imagen corporativa y ofrece mayor seguridad a tu cliente 
                                con correos personalizados de tu negocio.
                                </p>
                            </li>
                        </ul>
                        
                        <p><span><i className="bi bi-arrow-bar-right"></i>Sistemas Web</span></p>
                        <ul>
                            <li><p>Control de datos: Podrás administrar tus clientes, cotizaciones que realicen por la página web, 
                                almacenando la información del cliente, del producto y/o servicio, el estado de pago y más datos que requieras..
                                </p>
                            </li>
                            <li><p>Análisis de datos: Obtén reportes análizados en tiempo real que te permitirá tomar las mejores decisiones para tu negocio.
                                </p>
                            </li>
                            <li><p>Disponibilidad e integridad: Consulta todo lo que necesites de manera online a través de tu página web con información 
                                siempre integra y actualizada.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                     
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        <style jsx>
        {`
            .txt-cotiza {
                padding-top:50px;
                padding-bottom:50px;
                background: #eeeeee;
                cursor: pointer;
            }
            .txt-cotiza p {
                text-align: center;
                font-size: 25px;
                margin-bottom: 0;
                line-height: 27px;
                color: #5a646a;
                font-weight: 300;
            }
            .txt-cotiza p span {
                font-weight: bold;
                color: #1f6ba6;
            }
            .txt-cotiza p i {
                font-size: 17px;
                margin-left: 5px;
                position: relative;
                top: -3px;
                color: #1f6ba6;
                transform: rotate(-90deg);
            }
            .txt-servicios p {
                text-align: left; 
                font-size: 25px;
                margin-bottom: 0;
                line-height: 27px;
                color: #5a646a;
                font-weight: 300;
            }
            .txt-servicios p span {
                font-weight: bold;
                color: #1f6ba6;
            }
            .txt-servicios li p {
                font-size: 14px;
                color: #000;
                text-aling: justify;
            }
        `}
        </style>
        </>
    )
}

export default Cotiza