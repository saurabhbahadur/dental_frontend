import { Helmet, HelmetProvider } from "react-helmet-async";
import Router from "./router/Router";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Essential Meta Tags */}
        <title>Best Dental Care in Orai | Max Dental Care</title>
        <meta
          name="description"
          content="Get the best dental care at Max Dental Care. Book your appointment today for healthy and beautiful teeth."
        />
        <meta
          name="keywords"
          content="dental care, best dentist in Orai, teeth cleaning, braces, dental implants , madan niranjan , madan niranjan orai,"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Max Dental Care" />
        <meta name="language" content="en" />

        {/* Open Graph Meta Tags (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Best Dental Care in Orai | Max Dental Care" />
        <meta property="og:description" content="Get the best dental care at Max Dental Care. Book your appointment today for healthy and beautiful teeth." />
        <meta property="og:image" content="https://res.cloudinary.com/dxaf36ydh/image/upload/f_auto,q_auto/v1/mMaxDentalCare/iretqecsb4mjnsqktmdk" />
        <meta property="og:url" content="https://mmaxdentalcare.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Dental Care in Orai | Max Dental Care" />
        <meta name="twitter:description" content="Get the best dental care at Max Dental Care. Book your appointment today for healthy and beautiful teeth." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dxaf36ydh/image/upload/f_auto,q_auto/v1/mMaxDentalCare/iretqecsb4mjnsqktmdk" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://mmaxdentalcare.com/" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Max Dental Care",
            "image": "https://res.cloudinary.com/dxaf36ydh/image/upload/f_auto,q_auto/v1/mMaxDentalCare/iretqecsb4mjnsqktmdk",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "राजकीय मेडिकल कालेज गेट नं. 2 के सामने",
              "addressLocality": "Orai",
              "addressRegion": "UP",
              "postalCode": "285001",
              "addressCountry": "IN"
            },
            "url": "https://mmaxdentalcare.com/",
            "telephone": "+91 9927488027",
            "openingHours": "Mon - Sat: 10:00 AM - 08:00 PM"
          })}
        </script>
      </Helmet>
      <Router />
    </HelmetProvider>
  );
}

export default App;
