import tw from 'twin.macro';

import { VARIANTS } from '../constants/variants';

const DefaultButton = tw.button`rounded-lg py-2 px-5 dark:bg-lightblue-100`;

const SecondaryButton = tw.button`rounded-lg dark:text-white py-2 px-5 dark:bg-black-300`;

const OutlineButton = tw(
  DefaultButton
)`dark:text-white border bg-transparent dark:bg-transparent`;

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof VARIANTS;
};

const Buttons = {
  [VARIANTS.primary]: DefaultButton,
  [VARIANTS.secondary]: SecondaryButton,
  [VARIANTS.outline]: OutlineButton,
};

export const Button = (props: ButtonProps) => {
  const ButtonComponent = Buttons[props.variant || VARIANTS.primary];

  return <ButtonComponent {...props} />;
};
