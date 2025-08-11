import React, { useState } from 'react';
import { Eye, EyeOff, Plus } from 'lucide-react';
import CardPreview from '../components/CardPreview';
import { cardService } from '../services/cardService';
import { 
  validateCardNumber, 
  validateExpirationDate,
  formatCardNumber,
  formatExpirationDate,
  formatCVV,
  formatHolderName
} from '../utils/cardValidation';

import nubankLogo from '../assets/brands/nubank.svg';
import interLogo from '../assets/brands/inter.svg';
import neonLogo from '../assets/brands/neon.svg';
import c6bankLogo from '../assets/brands/c6bank.svg';
import willLogo from '../assets/brands/will.svg';
import otherLogo from '../assets/brands/other.svg';

const AddCard = () => {
  const [showCVV, setShowCVV] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState({ type: '', message: '' });

  const [cardData, setCardData] = useState({
    number: '',
    holderName: '',
    expirationDate: '',
    cvv: '',
    bank: ''
  });

  const banks = [
    { value: 'nubank', label: 'Nubank', logo: nubankLogo },
    { value: 'inter', label: 'Inter', logo: interLogo },
    { value: 'neon', label: 'Neon', logo: neonLogo },
    { value: 'c6bank', label: 'C6 Bank', logo: c6bankLogo },
    { value: 'willbank', label: 'Will Bank', logo: willLogo },
    { value: 'outro', label: 'Outro', logo: otherLogo }
  ];

  const handleInputChange = (field, value) => {
    let formattedValue = value;

    switch (field) {
      case 'number':
        formattedValue = formatCardNumber(value);
        break;
      case 'holderName':
        formattedValue = formatHolderName(value);
        break;
      case 'expirationDate':
        formattedValue = formatExpirationDate(value);
        break;
      case 'cvv':
        formattedValue = formatCVV(value);
        break;
    }

    setCardData(prev => ({
      ...prev,
      [field]: formattedValue
    }));

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!cardData.number) {
      newErrors.number = 'Número do cartão é obrigatório';
    } else if (!validateCardNumber(cardData.number)) {
      newErrors.number = 'Número de cartão inválido';
    }

    if (!cardData.holderName.trim()) {
      newErrors.holderName = 'Nome do titular é obrigatório';
    } else if (cardData.holderName.trim().length < 2) {
      newErrors.holderName = 'Nome deve ter pelo menos 2 caracteres';
    }

    if (!cardData.expirationDate) {
      newErrors.expirationDate = 'Data de expiração é obrigatória';
    } else if (!validateExpirationDate(cardData.expirationDate)) {
      newErrors.expirationDate = 'Data de expiração inválida ou vencida';
    }

    if (!cardData.cvv) {
      newErrors.cvv = 'CVV é obrigatório';
    } else if (cardData.cvv.length < 3) {
      newErrors.cvv = 'CVV deve ter 3 ou 4 dígitos';
    }

    if (!cardData.bank) {
      newErrors.bank = 'Selecione um banco';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const checkCardLimit = async () => {
    try {
      const existingCards = await cardService.getCards();
      return existingCards.length < 3;
    } catch (error) {
      console.error('Erro ao verificar limite de cartões:', error);
      return true;
    }
  };

  const checkDuplicateCard = async (cardNumber) => {
    try {
      const existingCards = await cardService.getCards();
      const cleanCardNumber = cardNumber.replace(/\s/g, '');
      return existingCards.some(card => card.number === cleanCardNumber);
    } catch (error) {
      console.error('Erro ao verificar cartão duplicado:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setNotification({ type: '', message: '' });
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const canAddCard = await checkCardLimit();
      if (!canAddCard) {
        setNotification({
          type: 'error',
          message: (
            <span>
              Você já cadastrou 3 cartões. Para gerenciar mais cartões, considere migrar para o plano Pro.{' '}
              <a 
                href="/upgrade" 
                className="text-lime-300 hover:text-lime-400 underline font-semibold"
              >
                Clique aqui para fazer o Upgrade
              </a>
            </span>
          )
        });
        setLoading(false);
        return;
      }

      const isDuplicate = await checkDuplicateCard(cardData.number);
      if (isDuplicate) {
        setNotification({
          type: 'error',
          message: 'Este cartão já foi cadastrado anteriormente.'
        });
        setLoading(false);
        return;
      }

      const cardToSave = {
        number: cardData.number.replace(/\s/g, ''),
        holderName: cardData.holderName.trim(),
        expirationDate: cardData.expirationDate,
        cvv: cardData.cvv,
        bank: cardData.bank
      };

      await cardService.addCard(cardToSave);
      
      setNotification({
        type: 'success',
        message: 'Cartão cadastrado com sucesso!'
      });
      
      setCardData({
        number: '',
        holderName: '',
        expirationDate: '',
        cvv: '',
        bank: ''
      });
    } catch (error) {
      console.error('Erro ao salvar cartão:', error);
      setNotification({
        type: 'error',
        message: 'Erro ao salvar cartão. Tente novamente.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-950 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Adicionar Novo Cartão
          </h1>
          <p className="text-zinc-400 text-lg">
            Preencha os dados e veja a visualização em tempo real
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-zinc-900 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2 ml-2">
                  Número do Cartão
                </label>
                <input
                  data-cy='number'
                  type="text"
                  value={cardData.number}
                  onChange={(e) => handleInputChange('number', e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className={`w-full bg-zinc-800 border rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-colors ${
                    errors.number 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-zinc-700 focus:ring-lime-300 focus:border-lime-300'
                  }`}
                />
                {errors.number && (
                  <p className="alert-error mt-1 text-xs text-red-400 ml-2">{errors.number}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2 ml-2">
                  Nome do Titular
                </label>
                <input
                  data-cy="holderName"
                  type="text"
                  value={cardData.holderName}
                  onChange={(e) => handleInputChange('holderName', e.target.value)}
                  placeholder="FULANO DE TAL"
                  className={`w-full bg-zinc-800 border rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-colors ${
                    errors.holderName 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-zinc-700 focus:ring-lime-300 focus:border-lime-300'
                  }`}
                />
                {errors.holderName && (
                  <p className="alert-error mt-1 text-xs text-red-400 ml-2">{errors.holderName}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2 ml-2">
                    Validade
                  </label>
                  <input
                    data-cy="expirationDate"
                    type="text"
                    value={cardData.expirationDate}
                    onChange={(e) => handleInputChange('expirationDate', e.target.value)}
                    placeholder="MM/AA"
                    maxLength={5}
                    className={`w-full bg-zinc-800 border rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-colors ${
                      errors.expirationDate 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-zinc-700 focus:ring-lime-300 focus:border-lime-300'
                    }`}
                  />
                  {errors.expirationDate && (
                    <p className="alert-error mt-1 text-xs text-red-400 ml-2">{errors.expirationDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2 ml-2">
                    CVV
                  </label>
                  <div className="relative">
                    <input
                      data-cy="cvv"
                      type={showCVV ? 'text' : 'password'}
                      value={cardData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      placeholder="123"
                      maxLength={4}
                      className={`w-full bg-zinc-800 border rounded-xl px-4 py-3 pr-12 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.cvv 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-zinc-700 focus:ring-lime-300 focus:border-lime-300'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowCVV(!showCVV)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-300"
                    >
                      {showCVV ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.cvv && (
                    <p className="alert-error mt-1 text-xs text-red-400 ml-2">{errors.cvv}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2 ml-2">
                  Banco Digital
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {banks.map(bank => {
                    return (
                      <button
                        data-cy="bank"
                        type="button"
                        key={bank.value}
                        onClick={() => handleInputChange('bank', bank.value)}
                        className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                          cardData.bank === bank.value
                            ? 'border-lime-300 bg-lime-300/10 shadow-lg shadow-lime-300/25 ring-2 ring-lime-300/20'
                            : errors.bank
                            ? 'border-red-500/50 bg-red-500/5 hover:border-red-400'
                            : 'border-zinc-700 bg-zinc-800/30 hover:border-zinc-600 hover:bg-zinc-800/50'
                        }`}
                      >
                        <div className={`w-16 h-12 flex items-center justify-center mb-3 transition-all duration-300 ${
                          cardData.bank === bank.value
                            ? 'scale-110'
                            : 'scale-100 hover:scale-105'
                        }`}>
                          <img 
                            src={bank.logo} 
                            alt={`${bank.label} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className={`font-medium text-xs text-center transition-colors duration-300 ${
                          cardData.bank === bank.value
                            ? 'text-lime-300'
                            : 'text-white'
                        }`}>
                          {bank.label}
                        </div>

                      </button>
                    );
                  })}
                </div>
                {errors.bank && (
                  <p className="alert-error mt-1 text-xs text-red-400 ml-2">{errors.bank}</p>
                )}
              </div>

              {errors.submit && (
                <div className="bg-red-500/10 border border-red-500 rounded-xl p-4">
                  <p className="text-red-400 text-sm">{errors.submit}</p>
                </div>
              )}

              {notification.message && (
                <div className={`notice-success rounded-xl p-4 ${
                  notification.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500' 
                    : 'bg-red-500/10 border border-red-500'
                }`}>
                  <div className={`text-sm ${
                    notification.type === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {notification.message}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-lime-300 hover:bg-lime-400 disabled:bg-zinc-700 disabled:text-zinc-500 text-zinc-900 font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-zinc-900 border-t-transparent" />
                ) : (
                  <>
                    <Plus className="w-5 h-5 mr-2" />
                    Adicionar Cartão
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="flex items-center justify-center h-full">
            <CardPreview 
              cardData={cardData} 
              showCVV={showCVV}
              toggleCVV={() => setShowCVV(!showCVV)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard;