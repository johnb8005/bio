import React from "react";

const Textarea = ({
  onChange,
  value,
}: {
  onChange: (x: string) => void;
  value?: string;
}) => <textarea onChange={(x) => onChange(x.target.value)} value={value} />;

export default Textarea;
