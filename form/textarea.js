import React from "../_snowpack/pkg/react.js";
const Textarea = ({
  onChange,
  value
}) => /* @__PURE__ */ React.createElement("textarea", {
  onChange: (x) => onChange(x.target.value),
  value
});
export default Textarea;
