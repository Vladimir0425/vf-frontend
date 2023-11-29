import { Login, Signup as CustomerSignup } from '@/pages/customer';
import { Dashboard } from '@/pages/customer';

export const customerRoutes = [
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up/customer',
    element: <CustomerSignup />,
  },
];
