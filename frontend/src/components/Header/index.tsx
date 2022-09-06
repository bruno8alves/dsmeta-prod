import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (

        <header>
            <div className="dsmeta-logo-containter">
                <img src={logo} alt="logo" />

                <h1>DSMeta</h1>
                <p>Desenvolvido por
                    <a href="https://github.com/bruno8alves">Bruno Alves</a>
                </p>
            </div>
        </header>


    )
}

export default Header