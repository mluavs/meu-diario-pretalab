import Title from '../Title/Title'
import './header.css'

function Header (){
    return (
        <div className='header'>
        <Title info="Meu Diário da PretaLab" />
        <p>feito pra começar a entender as possibilidades do uso de <span className="marcador">props</span> no React</p>
        </div>
    )
}

export default Header