import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages Publiques
import Home from "./pages/PagesPubliques/Home";
import Contact from "./pages/PagesPubliques/Contact";
import Covoiturages from "./pages/PagesPubliques/Covoiturages";
import DetailsCovoiturage from "./pages/PagesPubliques/DetailsCovoiturage";
import Login from "./pages/PagesPubliques/Login";
import MentionsLegales from "./pages/PagesPubliques/MentionsLegales";

// Pages Administrateur
import EspaceAdmin from "./pages/Administrateur/EspaceAdmin";

// Pages Employé
import EspaceEmploye from "./pages/Employe/EspaceEmploye";

// Pages Utilisateurs
import EspaceUsers from "./pages/Users/EspaceUsers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Pages publiques */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/covoiturages" element={<Covoiturages />} />
        <Route path="/covoiturage/:id" element={<DetailsCovoiturage />} />
        <Route path="/DetailsCovoiturage" element={<DetailsCovoiturage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/login" element={<Login />} />

        {/* Espace Administrateur */}
        <Route path="/admin/*" element={<EspaceAdmin />} />

        {/* Espace Employé */}
        <Route path="/employe/*" element={<EspaceEmploye />} />
        
        {/* Espace Utilisateurs */}
        <Route path="/utilisateur/*" element={<EspaceUsers />} />

        {/* Route par défaut - toute URL non reconnue redirige vers Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;