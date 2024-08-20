import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import SignUpPage from "./pages/SignUpPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<DashboardPage />} />
        Du bist jetzt in der Warteschlange für den Verkauf der "Lucky Dip" Tickets von Adele in München. Bitte aktualisiere deinen Browser nicht, um deinen Platz in der Warteschlange zu behalten.


Wichtige Information: "Lucky Dip" Tickets werden zum Sonderpreis angeboten, um jedem den Besuch von Adele möglich zu machen. Im Gegenzug akzeptierst Du, dass


(1) der Veranstalter die Ticketkategorie (Stehplatz, Sitzplatz) sowie die Lage des Tickets im Saalplan nach Verfügbarkeit in freiem Ermessen festlegt


(2) die Tickets personalisiert und auch im Falle unverschuldeter Verhinderung nicht auf Dritte übertragbar sind. Ticket Transfer oder Resale werden nicht angeboten.


(3) Die Eintrittskarten müssen am Tag der Veranstaltung an der Abendkasse des Veranstaltungsortes abgeholt werden, wo Du dich ausweisen musst.
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Route>
    </Routes>
  );
}

export default App;