import React, { useState } from "react";
import styled from "styled-components";
import { FormattedNumber } from "react-intl";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NumbersView = (): JSX.Element => {
  const [number, setNumber] = useState(0);

  const changeNumber = (number: string): void => {
    console.log(number);
    setNumber(parseFloat(number));
  };

  return (
    <Container>
      <input
        type="number"
        onChange={(event) => changeNumber(event.currentTarget.value)}
      />
      <span>
        <FormattedNumber value={number} />
      </span>
      <span>
        <FormattedNumber style="unit" unit="kilobyte" value={number} />
      </span>
      <FormattedNumber style="currency" currency="EUR" value={number} />
      <span>
        <FormattedNumber
          style="currency"
          currency="EUR"
          minimumFractionDigits={5}
          value={number}
        />
      </span>
    </Container>
  );
};
