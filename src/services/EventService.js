import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/radislaw/real-world-vue3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  async getEvents() {
    const response = await apiClient.get('/events');
    return response.data;
  },
  async getEvent(id) {
    const response = await apiClient.get(`/events/${id}`);
    return response.data;
  },
};
