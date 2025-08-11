import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, Zap, Check, Star, CreditCard, Users, ArrowRight, Quote } from 'lucide-react';

// Import bank logos
import nubankLogo from '../assets/brands/nubank.svg';
import interLogo from '../assets/brands/inter.svg';
import neonLogo from '../assets/brands/neon.svg';
import c6bankLogo from '../assets/brands/c6bank.svg';
import willLogo from '../assets/brands/will.svg';
import otherLogo from '../assets/brands/other.svg';

const Landing = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-300/10 via-lime-300/5 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-lime-300/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-300/3 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center bg-lime-300/10 border border-lime-300/20 rounded-full px-6 py-2 mb-8">
              <Star className="w-4 h-4 text-lime-300 mr-2" />
              <span className="text-lime-300 text-sm font-medium">Mais de 10.000 usuários confiam no Cardify</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Sua carteira digital
              <span className="block text-lime-300">inteligente e segura</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Gerencie todos os seus cartões com tecnologia de ponta, integração com pagamentos e segurança bancária. 
              <span className="text-lime-300 font-semibold"> Simplifique sua vida financeira.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/"
                className="group bg-lime-300 text-zinc-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-lime-400 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-lime-300/25 flex items-center justify-center"
              >
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/"
                className="group border-2 border-zinc-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-zinc-800 hover:border-lime-300 transition-all duration-300 flex items-center justify-center"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Ver Demonstração
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-lime-300 mb-2">10K+</div>
                <div className="text-zinc-400">Usuários Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-lime-300 mb-2">50K+</div>
                <div className="text-zinc-400">Cartões Gerenciados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-lime-300 mb-2">99.9%</div>
                <div className="text-zinc-400">Uptime Garantido</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tecnologia que faz a diferença
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Desenvolvido com as melhores práticas de segurança e experiência do usuário
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="group bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-10 text-center border border-zinc-700/50 hover:border-lime-300/30 transition-all duration-500 transform hover:scale-105">
              <div className="bg-gradient-to-br from-lime-300 to-lime-400 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-lime-300/25">
                <Shield className="w-10 h-10 text-zinc-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Segurança Bancária</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Criptografia AES-256, validação Luhn e conformidade PCI DSS para máxima proteção dos seus dados.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-10 text-center border border-zinc-700/50 hover:border-lime-300/30 transition-all duration-500 transform hover:scale-105">
              <div className="bg-gradient-to-br from-lime-300 to-lime-400 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-lime-300/25">
                <Smartphone className="w-10 h-10 text-zinc-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Design Responsivo</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Interface moderna que se adapta perfeitamente a qualquer dispositivo, do mobile ao desktop.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-10 text-center border border-zinc-700/50 hover:border-lime-300/30 transition-all duration-500 transform hover:scale-105">
              <div className="bg-gradient-to-br from-lime-300 to-lime-400 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-lime-300/25">
                <Zap className="w-10 h-10 text-zinc-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Performance Otimizada</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Carregamento instantâneo e sincronização em tempo real para uma experiência fluida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Banks Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-lime-300/10 border border-lime-300/20 rounded-full px-6 py-3 mb-8">
              <CreditCard className="w-5 h-5 text-lime-300 mr-2" />
              <span className="text-lime-300 font-medium">Bancos Parceiros</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Compatível com os principais bancos digitais
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Gerencie cartões de todos os seus bancos favoritos em uma única plataforma segura
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {/* Nubank */}
            <div className="group bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-12 flex items-center justify-center">
                  <img 
                    src={nubankLogo} 
                    alt="Nubank" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-zinc-400 group-hover:text-purple-400 text-sm font-medium transition-colors">
                  Nubank
                </div>
              </div>
            </div>

            {/* Inter */}
            <div className="group bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-12 flex items-center justify-center">
                  <img 
                    src={interLogo} 
                    alt="Inter" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-zinc-400 group-hover:text-orange-400 text-sm font-medium transition-colors">
                  Inter
                </div>
              </div>
            </div>

            {/* Neon */}
            <div className="group bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-12 flex items-center justify-center">
                  <img 
                    src={neonLogo} 
                    alt="Neon" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-zinc-400 group-hover:text-blue-400 text-sm font-medium transition-colors">
                  Neon
                </div>
              </div>
            </div>

            {/* C6 Bank */}
            <div className="group bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 hover:border-zinc-500/50 hover:bg-zinc-500/5 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-12 flex items-center justify-center">
                  <img 
                    src={c6bankLogo} 
                    alt="C6 Bank" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-zinc-400 group-hover:text-zinc-300 text-sm font-medium transition-colors">
                  C6 Bank
                </div>
              </div>
            </div>

            {/* Will Bank */}
            <div className="group bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-12 flex items-center justify-center">
                  <img 
                    src={willLogo} 
                    alt="Will Bank" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-zinc-400 group-hover:text-yellow-400 text-sm font-medium transition-colors">
                  Will Bank
                </div>
              </div>
            </div>

            {/* Outros Bancos */}
            <div className="group bg-zinc-800/30 backdrop-blur-sm rounded-2xl p-6 border border-zinc-700/50 hover:border-lime-500/50 hover:bg-lime-500/5 transition-all duration-300 transform hover:scale-105">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-12 flex items-center justify-center">
                  <img 
                    src={otherLogo} 
                    alt="Outros Bancos" 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="text-zinc-400 group-hover:text-lime-400 text-sm font-medium transition-colors">
                  Fale Conosco
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-400 text-lg mb-8">
              E muitos outros bancos digitais sendo adicionados constantemente
            </p>
            <Link
              to="/add"
              className="inline-flex items-center bg-lime-300 text-zinc-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-lime-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-lime-300/25"
            >
              Adicionar Meu Primeiro Cartão
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Integrations Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-lime-300/10 border border-lime-300/20 rounded-full px-6 py-3 mb-8">
              <CreditCard className="w-5 h-5 text-lime-300 mr-2" />
              <span className="text-lime-300 font-medium">Plano Pro</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integração com Pagamentos
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Conecte seus cartões diretamente com as principais plataformas de pagamento do mundo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* PayPal Integration */}
            <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-500/20 rounded-3xl p-10">
              <div className="flex items-center mb-8">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-xl">PP</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">PayPal</h3>
                  <p className="text-blue-400 font-medium">Integração Completa</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-blue-400 mr-3" />
                  Sincronização automática de cartões
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-blue-400 mr-3" />
                  Pagamentos diretos via PayPal
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-blue-400 mr-3" />
                  Histórico de transações
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-blue-400 mr-3" />
                  Proteção ao comprador
                </li>
              </ul>
            </div>

            {/* Stripe Integration */}
            <div className="bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-500/20 rounded-3xl p-10">
              <div className="flex items-center mb-8">
                <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Stripe</h3>
                  <p className="text-purple-400 font-medium">API Avançada</p>
                </div>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-purple-400 mr-3" />
                  Processamento global de pagamentos
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-purple-400 mr-3" />
                  Checkout personalizado
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-purple-400 mr-3" />
                  Análise de fraudes em tempo real
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-purple-400 mr-3" />
                  Suporte a 135+ moedas
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/"
              className="inline-flex items-center bg-lime-300 text-zinc-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-lime-400 transition-all duration-300 transform hover:scale-105"
            >
              Ativar Integrações
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Mais de 10.000 pessoas já transformaram a forma como gerenciam seus cartões
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-700/50 hover:border-lime-300/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-lime-300 mr-3" />
                <div className="flex text-lime-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                "O Cardify revolucionou como eu gerencio meus cartões. A integração com PayPal é perfeita e a segurança me dá total tranquilidade."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-lime-300 to-lime-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-zinc-900 font-bold">MR</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Maria Rodrigues</div>
                  <div className="text-zinc-400 text-sm">Empresária, São Paulo</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-700/50 hover:border-lime-300/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-lime-300 mr-3" />
                <div className="flex text-lime-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                "Interface incrível e funcionalidades que realmente fazem diferença no dia a dia. O plano Pro vale cada centavo pela integração com Stripe."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">CS</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Carlos Silva</div>
                  <div className="text-zinc-400 text-sm">Desenvolvedor, Rio de Janeiro</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-700/50 hover:border-lime-300/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-lime-300 mr-3" />
                <div className="flex text-lime-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                "Finalmente uma solução completa para gerenciar cartões. A validação automática e o design moderno superaram minhas expectativas."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AL</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Ana Lima</div>
                  <div className="text-zinc-400 text-sm">Designer, Belo Horizonte</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center bg-zinc-800/50 border border-zinc-700 rounded-full px-6 py-3">
              <Users className="w-5 h-5 text-lime-300 mr-2" />
              <span className="text-zinc-300">Junte-se a mais de 10.000 usuários satisfeitos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Planos que crescem com você
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Comece gratuitamente e evolua para recursos profissionais quando precisar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Plano Gratuito */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-10 border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white mb-4">Gratuito</h3>
                <div className="text-5xl font-bold text-white mb-2">R$ 0</div>
                <p className="text-zinc-400 text-lg">Para sempre</p>
              </div>

              <ul className="space-y-5 mb-10">
                <li className="flex items-center text-zinc-300 text-lg">
                  <Check className="w-6 h-6 text-lime-300 mr-4" />
                  Até 5 cartões
                </li>
                <li className="flex items-center text-zinc-300 text-lg">
                  <Check className="w-6 h-6 text-lime-300 mr-4" />
                  Validação automática Luhn
                </li>
                <li className="flex items-center text-zinc-300 text-lg">
                  <Check className="w-6 h-6 text-lime-300 mr-4" />
                  Visualização 3D dos cartões
                </li>
                <li className="flex items-center text-zinc-300 text-lg">
                  <Check className="w-6 h-6 text-lime-300 mr-4" />
                  Detecção de bandeiras
                </li>
                <li className="flex items-center text-zinc-300 text-lg">
                  <Check className="w-6 h-6 text-lime-300 mr-4" />
                  Suporte por email
                </li>
              </ul>

              <Link
                to="/"
                className="w-full block text-center border-2 border-zinc-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-zinc-700 hover:border-zinc-500 transition-all duration-300"
              >
                Começar Grátis
              </Link>
            </div>

            {/* Plano Pro */}
            <div className="relative bg-gradient-to-br from-lime-300/10 to-lime-300/5 border-2 border-lime-300 rounded-3xl p-10">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div className="bg-lime-300 text-zinc-900 px-6 py-2 rounded-full font-bold flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  Mais Popular
                </div>
              </div>

              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white mb-4">Pro</h3>
                <div className="text-5xl font-bold text-lime-300 mb-2">R$ 19,90</div>
                <p className="text-zinc-400 text-lg">por mês</p>
              </div>

              <ul className="space-y-5 mb-10">
                <li className="flex items-center text-zinc-300 text-lg">
                  <Check className="w-6 h-6 text-lime-300 mr-4" />
                  <span><strong className="text-white">Cartões ilimitados</strong></span>
                </li>
                <li className="flex items-center text-zinc-300 text-lg">
                  <Check className="w-6 h-6 text-lime-300 mr-4" />
                  <span><strong className="text-white">Integração PayPal</strong></span>
                </li>
                <li className="flex items-center text-zinc-300 text-lg">
                  <Check className="w-6 h-6 text-lime-300 mr-4" />
                  <span><strong className="text-white">Integração Stripe</strong></span>
                </li>
                <li className="flex items-center text-zinc-300 text-lg">
                  <Check className="w-6 h-6 text-lime-300 mr-4" />
                  Backup automático na nuvem
                </li>
                <li className="flex items-center text-zinc-300 text-lg">
                  <Check className="w-6 h-6 text-lime-300 mr-4" />
                  Relatórios avançados
                </li>
                <li className="flex items-center text-zinc-300 text-lg">
                  <Check className="w-6 h-6 text-lime-300 mr-4" />
                  Suporte prioritário 24/7
                </li>
                <li className="flex items-center text-zinc-300 text-lg">
                  <Check className="w-6 h-6 text-lime-300 mr-4" />
                  Temas personalizados
                </li>
              </ul>

              <Link
                to="/"
                className="w-full block text-center bg-lime-300 text-zinc-900 py-4 rounded-2xl font-bold text-lg hover:bg-lime-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-lime-300/25"
              >
                Upgrade para Pro
              </Link>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-zinc-400 text-lg">
              Todos os planos incluem criptografia de nível bancário e conformidade PCI DSS
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-lime-300/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Pronto para transformar sua carteira digital?
          </h2>
          <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
            Junte-se a milhares de usuários que já descobriram uma forma mais inteligente de gerenciar cartões
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/"
              className="bg-lime-300 text-zinc-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-lime-400 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-lime-300/25"
            >
              Começar Gratuitamente
            </Link>
            <Link
              to="/"
              className="border-2 border-zinc-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-zinc-800 hover:border-lime-300 transition-all duration-300"
            >
              Falar com Vendas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;