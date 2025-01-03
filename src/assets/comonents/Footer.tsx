// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white py-3">
      <meta
        name="description"
        content="Få hjelp med skatt som student. StudentSkatt gir deg råd om fradrag og tips for studenter som vil spare skatt."
      />
      <meta name="keywords" content="student skatt, skatt for studenter, skatt student, student økonomi" />
      <div className="container text-center">
        <p className="mb-0">
          <small>
            Informasjonen på denne nettsiden er kun ment som veiledning og er ikke ment å erstatte profesjonell skatterådgivning. Selv om jeg tilstreber å gi nøyaktig og oppdatert informasjon, kan jeg ikke garantere at informasjonen på nettsiden er fullstendig, korrekt eller tilstrekkelig for å oppfylle dine spesifikke skatteforpliktelser. Skatteetaten har myndighet til å vurdere og gjennomskjære skatteforhold, og jeg fraskriver meg alt ansvar i tilfelle en gjennomgang av Skatteetaten eller andre relevante myndigheter som fører til endringer i dine skatteforhold, inkludert eventuelle pålegg, straff eller tilleggsskatt.
            <br />
            Bruk av informasjonen på denne nettsiden skjer på egen risiko, og jeg anbefaler at du søker profesjonell skatterådgivning for å sikre at du overholder gjeldende skatteregler.
          </small>
        </p>
        <meta
          name="description"
          content="StudentSkatt hjelper studenter med skatteplanlegging. Lær hvordan du kan dra nytte av fradrag og holde deg innenfor inntektsgrenser."
        />
        <meta name="keywords" content="skatt for studenter, student skatt, fradrag for studenter" />
      </div>
    </footer >
  );
};

export default Footer;
