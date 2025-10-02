import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { MapPin, Mail, Phone, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    assunto: '',
    mensagem: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contacto em breve.')
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      assunto: '',
      mensagem: ''
    })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-tree-s-navy text-white">
        <div 
          className="h-full bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 25, 68, 0.85), rgba(0, 179, 255, 0.75)), url('/jj7HEgfrdAUn.jpg')`
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div>
              <nav className="text-blue-200 mb-4">
                <Link to="/" className="hover:text-white">Início</Link> / Contactos
              </nav>
              <h1 className="text-5xl font-bold">Entre em Contacto</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-tree-s-navy mb-6">Envie-nos uma Mensagem</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telemóvel
                      </label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="+258 84 123 4567"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa
                      </label>
                      <Input
                        id="empresa"
                        name="empresa"
                        type="text"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Nome da sua empresa"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <Input
                      id="assunto"
                      name="assunto"
                      type="text"
                      required
                      value={formData.assunto}
                      onChange={handleInputChange}
                      placeholder="Assunto da sua mensagem"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Descreva como podemos ajudar..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="bg-tree-s-blue hover:bg-tree-s-hover text-white w-full py-3 text-lg font-semibold"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contacto</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-tree-s-blue mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Endereço</h4>
                        <p className="text-gray-600">Maputo, Moçambique</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-tree-s-blue mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">info@tree-s.co.mz</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-tree-s-blue mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Telefone</h4>
                        <p className="text-gray-600">+258 84 123 4567 / +258 87 123 4567</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-tree-s-blue rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">TS</span>
                      </div>
                      <div>
                        <div className="text-tree-s-blue font-bold text-lg">Tree S</div>
                        <div className="text-gray-600 text-sm">CONSULTING</div>
                        <div className="text-gray-500 text-sm">www.tree-s.co.mz</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Commitment Section */}
                <div className="bg-tree-s-ocean text-white rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Compromisso da TREE-S CONSULTING</h3>
                  <p className="mb-6 leading-relaxed">
                    A TREE-S CONSULTING compromete-se em desenvolver, implementar e monitorizar os serviços 
                    fornecidos (Consultoria, Auditoria e Formação em Sistema de Gestão) garantindo desta forma a satisfação 
                    do Cliente.
                  </p>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                    <p className="font-bold text-lg">
                      "A SATISFAÇÃO dos nossos clientes NÃO TEM PREÇO"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-tree-s-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contacto connosco hoje mesmo e descubra como podemos ajudar 
            a sua empresa a alcançar a excelência operacional.
          </p>
          <Link to="/orcamento">
            <Button className="bg-white text-tree-s-navy hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Solicitar Orçamento
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Contact
