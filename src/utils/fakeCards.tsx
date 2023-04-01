import { ReactNode } from "react";
import { TupleWith5ReactNodes } from "../types/TupleOfNItems";
import Card from "../components/card/Card";

export function getFakeCards(n: number): readonly ReactNode[] {
  const cards: ReactNode[] = [];
  for (let c = 1; c <= n; c += 1) {
    cards.push(
      <Card
        key={`Test${c}`}
        title1={`Test${c}`}
        title2="Stand for"
        definition={`Test${c} / short explanation or definition`}
        value={`${c}${c}`}
        position={`${c}`}
      />
    );
  }
  return cards.flat();
}

export function get5FakeCards() {
  return getFakeCards(5) as TupleWith5ReactNodes;
}
