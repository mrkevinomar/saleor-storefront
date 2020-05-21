import React from "react";

const ForgottenPassword: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => (
  <>
    <div className="login__content__password-reminder">
      <p>
        ¿Olvidaste tu contraseña?&nbsp;
        <span className="u-link" onClick={onClick}>
          Click aquí
        </span>
      </p>
    </div>
  </>
);

export default ForgottenPassword;
