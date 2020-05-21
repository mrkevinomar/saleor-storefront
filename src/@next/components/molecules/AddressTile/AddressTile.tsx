import React from "react";

import { Address, DropdownMenu, IconButton, Tile } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

const defaultShippingAddress = (
  <S.MenuItem>Establecer como dirección de envío predeterminada</S.MenuItem>
);
const defaultBillingAddress = (
  <S.MenuItem>Establecer como dirección de facturación predeterminada</S.MenuItem>
);

export const AddressTile: React.FC<IProps> = ({
  onEdit,
  onRemove,
  setDefault,
  address,
}: IProps) => {
  const header = (
    <S.HeaderContent>
      <DropdownMenu
        type="clickable"
        header={<IconButton name="expand" size={24} />}
        items={[
          {
            content: defaultBillingAddress,
            onClick: () => {
              setDefault("BILLING");
            },
          },
          {
            content: defaultShippingAddress,
            onClick: () => {
              setDefault("SHIPPING");
            },
          },
        ]}
      />

      {address.isDefaultBillingAddress && address.isDefaultShippingAddress
        ? "Dirección por defecto"
        : address.isDefaultShippingAddress
        ? "Dirección de envío por defecto"
        : address.isDefaultBillingAddress
        ? "Dirección de facturación por defecto"
        : null}
    </S.HeaderContent>
  );
  const footer = (
    <S.FooterContent>
      <div>
        <IconButton name="edit" onClick={onEdit} size={22} />
      </div>
      <div>
        <IconButton name="trash" onClick={onRemove} size={19} />
      </div>
    </S.FooterContent>
  );

  const content = <Address {...address} />;
  return (
    <S.Wrapper>
      <Tile footer={footer} header={header}>
        {content}
      </Tile>
    </S.Wrapper>
  );
};
