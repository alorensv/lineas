import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">
            <Image
                src="/img/logo.png"
                alt="Picture of the author"
                width={283}
                height={45}
            />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                <a className="nav-link" aria-current="page">Inicio</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/disenoWeb">
                <a className="nav-link">Páginas Web</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/sistemaWeb">
                <a className="nav-link">Sistemas Web</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contacto">
                <a className="nav-link">Contacto</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pruebas">
                <a className="nav-link">Pruebas</a>
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              <a className="nav-link"><i style={{marginRight: '10px'}} className="bi bi-whatsapp" /> +569 89523359</a>
              <a className="nav-link"><i style={{marginRight: '10px'}} className="bi bi-envelope-fill" /> contacto@lineasdecodigo.cl</a>
            </span>
          </div>
        </div>
        </nav>
    )
}

export default Navbar