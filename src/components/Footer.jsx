import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const PrivacyModal = () => (
    showPrivacyModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Política de Privacidade</h3>
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                A TREE-S CONSULTING compromete-se a proteger a privacidade dos seus clientes e visitantes do website.
              </p>
              <p>
                <strong>Recolha de Informações:</strong> Recolhemos apenas as informações necessárias para prestar os nossos serviços de consultoria.
              </p>
              <p>
                <strong>Uso das Informações:</strong> As informações fornecidas são utilizadas exclusivamente para contacto comercial e prestação de serviços.
              </p>
              <p>
                <strong>Proteção de Dados:</strong> Implementamos medidas de segurança adequadas para proteger as suas informações pessoais.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  )

  return (
    <>
      <PrivacyModal />
      <footer className="bg-tree-s-ocean text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4">
                  <span className="text-tree-s-ocean font-bold text-lg">TS</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Tree S</div>
                  <div className="text-blue-200 text-sm">CONSULTING</div>
                </div>
              </div>
              <p className="text-blue-100 mb-4 leading-relaxed">
                A TREE-S CONSULTING é uma empresa de consultoria dedicada a apoiar organizações 
                na definição de estratégias sólidas e na implementação de soluções inovadoras.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-blue-200 hover:text-white transition-colors duration-200">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/sobre-nos" className="text-blue-200 hover:text-white transition-colors duration-200">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-blue-200 hover:text-white transition-colors duration-200">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link to="/contactos" className="text-blue-200 hover:text-white transition-colors duration-200">
                    Contactos
                  </Link>
                </li>
                <li>
                  <Link to="/orcamento" className="text-blue-200 hover:text-white transition-colors duration-200">
                    Orçamento
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-200 mr-2 mt-0.5" />
                  <span className="text-blue-100 text-sm">Maputo, Moçambique</span>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-blue-200 mr-2 mt-0.5" />
                  <div className="text-blue-100 text-sm">
                    <div>+258 869397679</div>
                    <div>+258 843613062</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-200 mr-2 mt-0.5" />
                  <span className="text-blue-100 text-sm">Geral@treesconsulting.co.mz</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-400 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2024 TREE-S CONSULTING. Todos os direitos reservados.
            </div>
            <div className="flex space-x-4 text-sm">
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="text-blue-200 hover:text-white transition-colors duration-200"
              >
                Política de Privacidade
              </button>
              <span className="text-blue-300">|</span>
              <span className="text-blue-200">Termos de Serviço</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer