import React from "react";

import * as S from "./styles";

/**
 * Cart header to use with conjunction of cart rows.
 */
const CartHeader: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Column>Productos</S.Column>
      <S.Column>Precio</S.Column>
      <S.Column>Cantidad</S.Column>
      <S.Column>Precio Total</S.Column>
    </S.Wrapper>
  );
};

export { CartHeader };
