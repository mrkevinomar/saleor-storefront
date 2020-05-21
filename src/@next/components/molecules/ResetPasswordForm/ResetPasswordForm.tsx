import React from "react";

import { Button } from "@components/atoms";
import { TextField } from "../TextField";

import * as S from "./styles";
import { IProps } from "./types";

export const ResetPasswordForm: React.FC<IProps> = ({
  handleBlur,
  handleChange,
  handleSubmit,
  values,
  tokenError,
  passwordError,
  errors,
}: IProps) => {
  return (
    <S.Wrapper>
      <h3>Restablecer tu contraseña</h3>

      <p>Por favor, proporciona una nueva contraseña</p>
      {tokenError && (
        <S.GeneralError>
          Parece que el toekn para el restablecimiento de la contraseña ya no es válido.
        </S.GeneralError>
      )}
      <form onSubmit={handleSubmit}>
        <S.InputFields>
          <TextField
            label="Contraseña"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            errors={
              errors.password || passwordError
                ? [
                    {
                      field: "password",
                      message: errors.password || passwordError,
                    },
                  ]
                : undefined
            }
          />
          <TextField
            label="Vuelve a escribir la contraseña"
            onBlur={handleBlur}
            name="retypedPassword"
            onChange={handleChange}
            type="password"
            value={values.retypedPassword}
            errors={
              errors.retypedPassword
                ? [
                    {
                      field: "retypedPassword",
                      message: errors.retypedPassword,
                    },
                  ]
                : undefined
            }
          />
        </S.InputFields>

        <Button type="submit" fullWidth={true}>
            ESTABLECER NUEVA CONTRASEÑA
        </Button>
      </form>
    </S.Wrapper>
  );
};
