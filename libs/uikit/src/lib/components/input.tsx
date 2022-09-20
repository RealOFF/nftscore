import tw from 'twin.macro';
import { VARIANTS } from '../constants/variants';

const DefaultInput = tw.input`h-10 rounded-lg p-2.5 text-font-secondary bg-primary`;

const OutlineButton = tw(
  DefaultInput
)`text-font-primary border border-font-secondary`;

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  variant?: keyof typeof VARIANTS;
};

const Inputs = {
  [VARIANTS.primary]: DefaultInput,
  [VARIANTS.secondary]: DefaultInput,
  [VARIANTS.outline]: OutlineButton,
};

export const Input = (props: InputProps) => {
  const InputComponent = Inputs[props.variant || VARIANTS.primary];

  return <InputComponent {...props} />;
};
