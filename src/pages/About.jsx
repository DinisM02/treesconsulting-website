import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 lg:h-96 bg-tree-s-navy text-white">
        <div 
          className="h-full bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 25, 68, 0.85), rgba(0, 179, 255, 0.75)), url('/7PgMc8ophUsz.jpg')`
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div>
              <nav className="text-blue-200 mb-4">
                <Link to="/" className="hover:text-white">Início</Link> / Sobre Nós
              </nav>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Sobre Nós</h1>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-tree-s-navy mb-8 text-center">TREE-S CONSULTING</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-tree-s-blue mb-4">Missão</h3>
                <p className="text-gray-600">
                  Apoiar organizações na implementação de sistemas de gestão eficazes, 
                  garantindo conformidade com normas internacionais e melhoria contínua dos processos.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-tree-s-blue mb-4">Visão</h3>
                <p className="text-gray-600">
                  Ser reconhecida como a empresa de consultoria de referência em Moçambique 
                  na implementação de sistemas de gestão baseados em normas internacionais.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-tree-s-blue mb-4">Valores</h3>
                <p className="text-gray-600">
                  Excelência, integridade, compromisso com a qualidade, 
                  inovação e foco na satisfação do cliente.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-600 mb-8">
                A TREE-S CONSULTING é uma empresa dedicada a apoiar organizações na definição 
                de estratégias sólidas e na implementação de soluções inovadoras.
              </p>
              
              <Link to="/contactos">
                <Button className="bg-tree-s-blue hover:bg-tree-s-hover text-white px-8 py-3 text-lg font-semibold">
                  Entre em Contacto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
