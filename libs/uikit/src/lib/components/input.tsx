import tw from 'twin.macro';
import { VARIANTS, Variants } from '../constants/variants';

const DefaultInput = tw.input`h-10 placeholder:text-gray-400 rounded-lg p-2.5 dark:bg-black-100`;
const OutlineInput = tw(DefaultInput)`dark:text-white border border-gray-200`;

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  variant?: keyof Pick<Variants, 'primary' | 'outline'>;
};

const Inputs = {
  [VARIANTS.primary]: DefaultInput,
  [VARIANTS.outline]: OutlineInput,
};

export const Input = (props: InputProps) => {
  const InputComponent = Inputs[props.variant || VARIANTS.primary];

  return <InputComponent {...props} />;
};
