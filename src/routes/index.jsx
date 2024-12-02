import { createBrowserRouter } from 'react-router-dom';
import protectedRoutes from './protected.routes';
import publicRoutes from './public.routes';

const routes = createBrowserRouter([...protectedRoutes, ...publicRoutes]);
export default routes;
