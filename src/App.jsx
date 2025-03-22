import { Helmet, HelmetProvider } from "react-helmet-async";
import Router from "./router/Router";

function App() {
  return (
    <>
    <HelmetProvider>
      <Helmet>

      <title>Best Dental Care in Orai | MMAX Dental Clinic</title>
        <meta name="description" content="Get the best dental care at MMAX Dental Clinic. Book your appointment today for healthy and beautiful teeth." />
        <meta name="keywords" content="dental care, best dentist in Orai, teeth cleaning, braces, dental implants" />
        <meta name="robots" content="index, follow" />

      </Helmet>
      <Router />
    </HelmetProvider>
      
    </>
  );
}

export default App;
