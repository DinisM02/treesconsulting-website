import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { CheckCircle, Award, BookOpen, Leaf } from 'lucide-react'

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-tree-s-navy text-white">
        <div 
          className="h-full bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 25, 68, 0.85), rgba(0, 179, 255, 0.75)), url('/syXdakCTosD6.jpg')`
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div>
              <nav className="text-blue-200 mb-4">
                <Link to="/" className="hover:text-white">Início</Link> / Serviços
              </nav>
              <h1 className="text-5xl font-bold">Nossos Serviços</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tree-s-navy mb-4">Soluções Completas em Gestão</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos serviços especializados para ajudar sua organização a alcançar 
              a excelência operacional e conformidade com normas internacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Consultoria */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-tree-s-blue rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-tree-s-navy">Consultoria</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Implementação de sistemas de gestão baseados em normas internacionais 
                para melhorar a eficiência e produtividade da sua organização.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>ISO 9001 - Sistema de Gestão da Qualidade</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>ISO 14001 - Sistema de Gestão Ambiental</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>ISO 45001 - Sistema de Gestão de SST</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Segurança de Alimentos (ISO 22000, FSSC 22000, BRC)</span>
                </div>
              </div>

              <Link to="/orcamento">
                <Button className="bg-tree-s-blue hover:bg-tree-s-hover text-white w-full font-semibold">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>

            {/* Auditoria */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-tree-s-ocean rounded-lg flex items-center justify-center mr-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-tree-s-navy">Auditoria</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Auditorias internas e externas para verificação da conformidade 
                dos sistemas de gestão implementados nas organizações.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Auditorias internas de sistemas de gestão</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Auditorias de fornecedores</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Preparação para auditorias de certificação</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Verificação de cumprimento de requisitos legais</span>
                </div>
              </div>

              <Link to="/orcamento">
                <Button className="bg-tree-s-ocean hover:bg-tree-s-navy text-white w-full font-semibold">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>

            {/* Formação */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-tree-s-blue rounded-lg flex items-center justify-center mr-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-tree-s-navy">Formação</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Programas de formação especializados para capacitação de equipas 
                em normas e sistemas de gestão, incluindo HACCP e segurança alimentar.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Formação em normas ISO</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Cursos de auditores internos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Formação em HACCP</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Formação contínua em sistemas de gestão</span>
                </div>
              </div>

              <Link to="/orcamento">
                <Button className="bg-tree-s-blue hover:bg-tree-s-hover text-white w-full font-semibold">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>

            {/* Estudos Ambientais */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-tree-s-ocean rounded-lg flex items-center justify-center mr-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-tree-s-navy">Estudos Ambientais</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Elaboração de estudos de impacto ambiental e apoio na 
                gestão ambiental empresarial para organizações comprometidas com a sustentabilidade.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Estudos de Impacto Ambiental (EIA)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Planos de Gestão Ambiental</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Licenciamento ambiental</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Monitorização da qualidade ambiental</span>
                </div>
              </div>

              <Link to="/orcamento">
                <Button className="bg-tree-s-ocean hover:bg-tree-s-navy text-white w-full font-semibold">
                  Solicitar Orçamento
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
              <Button variant="outline" className="border-white text-white hover:bg-gray-100 hover:text-tree-s-ocean px-8 py-3 text-lg font-semibold">
                Entre em Contacto
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services