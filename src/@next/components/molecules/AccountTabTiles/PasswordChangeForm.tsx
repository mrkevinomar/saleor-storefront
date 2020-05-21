import { Formik } from "formik";
import React from "react";
import { TextField } from "../TextField";

import { Button, ButtonLink } from "@components/atoms";
import { IFormError } from "@types";
import * as S from "./styles";

export const PasswordChangeForm: React.FC<{
  handleSubmit: (data: any) => void;
  hide: () => void;
  error?: IFormError[];
}> = ({ handleSubmit, hide, error }) => {
  const fieldErrors: any = {};

  if (error) {
    error.map(({ field, message }: { field?: string; message?: string }) => {
      if (field && message) {
        fieldErrors[field] = fieldErrors[field]
          ? [...fieldErrors[field], { message }]
          : [{ message }];
      }
    });
  }
  return (
    <>
      <Formik
        initialValues={{
          confirmPassword: "",
          newPassword: "",
          oldPassword: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit({
            newPassword: values.newPassword,
            oldPassword: values.oldPassword,
          });
          setSubmitting(false);
        }}
        validateOnChange={false}
        validate={values => {
          const errors: {
            oldPassword?: string;
            confirmPassword?: string;
            newPassword?: string;
          } = {};
          if (!values.confirmPassword) {
            errors.confirmPassword = "Requerido";
          }
          if (!values.newPassword) {
            errors.newPassword = "Requerido";
          }
          if (!values.oldPassword) {
            errors.oldPassword = "Requerido";
          }
          if (values.confirmPassword !== values.newPassword) {
            errors.confirmPassword = "Las contraseñas no coinciden";
            errors.newPassword = "Las contraseñas no coinciden";
          }
          return errors;
        }}
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
          isSubmitting,
          isValid,
        }) => {
          return (
            <S.Form onSubmit={handleSubmit}>
              <TextField
                name="oldPassword"
                label="Contraseña Anterior"
                type="password"
                value={values.oldPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                errors={
                  touched.oldPassword && errors.oldPassword
                    ? [{ message: errors.oldPassword }]
                    : undefined || fieldErrors!.oldPassword
                }
              />
              <TextField
                name="newPassword"
                label="Nueva Contraseña"
                type="password"
                value={values.newPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                errors={
                  touched.newPassword && errors.newPassword
                    ? [{ message: errors.newPassword }]
                    : undefined || fieldErrors!.newPassword
                }
              />
              <TextField
                name="confirmPassword"
                label="Confirmar Contraseña"
                type="password"
                value={values.confirmPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                errors={
                  touched.confirmPassword && errors.confirmPassword
                    ? [{ message: errors.confirmPassword }]
                    : undefined || fieldErrors!.confirmPassword
                }
              />
              <S.FormButtons>
                <ButtonLink type="button" color="secondary" onClick={hide}>
                  Cancelar
                </ButtonLink>
                <Button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  size="sm"
                >
                  Guardar
                </Button>
              </S.FormButtons>
            </S.Form>
          );
        }}
      </Formik>
    </>
  );
};
