export enum Codon {
  A = "GCN",
  R = "CGN", //"MGR"
  N = "AAY",
  D = "GAY",
  C = "TGY",
  Q = "CAR",
  E = "GAR",
  G = "GGN",
  H = "CAY",
  I = "ATM",
  L = "CTN", //"YTR"
  K = "AAR",
  M = "ATG",
  F = "TTY",
  P = "CCN",
  S = "TCN", // "AGY"
  T = "ACN",
  W = "TGG",
  Y = "TAY",
  V = "GTN",
  /* stop codon */
  ")" = "TAA",
  "]" = "TAG",
  "}" = "TGA",
}
export interface AA {
  l: string;
  short: string;
  name: string;
}
