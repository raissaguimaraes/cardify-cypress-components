import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, CreditCard, Shield, Zap, Users, ArrowRight, Crown } from 'lucide-react';

const Upgrade = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-300/10 via-lime-300/5 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-lime-300/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-300/3 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-lime-300/10 border border-lime-300/20 rounded-full px-6 py-3 mb-8">
            <Crown className="w-5 h-5 text-lime-300 mr-2" />
            <span className="text-lime-300 font-medium">Upgrade para Pro</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Desbloqueie todo o
            <span className="block text-lime-300">potencial do Cardify</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Você atingiu o limite de 3 cartões do plano gratuito. 
            <span className="text-lime-300 font-semibold"> Faça o upgrade e tenha acesso ilimitado!</span>
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Plano Gratuito */}
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-700/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Plano Atual</h3>
                <div className="text-4xl font-bold text-white mb-2">Gratuito</div>
                <p className="text-zinc-400">Limitado</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-zinc-300">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">✕</span>
                  </div>
                  Apenas 3 cartões
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-lime-300 mr-3" />
                  Validação automática Luhn
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-lime-300 mr-3" />
                  Visualização 3D dos cartões
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-lime-300 mr-3" />
                  Detecção de bandeiras
                </li>
                <li className="flex items-center text-zinc-300">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">✕</span>
                  </div>
                  Sem integrações
                </li>
                <li className="flex items-center text-zinc-300">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs font-bold">✕</span>
                  </div>
                  Suporte limitado
                </li>
              </ul>

              <div className="text-center">
                <div className="text-zinc-400 font-medium">Plano Atual</div>
              </div>
            </div>

            {/* Plano Pro */}
            <div className="relative bg-gradient-to-br from-lime-300/10 to-lime-300/5 border-2 border-lime-300 rounded-3xl p-8">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-lime-300 text-zinc-900 px-6 py-2 rounded-full font-bold flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  Recomendado
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Plano Pro</h3>
                <div className="text-4xl font-bold text-lime-300 mb-2">R$ 19,90</div>
                <p className="text-zinc-400">por mês</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-lime-300 mr-3" />
                  <span><strong className="text-white">Cartões ilimitados</strong></span>
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-lime-300 mr-3" />
                  <span><strong className="text-white">Integração PayPal</strong></span>
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-lime-300 mr-3" />
                  <span><strong className="text-white">Integração Stripe</strong></span>
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-lime-300 mr-3" />
                  Backup automático na nuvem
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-lime-300 mr-3" />
                  Relatórios avançados
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-lime-300 mr-3" />
                  Suporte prioritário 24/7
                </li>
                <li className="flex items-center text-zinc-300">
                  <Check className="w-5 h-5 text-lime-300 mr-3" />
                  Temas personalizados
                </li>
              </ul>

              <button className="w-full bg-lime-300 text-zinc-900 py-4 rounded-2xl font-bold text-lg hover:bg-lime-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-lime-300/25">
                Fazer Upgrade Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Por que fazer o upgrade?
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Desbloqueie recursos profissionais e tenha controle total sobre suas finanças
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 text-center border border-zinc-700/50 hover:border-lime-300/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-lime-300 to-lime-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cartões Ilimitados</h3>
              <p className="text-zinc-400 leading-relaxed">
                Adicione quantos cartões quiser sem limitações. Gerencie toda sua carteira digital em um só lugar.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 text-center border border-zinc-700/50 hover:border-lime-300/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-lime-300 to-lime-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Integrações Avançadas</h3>
              <p className="text-zinc-400 leading-relaxed">
                Conecte com PayPal e Stripe para pagamentos diretos e sincronização automática de transações.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 text-center border border-zinc-700/50 hover:border-lime-300/30 transition-all duration-300">
              <div className="bg-gradient-to-br from-lime-300 to-lime-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-zinc-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Backup Seguro</h3>
              <p className="text-zinc-400 leading-relaxed">
                Seus dados ficam seguros na nuvem com backup automático e criptografia de nível bancário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-3xl p-12 border border-zinc-700/50">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-lime-300 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl text-zinc-300 mb-8 leading-relaxed">
              "O upgrade para o Pro foi a melhor decisão! Agora posso gerenciar todos os meus cartões e as integrações com PayPal facilitaram muito minha vida financeira."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-300 to-lime-400 rounded-full flex items-center justify-center mr-4">
                <span className="text-zinc-900 font-bold">MR</span>
              </div>
              <div>
                <div className="text-white font-semibold">Maria Rodrigues</div>
                <div className="text-zinc-400">Usuária Pro há 6 meses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-lime-300/10 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Pronto para desbloquear todo o potencial?
          </h2>
          <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
            Faça o upgrade agora e tenha acesso imediato a todos os recursos Pro
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-lime-300 text-zinc-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-lime-400 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-lime-300/25 flex items-center justify-center">
              Fazer Upgrade - R$ 19,90/mês
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <Link
              to="/cards"
              className="border-2 border-zinc-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-zinc-800 hover:border-lime-300 transition-all duration-300 flex items-center justify-center"
            >
              Voltar aos Cartões
            </Link>
          </div>
          
          <div className="mt-8 text-zinc-400">
            <p>✓ Sem compromisso • ✓ Cancele quando quiser • ✓ Suporte 24/7</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Upgrade;