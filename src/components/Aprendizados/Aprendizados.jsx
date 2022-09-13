import Text from '../Text/Text'
import Image from '../Image/Image'
import './aprendizados.css'
import Title from '../Title/Title'

function Aprendizados() {
    return (
        <div>
            <div className='title-container'>
                <Title info="Meus Aprendizados na PretaLab" />
            </div>
            <div>
                <div className='container'>
                    <Text info="HTML" />
                    <div>
                    <Image info="https://static.tudointeressante.com.br/uploads/2016/12/get.gif" />
                    </div>
                    <p>Por todos amada e por ninguém jamais igualada, a Linguagem de Marcação de HiperTexto (HTML5) é o bloco de construção mais básico da web. É essa estrutura que define o significado e a estrutura do conteúdo do que a gente vê no maravilhoso (nem sempre) mundo da internet.
                    </p>
                </div>
                <div className='container'>
                    <Text info="CSS" />
                    <div>
                    <Image info="https://claudia.abril.com.br/wp-content/uploads/2020/01/gretchen-gloriosa.gif" />
                    </div>
                    <p>Entre tapas e beijos, a Cascading Style Sheets ou Folhas de Estilo em Cascata é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML. CSS é uma das principais linguagens da open web e é padronizada em navagadores web de acordo com as especificação da W3C. Aprender a trabalhar com CSS puro é uma derrota diferente todo dia, mas quando a gente vence, meu bem (meu bem) a gente vence duas vezes, como diria Don L.
                    </p>
                </div>
                <div className='container'>
                    <Text info="JavaScript" />
                    <div className='imagens'>
                    <Image info="https://i.pinimg.com/originals/18/e5/ae/18e5ae728845787fc82de4bb0c096d63.gif" />
                    </div>
                    <p>Poxa, JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser(essa é a descrição que tá no MDN, tá?). Dá pra fazer um tantão de coisa em JavaScript e eu ainda to longe de descobrir todas elas, mas tá sendo uma experiência massa.
                    </p>
                </div>
                <div className='container'>
                    <Text info="React" />
                    <div className='imagens'>
                    <Image info="https://gifs.eco.br/wp-content/uploads/2021/06/gifs-da-gretchen-21.gif" />
                    </div>
                    <p>
                        React (aaaaaaaaaa, Simara Conceição eu te amo!) é uma biblioteca JavaScript para construção de interfaces de usuário. Como a lógica do componente é escrita em JavaScript e não em templates, você pode facilmente passar diversos tipos de dados ao longo da sua aplicação e ainda manter o estado fora do DOM (descrição da documentação do React, tá povo?).
                    </p>
                </div>
            </div >
        </div>
    )
}

export default Aprendizados