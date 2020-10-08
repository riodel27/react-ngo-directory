import { getAuthSession } from '_libs/auth.helper';

import { axiosInstance } from './base';

const getOrganizations = () => {
   const headers = { Authorization: `Bearer ${getAuthSession()}` };

   return axiosInstance.get('/organizations', { headers });
};

const createOrganization = () => {
   return axiosInstance.post('/organizations');
};

export default { getOrganizations, createOrganization };
