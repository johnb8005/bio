import React from "react";

import Textarea from "./form/textarea";

import * as Bio from "./bio";

const compFunc = (typeid: TypeId) => {
  switch (typeid) {
    case 1:
      return Bio.dnaToRna;
    case 2:
      return Bio.anticodon;
    case 3:
      return Bio.codons;
      break;
    default:
      return Bio.dnaToRna;
  }
};

type TypeId = 1 | 2 | 3 | 4;

const App = () => {
  const [form, setForm] = React.useState({ in: "" });
  const [out, setOut] = React.useState<string | undefined>(undefined);
  const [typeId, setTypeId] = React.useState<TypeId | undefined>(undefined);

  const compute = (typeid: TypeId) => {
    const func = compFunc(typeid);
    const out = func(form.in);

    setOut(out);
    setTypeId(typeid);
  };

  const renderOptions = () => {
    const options: { typeid: TypeId; name: string }[] = [
      { typeid: 1, name: "DNA to RNA" },
      { typeid: 2, name: "AntiCodon" },
      { typeid: 3, name: "Codon to AAs" },
    ];

    return (
      <ul className="nav">
        {options.map((option) => {
          const className =
            typeId === option.typeid ? "btn-primary" : "btn-secondary";
          return (
            <li key={option.typeid} className="nav-item">
              <button
                className={`btn btn-sm ${className}`}
                onClick={() => compute(option.typeid)}
              >
                {option.name}
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderResult = () => {
    if (!out || out === "") {
      return null;
    }

    return (
      <React.Fragment>
        <h3>Result</h3>
        <pre>{out}</pre>
      </React.Fragment>
    );
  };

  return (
    <div className="container">
      <h1>DNA Manipulations</h1>

      <p>Insert input in following textarea</p>

      <Textarea value={form.in} onChange={(x) => setForm({ in: x })} />

      <div className="row">
        <div className="col-md-12">{renderOptions()}</div>
      </div>

      <div className="row">
        <div className="col-md-12">{renderResult()}</div>
      </div>
    </div>
  );
};

export default App;
