import React from 'react';
import { CreditCard, Github, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-lime-300 p-2 rounded-lg">
                <CreditCard className="w-6 h-6 text-zinc-900" />
              </div>
              <span className="text-white text-xl font-bold">Cardify</span>
            </div>
            <p className="text-zinc-400 text-sm">
              Sua carteira digital segura e intuitiva para gerenciar todos os seus cartões em um só lugar.
            </p>
          </div>

          {/* Produto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-lime-300 text-sm transition-colors">Recursos</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-lime-300 text-sm transition-colors">Segurança</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-lime-300 text-sm transition-colors">Planos</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-lime-300 text-sm transition-colors">API</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-lime-300 text-sm transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-lime-300 text-sm transition-colors">Contato</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-lime-300 text-sm transition-colors">Status</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-lime-300 text-sm transition-colors">Feedback</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-white font-semibold mb-4">Conecte-se</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-lime-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-lime-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-lime-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400 text-sm">
              © 2025 Cardify. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-zinc-400 hover:text-lime-300 text-sm transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-zinc-400 hover:text-lime-300 text-sm transition-colors">
                Termos
              </a>
              <a href="#" className="text-zinc-400 hover:text-lime-300 text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;