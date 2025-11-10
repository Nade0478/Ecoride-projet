import React from "react";
import Menu from "../../components/Classic/Menu";
import Footer from "../../components/Classic/Footer";

const MentionsLegales = () => {
  return (
    <>
      <Menu />
      <main
        className="mentions-legales"
        style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}
      >
        <h1>Mentions légales</h1>

        <section>
          <h2>Éditeur du site</h2>
          <address>
            Propriétaire du site : EcoRide<br />
            Adresse : 123 Rue de la Mobilité, 75000 Paris, France<br />
            Téléphone : +33 1 23 45 67 89<br />
            Email : contact-ecoride@gmail.com
          </address>
        </section>

        <section>
          <h2>Directeur de publication</h2>
          <p>Jean Dupont, Gérant</p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <address>
            OVH – 2 rue Kellermann, 59100 Roubaix<br />
            Téléphone : 09 72 10 10 07
          </address>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            Le contenu du site EcoRide est protégé par le droit d’auteur. Toute
            reproduction est interdite sans autorisation préalable.
          </p>
        </section>

        <section>
          <h2>Données personnelles</h2>
          <p>
            Les informations collectées sont utilisées uniquement pour faciliter
            la mise en relation des covoitureurs. Conformément au RGPD, vous
            disposez d’un droit d’accès, de rectification et de suppression de
            vos données. Contact : dpo@ecoride.fr
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MentionsLegales;
