import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import HomePage from '../pages/HomePage.page';
import LoginPage from '../pages/LoginPage.page';
import SignupPage from '../pages/SignupPage.page';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
