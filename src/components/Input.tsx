import type { HTMLInputTypeAttribute, Ref } from "react";

// you should probably type this correctly

const Input = ({
  name,
  type,
  ref,
  ...rest
}: {
  name: string;
  type: HTMLInputTypeAttribute;
  ref?: Ref<HTMLInputElement>;
}) => {
  return (
    <div className="grid gap-0.5">
      <label htmlFor={name.toLowerCase()} className="text-xs">
        {name}
      </label>
      <input
        type={type}
        id={name.toLowerCase()}
        name={name.toLowerCase()}
        ref={ref}
        autoComplete="none"
        className="bg-input p-2 rounded-md border border-border"
        {...rest}
      />
    </div>
  );
};
export default Input;
