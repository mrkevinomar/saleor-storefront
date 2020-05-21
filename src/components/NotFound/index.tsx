import "./scss/index.scss";

import * as React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../core/config";
import Button from "../Button";

interface NotFoundProps {
  message?: string;
}

const NotFound: React.FC<NotFoundProps> = () => (
  <div className="not-found-page">
    <h2 className="not-found-page__header">404</h2>
    <div className="not-found-page__ruler" />
    <div className="not-found-page__message">
      <p>Parece que no podemos encontrar la página que está buscando. </p>
      <p>Puede que hayas escrito mal la dirección o que la página se haya movido. </p>
      <p>Lamentamos el error y esperamos que tenga un buen día.</p>
    </div>
    <div className="not-found-page__button">
      <Link to={BASE_URL}>
        <Button secondary>Volver a Inicio</Button>
      </Link>
    </div>
  </div>
);

export default NotFound;
