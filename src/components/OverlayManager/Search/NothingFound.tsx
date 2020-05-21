import * as React from "react";

export const NothingFound: React.FC<{ search: string }> = ({ search }) => (
  <div className="search__products--not-found">
    <p className="u-lead u-lead--bold u-uppercase">
      Lo sentimos, pero no pudimos encontrar ningún resultado de búsqueda: {search}
    </p>
    <p>
      No te rindas, revisa la ortografía, piensa en algo menos específico y luego usa la barra de búsqueda de arriba.
    </p>
  </div>
);

export default NothingFound;
