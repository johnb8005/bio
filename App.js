import React from "./_snowpack/pkg/react.js";
import Textarea from "./form/textarea.js";
import * as Bio from "./bio.js";
const compFunc = (typeid) => {
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
const App = () => {
  const [form, setForm] = React.useState({in: ""});
  const [out, setOut] = React.useState(void 0);
  const [typeId, setTypeId] = React.useState(void 0);
  const compute = (typeid) => {
    const func = compFunc(typeid);
    const out2 = func(form.in);
    setOut(out2);
    setTypeId(typeid);
  };
  const renderOptions = () => {
    const options = [
      {typeid: 1, name: "DNA to RNA"},
      {typeid: 2, name: "AntiCodon"},
      {typeid: 3, name: "Codon to AAs"}
    ];
    return /* @__PURE__ */ React.createElement("ul", {
      className: "nav"
    }, options.map((option) => {
      const className = typeId === option.typeid ? "btn-primary" : "btn-secondary";
      return /* @__PURE__ */ React.createElement("li", {
        key: option.typeid,
        className: "nav-item"
      }, /* @__PURE__ */ React.createElement("button", {
        className: `btn btn-sm ${className}`,
        onClick: () => compute(option.typeid)
      }, option.name));
    }));
  };
  const renderResult = () => {
    if (!out || out === "") {
      return null;
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", null, "Result"), /* @__PURE__ */ React.createElement("pre", null, out));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "DNA Manipulations"), /* @__PURE__ */ React.createElement("p", null, "Insert input in following textarea"), /* @__PURE__ */ React.createElement(Textarea, {
    value: form.in,
    onChange: (x) => setForm({in: x})
  }), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-12"
  }, renderOptions())), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-12"
  }, renderResult())));
};
export default App;
