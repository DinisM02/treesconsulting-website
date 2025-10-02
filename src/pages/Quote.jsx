import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Calculator, Send, CheckCircle } from 'lucide-react'

const Quote = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    servico: '',
    descricao: '',
    prazo: '',
    orcamento: ''
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
    console.log('Quote form submitted:', formData)
    alert('Solicitação de orçamento enviada com sucesso! Entraremos em contacto em até 48 horas.')
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      servico: '',
      descricao: '',
      prazo: '',
      orcamento: ''
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
                <Link to="/" className="hover:text-white">Início</Link> / Orçamento
              </nav>
              <h1 className="text-5xl font-bold">Solicitar Orçamento</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-8">
                <Calculator className="h-8 w-8 text-tree-s-blue mr-3" />
                <h2 className="text-3xl font-bold text-tree-s-navy">Solicitação de Orçamento</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Informações Pessoais</h3>
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
                    <div>
                      <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telemóvel *
                      </label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="+258 84 123 4567"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa *
                      </label>
                      <Input
                        id="empresa"
                        name="empresa"
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Nome da sua empresa"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Informações do Serviço</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-2">
                        Tipo de Serviço *
                      </label>
                      <select
                        id="servico"
                        name="servico"
                        required
                        value={formData.servico}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tree-s-blue focus:border-transparent"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="consultoria">Consultoria em Sistemas de Gestão</option>
                        <option value="auditoria">Auditoria Interna/Externa</option>
                        <option value="formacao">Formação e Capacitação</option>
                        <option value="estudos-ambientais">Estudos Ambientais</option>
                        <option value="outros">Outros (especificar na descrição)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-2">
                        Descrição Detalhada do Projeto *
                      </label>
                      <Textarea
                        id="descricao"
                        name="descricao"
                        required
                        value={formData.descricao}
                        onChange={handleInputChange}
                        placeholder="Descreva detalhadamente o que precisa, incluindo normas específicas, tamanho da empresa, etc."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="prazo" className="block text-sm font-medium text-gray-700 mb-2">
                          Prazo Desejado
                        </label>
                        <Input
                          id="prazo"
                          name="prazo"
                          type="text"
                          value={formData.prazo}
                          onChange={handleInputChange}
                          placeholder="Ex: 3 meses, urgente, etc."
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="orcamento" className="block text-sm font-medium text-gray-700 mb-2">
                          Orçamento Estimado
                        </label>
                        <Input
                          id="orcamento"
                          name="orcamento"
                          type="text"
                          value={formData.orcamento}
                          onChange={handleInputChange}
                          placeholder="Ex: 50.000 MT (opcional)"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <Button 
                    type="submit" 
                    className="bg-tree-s-blue hover:bg-tree-s-hover text-white w-full py-4 text-lg font-semibold"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Solicitação de Orçamento
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tree-s-navy mb-4">Por que solicitar um orçamento?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos propostas personalizadas e transparentes para cada projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-tree-s-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proposta Personalizada</h3>
              <p className="text-gray-600">
                Cada orçamento é desenvolvido especificamente para as necessidades da sua empresa
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tree-s-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Resposta Rápida</h3>
              <p className="text-gray-600">
                Retornamos com uma proposta detalhada em até 48 horas após o recebimento
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-tree-s-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sem Compromisso</h3>
              <p className="text-gray-600">
                O orçamento é totalmente gratuito e sem qualquer obrigação de contratação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-tree-s-ocean text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Tem dúvidas sobre nossos serviços?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe está disponível para esclarecer qualquer questão e ajudar 
            a encontrar a melhor solução para sua empresa.
          </p>
          <Link to="/contactos">
            <Button className="bg-white text-tree-s-ocean hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Entre em Contacto
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Quote
