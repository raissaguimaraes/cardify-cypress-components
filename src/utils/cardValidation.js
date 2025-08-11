// Algoritmo de Luhn para validação de cartão
export const validateCardNumber = (number) => {
  const digits = number.replace(/\D/g, '');
  let sum = 0;
  let isEven = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0 && digits.length >= 13;
};

// Detectar bandeira do cartão
export const detectCardBrand = (number) => {
  const digits = number.replace(/\D/g, '');
  
  if (/^4/.test(digits)) return 'visa';
  if (/^5[1-5]/.test(digits) || /^2[2-7]/.test(digits)) return 'mastercard';
  if (/^3[47]/.test(digits)) return 'amex';
  if (/^6(?:011|5)/.test(digits)) return 'discover';
  if (/^(?:2131|1800|35)/.test(digits)) return 'jcb';
  
  return 'unknown';
};

// Máscaras para formatação
export const formatCardNumber = (value) => {
  const digits = value.replace(/\D/g, '');
  const groups = digits.match(/.{1,4}/g) || [];
  return groups.join(' ').substr(0, 19);
};

export const formatExpirationDate = (value) => {
  const digits = value.replace(/\D/g, '');
  if (digits.length >= 2) {
    return `${digits.substr(0, 2)}/${digits.substr(2, 2)}`;
  }
  return digits;
};

export const formatCVV = (value) => {
  return value.replace(/\D/g, '').substr(0, 4);
};

export const formatHolderName = (value) => {
  return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '').toUpperCase();
};

// Validar data de expiração
export const validateExpirationDate = (date) => {
  const [month, year] = date.split('/');
  if (!month || !year || month.length !== 2 || year.length !== 2) return false;
  
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;
  
  const cardYear = parseInt(year);
  const cardMonth = parseInt(month);
  
  if (cardMonth < 1 || cardMonth > 12) return false;
  
  if (cardYear < currentYear) return false;
  if (cardYear === currentYear && cardMonth < currentMonth) return false;
  
  return true;
};