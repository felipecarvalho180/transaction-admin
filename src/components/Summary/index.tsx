import React from "react";

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { SummaryCard, SummaryContainer } from "./styles";
import { defaultTheme } from "../../styles/theme/default";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={defaultTheme["green-300"]} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={defaultTheme["red-300"]} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={defaultTheme.white} />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
