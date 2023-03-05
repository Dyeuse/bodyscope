import { ReactNode } from "react";

export type TupleOfNItems<
  N extends number,
  I,
  T extends I[] = []
> = T["length"] extends N ? T : TupleOfNItems<N, I, [...T, I]>;

export type TupleWith5ReactNodes = TupleOfNItems<5, ReactNode>;
