import React, { FC } from 'react';

const InputField: FC<{ value: string }> = ({ value }) => {
  return <input value={value} />;
};

export { InputField };
