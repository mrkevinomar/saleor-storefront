import React from "react";

import { ErrorMessage } from "@components/atoms";
import { AddressSummary } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";

/**
 * Review order view showed in checkout.
 */
const CheckoutReview: React.FC<IProps> = ({
  shippingAddress,
  billingAddress,
  shippingMethodName,
  paymentMethodName,
  email,
  errors,
}: IProps) => {
  return (
    <S.Wrapper>
      <S.Title data-cy="checkoutPageSubtitle">REVISAR ORDEN</S.Title>
      <S.Grid>
        <section>
          <S.SubTitle data-cy="checkoutReviewSectionTitle">
          Dirección de envío
          </S.SubTitle>
          <S.Divider />
          <AddressSummary address={shippingAddress} email={email} />
        </section>
        <section>
          <S.SubTitle data-cy="checkoutReviewSectionTitle">
          Dirección de facturación
          </S.SubTitle>
          <S.Divider />
          <AddressSummary address={billingAddress} email={email} />
        </section>
        <section>
          <S.SubTitle data-cy="checkoutReviewSectionTitle">
          Método de envío
          </S.SubTitle>
          <S.Divider />
          <S.TextSummary>{shippingMethodName}</S.TextSummary>
        </section>
        <section>
          <S.SubTitle data-cy="checkoutReviewSectionTitle">
          Método de pago
          </S.SubTitle>
          <S.Divider />
          <S.TextSummary>{paymentMethodName}</S.TextSummary>
        </section>
      </S.Grid>
      <S.ErrorMessages>
        <ErrorMessage errors={errors} />
      </S.ErrorMessages>
    </S.Wrapper>
  );
};

export { CheckoutReview };
