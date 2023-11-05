import { Container } from 'components/App/App.styled';
import Header from 'components/Header/Header';
import FormContainer from 'components/FormContainer/FormContainer';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/login');
    }
  }, [location, navigate]);

  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}

export default Layout;
