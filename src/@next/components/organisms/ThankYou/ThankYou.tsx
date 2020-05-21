import React from "react";

import { Button } from "@components/atoms";
import { Container } from "@components/templates";

import * as S from "./styles";
import { IProps } from "./types";

/**
 * Thank you page after completing the checkout.
 */
const ThankYou: React.FC<IProps> = ({
  orderNumber,
  continueShopping,
  orderDetails,
}: IProps) => {
  return (
    <Container>
      <S.Wrapper>
        <S.ThankYouHeader>
          Gracias
          <br />
          <span>por tu orden!</span>
        </S.ThankYouHeader>
        <S.Paragraph>
          Tu número de orden es <span>{orderNumber}</span>
        </S.Paragraph>
        <S.Paragraph>
          Te hemos enviado un correo electrónico de confirmación de pedido, y te notificaremos cuando el pedido haya sido enviado..
        </S.Paragraph>
        <S.Buttons>
          <Button onClick={continueShopping} color="secondary" fullWidth={true}>
            CONTINUAR COMPRANDO
          </Button>
          <Button onClick={orderDetails} fullWidth={true}>
            DETALLES DE LA ORDEN
          </Button>
        </S.Buttons>
      </S.Wrapper>
    </Container>
  );
};

export { ThankYou };
