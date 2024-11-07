import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

function Layout({ children }) {
  const location = useLocation();
  
  return (
    <>
      <Helmet>
        <link rel="canonical" href={`https://lauken.cl${location.pathname}`} />
        <link rel="alternate" hreflang="es-CL" href={`https://lauken.cl${location.pathname}`} />
        <link rel="alternate" hreflang="es-CL" href={`https://laukeninmobiliaria.cl${location.pathname}`} />
        <link rel="alternate" hreflang="es-CL" href={`https://inmobiliarialauken.cl${location.pathname}`} />
        <link rel="alternate" hreflang="x-default" href={`https://lauken.cl${location.pathname}`} />
      </Helmet>
      {children}
    </>
  );
}

export default Layout;