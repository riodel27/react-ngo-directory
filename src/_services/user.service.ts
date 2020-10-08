import { getAuthSession } from '_libs/auth.helper';

import { axiosInstance } from './base';

const getUsers = () => {
   const headers = { Authorization: `Bearer ${getAuthSession()}` };
   return axiosInstance.get('/users', { headers });
};

export default { getUsers };
