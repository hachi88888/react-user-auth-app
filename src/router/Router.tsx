import { memo, type FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { HeaderLayout } from '../components/templates/HeaderLayout';
import { LoginUserProvider } from '../providers/LoginUserProvider';
import { AuthGuard } from './AuthGuard';
import { Home } from '../components/pages/Home';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<HeaderLayout />}>
          <Route
            path="home"
            element={
              <AuthGuard>
                <Home />
              </AuthGuard>
            }
          />
          <Route
            path="home/setting"
            element={
              <AuthGuard>
                <Setting />
              </AuthGuard>
            }
          />
          <Route
            path="home/user-management"
            element={
              <AuthGuard>
                <UserManagement />
              </AuthGuard>
            }
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});
