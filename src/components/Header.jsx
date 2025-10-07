import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-tree-s-fundamental border-b border-tree-s-mist">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col lg:flex-row justify-between items-center text-xs sm:text-sm text-tree-s-dark">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 mb-2 lg:mb-0">
              <div className="flex items-center">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-tree-s-blue" />
                <span className="text-center sm:text-left">Maputo, Moçambique</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-tree-s-blue" />
                <span className="break-all sm:break-normal">Geral@treesconsulting.co.mz</span>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-tree-s-blue" />
              <span className="text-center">+258 869397679 / 843613062</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/Prancheta2_1.png" 
              alt="3S Tree Consulting" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link 
              to="/"
              className={`text-gray-700 hover:text-tree-s-blue transition-colors duration-200 font-medium ${
                isActive('/') ? 'text-tree-s-blue font-semibold' : ''
              }`}
            >
              Início
            </Link>
            <Link 
              to="/sobre-nos"
              className={`text-gray-700 hover:text-tree-s-blue transition-colors duration-200 font-medium ${
                isActive('/sobre-nos') ? 'text-tree-s-blue font-semibold' : ''
              }`}
            >
              Sobre Nós
            </Link>
            <Link 
              to="/servicos"
              className={`text-gray-700 hover:text-tree-s-blue transition-colors duration-200 font-medium ${
                isActive('/servicos') ? 'text-tree-s-blue font-semibold' : ''
              }`}
            >
              Serviços
            </Link>
            <Link 
              to="/contactos"
              className={`text-gray-700 hover:text-tree-s-blue transition-colors duration-200 font-medium ${
                isActive('/contactos') ? 'text-tree-s-blue font-semibold' : ''
              }`}
            >
              Contactos
            </Link>
            <Link 
              to="/orcamento"
              className="bg-tree-s-blue text-white px-6 py-2 rounded-lg hover:bg-tree-s-hover transition-colors duration-200 font-semibold"
            >
              Orçamento →
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-700 hover:text-tree-s-blue transition-colors duration-200 font-medium ${
                  isActive('/') ? 'text-tree-s-blue font-semibold' : ''
                }`}
              >
                Início
              </Link>
              <Link 
                to="/sobre-nos"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-700 hover:text-tree-s-blue transition-colors duration-200 font-medium ${
                  isActive('/sobre-nos') ? 'text-tree-s-blue font-semibold' : ''
                }`}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/servicos"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-700 hover:text-tree-s-blue transition-colors duration-200 font-medium ${
                  isActive('/servicos') ? 'text-tree-s-blue font-semibold' : ''
                }`}
              >
                Serviços
              </Link>
              <Link 
                to="/contactos"
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-700 hover:text-tree-s-blue transition-colors duration-200 font-medium ${
                  isActive('/contactos') ? 'text-tree-s-blue font-semibold' : ''
                }`}
              >
                Contactos
              </Link>
              <Link 
                to="/orcamento"
                onClick={() => setIsMenuOpen(false)}
                className="bg-tree-s-blue text-white px-6 py-2 rounded-lg hover:bg-tree-s-hover transition-colors duration-200 font-semibold text-center"
              >
                Orçamento →
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
