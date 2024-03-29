import React from "react";
import { TextField as MTextField } from "@material-ui/core";

import { Controller } from "react-hook-form";

const ControlledTextField = React.forwardRef(
  ({ formProps, name, ...otherProps }, ref) => {
    const { control, errors, rules, initialValues } = formProps;
    const isError = errors[name] !== undefined;

    return (
      <Controller
        name={name}
        control={control}
        rules={rules[name]}
        defaultValue={initialValues[name]}
        render={({ onChange, onBlur, value }) => (
          <MTextField
            {...otherProps}
            value={value}
            error={isError}
            variant="outlined"
            inputRef={ref}
            onChange={(v) => {
              onChange(v);
              !!otherProps.onChange && otherProps.onChange(v);
            }}
            onBlur={() => {
              onBlur();
              !!otherProps.onBlur && otherProps.onBlur(value);
            }}
          />
        )}
      />
    );
  }
);

export default ControlledTextField;
