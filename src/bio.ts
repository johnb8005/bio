import * as T from "./type";
//case class AminoAcid(l: Char, short: String, name: String)

/**
 * @see https://en.wikipedia.org/wiki/Amino_acid
 */
export const aas = [
  ["F", "Phe", "Phenylananine"],
  ["L", "Leu", "Leucine"],
  ["I", "Ile", "Isoleucine"],
  ["M", "Met", "Methionine"],
  ["V", "Val", "Valine"],
  ["S", "Ser", "Serine"],
  ["P", "Pro", "Proline"],
  ["T", "Thr", "Threonine"],
  ["A", "Ala", "Alanine"],
  ["Y", "Tyr", "Tyrosine"],
  ["H", "His", "Histidine"],
  ["Q", "Gln", "Glutamine"],
  ["K", "Lys", "Lysine"],
  ["D", "Asp", "Aspartic Acid"],
  ["E", "Glu", "Glutamic Acid"],
  ["C", "Cys", "Cysteine"],
  ["W", "Trp", "Tryptophane"],
  ["R", "Arg", "Arginine"],
  ["S", "Ser", "Serine"],
  ["G", "Gly", "Glycine"],
  ["U", "Sec", "Selenocysteine"], // 21st aa
  ["O", "Pyr", "Pyrrolysine"], // not in humans
].map((a) => {
  return { l: a[0], short: a[1], name: a[2] };
});

/*
  R => purines abbreviated as R (G|A)
  Y => pyrimidines abbiviated as Y (C|T)
  N => any (A|T|G|C)
  M/H => all but G (A|T|C)
*/
export const aaToCodon = (codon: string) => {
  const hm: { [c: string]: string } = {
    A: "GCN",
    R: "CGN", //"MGR"
    N: "AAY",
    D: "GAY",
    C: "TGY",
    Q: "CAR",
    E: "GAR",
    G: "GGN",
    H: "CAY",
    I: "ATM",
    L: "CTN", //"YTR"
    K: "AAR",
    M: "ATG",
    F: "TTY",
    P: "CCN",
    S: "TCN", // "AGY"
    T: "ACN",
    W: "TGG",
    Y: "TAY",
    V: "GTN",
    /* stop codon */
    ")": "TAA",
    "]": "TAG",
    "}": "TGA",
  };

  const r = hm[codon];

  if (r) {
    return r;
  }

  return null;
};

export const codonToAa = (codon: string) => {
  switch (codon) {
    case "TTT":
    case "TTC":
      return "F";
    case "TTG":
    case "TTA":
    case "CTT":
    case "CTC":
    case "CTA":
    case "CTG":
      return "L";
    case "ATA":
    case "ATT":
    case "ATC":
      return "I";
    case "ATG":
      return "M";
    case "GTT":
    case "GTC":
    case "GTA":
    case "GTG":
      return "V";
    case "TCT":
    case "TCC":
    case "TCA":
    case "TCG":
      return "S";
    case "CCT":
    case "CCC":
    case "CCA":
    case "CCG":
      return "P";
    case "ACT":
    case "ACC":
    case "ACA":
    case "ACG":
      return "T";
    case "GCT":
    case "GCC":
    case "GCA":
    case "GCG":
      return "A";
    case "TAT":
    case "TAC":
      return "Y";
    case "TAA":
      return ")";
    case "TAG":
      return "]";
    case "CAT":
    case "CAC":
      return "H";
    case "CAA":
    case "CAG":
      return "Q";
    case "AAT":
    case "AAC":
      return "N";
    case "AAA":
    case "AAG":
      return "K";
    case "GAT":
    case "GAC":
      return "D";
    case "GAA":
    case "GAG":
      return "E";
    case "TGT":
    case "TGC":
      return "C";
    case "TGA":
      return "}";
    case "TGG":
      return "W";
    case "CGT":
    case "CGC":
    case "CGA":
    case "CGG":
      return "R";
    case "AGT":
    case "AGC":
      return "S";
    case "AGA":
    case "AGG":
      return "R";
    case "GGT":
    case "GGC":
    case "GGA":
    case "GGG":
      return "G";
      break;
    default:
      return null;
  }
};

export const anticodon = (str: string) => {
  return Array.from(str)
    .map((a) => {
      switch (a) {
        case "A":
          return "T";
        case "T":
          return "A";
        case "G":
          return "C";
        case "C":
          return "G";
        case "U":
          return "A";
          break;
        default:
          return null;
      }
    })
    .join("");
};

export const dnaToRna = (str: string) => {
  return Array.from(str)
    .map((a) => {
      switch (a) {
        case "A":
        case "G":
        case "C":
          return a;
        case "T":
          return "U";
          break;
        default:
          return null;
      }
    })
    .join("");
};

export const codons = (str: string) => {
  // divide the string in subset strings of length 3
  const codons = str.match(/.{1,3}/g);

  if (!codons) {
    return "";
  }

  return codons.map(codonToAa).join("");
};
