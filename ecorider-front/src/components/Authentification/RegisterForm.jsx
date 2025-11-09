import { Form } from "react-router-dom";
import "./RegisterForm.css";
import React from "react";

function RegisterForm() {
  return (
    <div className="register-form-container">
      <h2>Créer un compte</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Entrez votre email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Entrez votre mot de passe"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirmer le mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirmez votre mot de passe"
            required
          />
        </Form.Group>

        <button variant="primary" type="submit">
          S'inscrire
        </button>
      </Form>
    </div>
  );
}

export default RegisterForm;
