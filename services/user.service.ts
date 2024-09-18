import axios from 'axios';
import { iUser } from '../interfaces/iUser';
import { iAllUserInfo } from '../interfaces/iAllUserInfo';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async (query = ''): Promise<iUser[]> => {
  try {
    const response = await axios.get(API_URL);
    if (query) {
      return response.data.filter((user: iUser) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase())
      );
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const fetchUserDetails = async (userId: number): Promise<iAllUserInfo | null> => {
    try {
      const response = await axios.get(`${API_URL}/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error; 
    }
  };
