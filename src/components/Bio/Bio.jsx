import "./bio.css"
import Text from '../Text/Text'
import Image from '../Image/Image'
import Title from '../Title/Title'

function Bio() {
    return (
        <div className="container-bio">
            <div>
                <Image info="./src/assets/sobre2.gif" />
            </div>
            <div className="texto-bio">
                <Title info='Oie! Aqui é a Marina' />
                <Text info="E esse é um mini registro visual sobre alguns aprendizados do Ciclo Formativo em Tecnologia da PretaLab - criado pra entender o uso de props no React" />
            </div>
        </div>
    )
}

export default Bio