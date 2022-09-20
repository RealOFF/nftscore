import tw from 'twin.macro';

import { VARIANTS } from '../constants/variants';

const DefaultButton = tw.button`rounded-lg py-2 px-5 bg-secondary`;

const OutlineButton = tw(
  DefaultButton
)`text-font-primary border bg-transparent`;

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof VARIANTS;
};

const Buttons = {
  [VARIANTS.primary]: DefaultButton,
  [VARIANTS.secondary]: DefaultButton,
  [VARIANTS.outline]: OutlineButton,
};

export const Button = (props: ButtonProps) => {
  const ButtonComponent = Buttons[props.variant || VARIANTS.primary];

  return <ButtonComponent {...props} />;
};
