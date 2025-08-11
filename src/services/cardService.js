import axios from 'axios';

const API_BASE_URL = 'http://wallet.cardfify.dev/api/cards';

export const cardService = {
  async getCards() {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar cartões:', error);
      throw error;
    }
  },

  async addCard(cardData) {
    try {
      const response = await axios.post(API_BASE_URL, cardData);
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar cartão:', error);
      throw error;
    }
  },

  async deleteCard(cardId) {
    try {
      await axios.delete(`${API_BASE_URL}/${cardId}`);
    } catch (error) {
      console.error('Erro ao remover cartão:', error);
      throw error;
    }
  }
};