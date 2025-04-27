
import axios from 'axios';
import { Program } from './collegeService';

const API_URL = 'http://localhost:3000/programs';

export const getPrograms = async (): Promise<Program[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error('Failed to fetch programs');
  }
};

export const getProgram = async (id: string): Promise<Program> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error('Failed to fetch program');
  }
};