import React from 'react';
import { CreditCard, Eye, EyeOff, Wifi } from 'lucide-react';
import { getBankColor, detectCardBrand } from '../utils';
import chipSvg from '../assets/chip.svg';

const CardPreview = ({ cardData, showCVV, toggleCVV }) => {
  const bankColor = getBankColor(cardData.bank);
  const cardBrand = detectCardBrand(cardData.number);

  const getBrandIcon = (brand) => {
    const icons = {
      visa: (
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-white font-bold text-lg">VISA</span>
        </div>
      ),
      mastercard: (
        <div className="flex space-x-1">
          <div className="w-6 h-6 bg-red-500 rounded-full opacity-80"></div>
          <div className="w-6 h-6 bg-yellow-400 rounded-full opacity-80 -ml-3"></div>
        </div>
      ),
      amex: (
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-white font-bold text-sm">AMEX</span>
        </div>
      ),
      discover: (
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-white font-bold text-sm">DISCOVER</span>
        </div>
      ),
      jcb: (
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
          <span className="text-white font-bold text-sm">JCB</span>
        </div>
      ),
      unknown: <CreditCard className="w-8 h-8 text-white/60" />
    };
    return icons[brand] || icons.unknown;
  };

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Card Front */}
      <div className="relative w-96 h-60">
        <div 
          className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${bankColor.primary}, ${bankColor.secondary})`
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-between p-6">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-3">
                <Wifi className="w-6 h-6 text-white/80" />
                <div className="text-white/90 font-semibold text-lg">
                  {cardData.bank ? cardData.bank.charAt(0).toUpperCase() + cardData.bank.slice(1) : 'Banco Digital'}
                </div>
              </div>
              <div className="flex items-center">
                {getBrandIcon(cardBrand)}
              </div>
            </div>

            {/* Chip and Contactless */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  src={chipSvg} 
                  alt="Chip do cartão" 
                  className="w-12 h-9"
                />
              </div>
              <div className="flex space-x-1">
                <div className="w-4 h-4 border-2 border-white/60 rounded-full"></div>
                <div className="w-4 h-4 border-2 border-white/40 rounded-full"></div>
                <div className="w-4 h-4 border-2 border-white/20 rounded-full"></div>
              </div>
            </div>

            {/* Card Number */}
            <div className="space-y-2">
              <div className="text-white/60 text-xs font-medium uppercase tracking-wider">
                Número do Cartão
              </div>
              <div className="text-white text-2xl font-mono tracking-wider">
                {cardData.number || '•••• •••• •••• ••••'}
              </div>
            </div>

            {/* Bottom Info */}
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <div className="text-white/60 text-xs font-medium uppercase tracking-wider">
                  Portador
                </div>
                <div className="text-white text-sm font-semibold">
                  {cardData.holderName || 'SEU NOME AQUI'}
                </div>
              </div>
              <div className="space-y-1 text-right">
                <div className="text-white/60 text-xs font-medium uppercase tracking-wider">
                  Válido até
                </div>
                <div className="text-white text-sm font-mono">
                  {cardData.expirationDate || 'MM/AA'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CardPreview;