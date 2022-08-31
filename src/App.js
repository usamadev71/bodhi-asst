import AppContextProvider from "./contexts/app.context";
import { Routes, Route } from "react-router-dom";
import PersonalDetailsPage from "./views/PersonalDetailsPage";
import ShippingDetailsPage from "./views/ShippingDetailsPage";
import PaymentDetailsPage from "./views/PaymentDetailsPage";
import ThankYouPage from "./views/ThankyouPage";

function App() {
  return (
    <AppContextProvider>
      <div className="outer-div">
        <Routes>
          <Route path="/" index element={<PersonalDetailsPage />} />
          <Route path="/shipping-details" element={<ShippingDetailsPage />} />
          <Route path="/payment-details" element={<PaymentDetailsPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
}

export default App;
