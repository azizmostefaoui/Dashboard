import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard/Dashboard"; 
import Team from "./pages/Team/Team"; 
import Contacts from './pages/contacts/Contacts';
import Invoices from './pages/invoices/Invoices';
import Form from './pages/form/form';
import Calendar from './pages/calendar/Calendar';
import FAQ from './pages/faq/Faq';
import Bar from './pages/bar/Bar';
import Pie from './pages/pie/Pie';
import Line from './pages/line/Line';
import Geography from './pages/geography/Geography';
// Create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
<Route path="invoices" element={<Invoices />} />
<Route path="form" element={<Form />} />
<Route path="calendar" element={<Calendar />} />
<Route path="faq" element={<FAQ />} />
<Route path="bar" element={<Bar />} />
<Route path="pie" element={<Pie />} />
<Route path="line" element={<Line />} />
<Route path="geography" element={<Geography />} />




    </Route>
  )
);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
