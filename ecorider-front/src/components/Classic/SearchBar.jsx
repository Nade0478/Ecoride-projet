import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Créer les paramètres de recherche
    const params = new URLSearchParams();
    if (departure.trim()) params.append('departure', departure.trim());
    if (arrival.trim()) params.append('arrival', arrival.trim());
    if (date) params.append('date', date);
    
    // Naviguer seulement si au moins un champ est rempli
    if (params.toString()) {
      navigate(`/trajets?${params.toString()}`);
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <FormControl
        type="text"
        placeholder="Ville de départ"
        className="me-2"
        aria-label="Departure"
        value={departure}
        onChange={(e) => setDeparture(e.target.value)}
      />
      <FormControl
        type="text"
        placeholder="Ville d'arrivée"
        className="me-2"
        aria-label="Arrival"
        value={arrival}
        onChange={(e) => setArrival(e.target.value)}
      />
      <FormControl
        type="date"
        className="me-2"
        aria-label="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button variant="outline-light" type="submit">
        <FaSearch />
      </Button>
    </Form>
  );
}

export default SearchBar;