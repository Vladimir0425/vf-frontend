import { Layout } from '@/components';

import { superAdminRoutes } from '@/routes/super-admin';
import { customerRoutes } from '@/routes/customer';
import { vendorRoutes } from '@/routes/vendor';

export const routes = [
  {
    path: '/admin',
    element: <Layout />,
    children: superAdminRoutes,
  },
];

export { superAdminRoutes, customerRoutes, vendorRoutes };
