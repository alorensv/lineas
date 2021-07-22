import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Footer = (props) => {
    return (
        <>        
        <footer className="footer">
          <div className="container p-4">
            <div className="col-md-12">
              <div className="card-body animate__animated animate__fadeIn">
                <div className="row">
                    <div className="col-md-6 txt-servicios">
                      <img src="/img/logo.png" style={{"width" : "250px", "marginBottom" : "10px"}} />
                      <p>Apasionados por el diseño web y desarrollo de sistemas. Comienza tu proyecto con nosotros y encantados seremos tu patner informático.</p>
                    </div>

                    <div className="col-md-3 txt-servicios">
                      <p><span><i className="bi bi-arrow-bar-right"></i>Servicios</span></p>
                      <Link href="/disenoWeb"><a>  
                        <p>Diseño Web</p>
                      </a></Link>
                      <Link href="/sistemaWeb"><a>  
                        <p>Desarrollo de sistemas web</p>
                      </a></Link>
                      <p>Intranet coorporativa</p>
                      <p>Sistema de gestión de transportes</p>
                      <p>Sistema administración corredora de propiedades</p>                      
                    </div>

                    <div className="col-md-3 txt-servicios">
                      <p><span><i className="bi bi-arrow-bar-right"></i>Encuentranos en:</span></p>
                      <p>Facebook</p>
                      <p>Instagram</p>
                      <p>Linkedin</p>
                      <p>Mercado Libre</p>
                      <p>Mercado Público</p>    
                      <p>contacto@lineasdecodigo.cl</p>                  
                    </div>
                    
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="subfooter">
          <div className="container">
            <p>2018-2021 Líneas de Código</p>
          </div>
        </div>
        <style jsx>
        {`
          .subfooter{
              padding-top:10px;
              padding-bottom:5px;
              background: #333232;
          }
          .subfooter p{
            text-align: right;
            color: #b3b3b3;
            font-size: 14px;
          }
            .footer {
                padding-top:20px;
                padding-bottom:20px;
                background: #eeeeee;
            }
            .footer p {
                font-size: 15px;
                color: #000;
                text-aling: justify;
            }
            .txt-servicios{
              margin-bottom: 15px;
            }
            .txt-servicios p {
                text-align: left; 
                font-size: 15px;
                margin-bottom: 0;
                line-height: 22px;
                color: #5a646a;
                font-weight: 300;
            }
            .txt-servicios p span {
                font-weight: bold;
                color: #1f6ba6;
                font-size: 20px;
            }
        `}
        </style>
        </>
    )
}

export default Footer