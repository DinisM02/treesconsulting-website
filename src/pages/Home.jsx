import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { ChevronLeft, ChevronRight, Users, Clock, Shield, Headphones } from 'lucide-react'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "CERTIFICAÇÕES ISO",
      subtitle: "Bem vindos à TREE-S CONSULTING",
      description: "Ajudamos organizações a melhorar a produtividade e obter uma certificação internacional, ao implementar diversos Sistemas de Gestão baseados em normas internacionais.",
      image: "/hTbhibyRsiZu.jpg"
    },
    {
      title: "SERVIÇOS DE FORMAÇÃO",
      subtitle: "Bem vindos à TREE-S CONSULTING",
      description: "Apoio às empresas na materialização dos seus planos anuais de treinamento através de programas especializados em normas e sistemas de gestão.",
      image: "/7PgMc8ophUsz.jpg"
    },
    {
      title: "ESTUDOS AMBIENTAIS",
      subtitle: "Bem vindos à TREE-S CONSULTING",
      description: "Elaboração de estudos de impacto ambiental e apoio na gestão ambiental empresarial para organizações comprometidas com a sustentabilidade.",
      image: "/syXdakCTosD6.jpg"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 25, 68, 0.85), rgba(0, 179, 255, 0.75)), url('${slide.image}')`
              }}
            >
              <div className="container mx-auto px-4 h-full flex items-center">
                <div className="max-w-2xl text-white">
                  <p className="text-lg mb-2 text-blue-200">{slide.subtitle}</p>
                  <h1 className="text-5xl font-bold mb-6">{slide.title}</h1>
                  <p className="text-xl mb-8 leading-relaxed">{slide.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/servicos">
                      <Button className="bg-tree-s-blue hover:bg-tree-s-hover text-white px-8 py-3 text-lg font-semibold">
                        Ver Mais
                      </Button>
                    </Link>
                    <Link to="/orcamento">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-tree-s-navy px-8 py-3 text-lg font-semibold">
                        Orçamento
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-tree-s-fundamental">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-tree-s-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-tree-s-navy">Consultores Especializados</h3>
              <p className="text-tree-s-dark">Equipe qualificada com experiência em sistemas de gestão</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tree-s-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-tree-s-navy">Cumprimento de Prazos</h3>
              <p className="text-tree-s-dark">Compromisso com entregas pontuais e eficientes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tree-s-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-tree-s-navy">Sigilo Profissional</h3>
              <p className="text-tree-s-dark">Total confidencialidade em todos os projetos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tree-s-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-tree-s-navy">Atendimento Personalizado</h3>
              <p className="text-tree-s-dark">Soluções adaptadas às necessidades específicas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tree-s-navy mb-4">Nossos Serviços</h2>
            <p className="text-xl text-tree-s-dark max-w-3xl mx-auto">
              Oferecemos soluções completas em consultoria, auditoria, formação e estudos 
              ambientais para ajudar sua empresa a alcançar a excelência operacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-tree-s-navy mb-4">Consultoria</h3>
              <p className="text-tree-s-dark mb-6">
                Implementação de sistemas de gestão baseados em normas ISO 9001, 14001, 45001, 22000, FSSC 22000 e BRC.
              </p>
              <Link to="/servicos">
                <Button className="bg-tree-s-blue hover:bg-tree-s-hover text-white font-semibold">
                  Saiba Mais
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-tree-s-navy mb-4">Auditoria</h3>
              <p className="text-tree-s-dark mb-6">
                Auditorias internas e externas para verificação da conformidade dos sistemas de gestão implementados.
              </p>
              <Link to="/servicos">
                <Button className="bg-tree-s-blue hover:bg-tree-s-hover text-white font-semibold">
                  Saiba Mais
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-tree-s-navy mb-4">Formação</h3>
              <p className="text-tree-s-dark mb-6">
                Programas de formação especializados para capacitação de equipas em normas e sistemas de gestão.
              </p>
              <Link to="/servicos">
                <Button className="bg-tree-s-blue hover:bg-tree-s-hover text-white font-semibold">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-tree-s-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Precisa de uma solução personalizada?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe está pronta para desenvolver uma proposta técnica e financeira 
            adequada às necessidades específicas da sua organização.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/orcamento">
              <Button className="bg-white text-tree-s-ocean hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Solicitar Orçamento
              </Button>
            </Link>
            <Link to="/contactos">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-tree-s-ocean px-8 py-3 text-lg font-semibold">
                Entre em Contacto
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
