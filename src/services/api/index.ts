import axios from 'axios';
import { apiConfig } from '../../config';

const routingBetweenMarkersAPI = axios.create({
  baseURL: apiConfig.serverForRoutingBetweenMarkersURI,
});

routingBetweenMarkersAPI.interceptors.request.use((req) => {
	return {
		...req,
		baseURL: apiConfig.serverForRoutingBetweenMarkersURI,
	};
});

export default routingBetweenMarkersAPI;