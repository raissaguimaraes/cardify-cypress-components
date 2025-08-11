export const bankColors = {
  nubank: {
    primary: '#8A05BE',  // roxo Nubank
    secondary: '#6B038F',
    gradient: 'from-[#8A05BE] to-[#6B038F]'
  },
  inter: {
    primary: '#FF6600',  // laranja Inter
    secondary: '#CC5200',
    gradient: 'from-[#FF6600] to-[#CC5200]'
  },
  neon: {
    primary: '#00CFFF',  // azul Neon
    secondary: '#00B2D4',
    gradient: 'from-[#00CFFF] to-[#00B2D4]'
  },
  c6bank: {
    primary: '#121212',  // cinza escuro C6
    secondary: '#2E2E2E',
    gradient: 'from-[#121212] to-[#2E2E2E]'
  },
  willbank: {
    primary: '#FCD34D',  // amarelo Will Bank
    secondary: '#F59E0B',
    gradient: 'from-[#FCD34D] to-[#F59E0B]'
  },
  outro: {
    primary: '#84CC16',  // verde limão (lime-500)
    secondary: '#65A30D', // lime-600
    gradient: 'from-[#84CC16] to-[#65A30D]'
  }
};

export const getBankColor = (bank) => {
  return bankColors[bank?.toLowerCase()] || bankColors.outro;
};
