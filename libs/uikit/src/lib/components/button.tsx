import { VARIANTS } from '../constants/variants';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof VARIANTS;
};

const defaultStyled = 'rounded-lg py-2 px-5 dark:bg-lightblue-100'

const Buttons = {
  [VARIANTS.primary]: defaultStyled,
  [VARIANTS.secondary]: `rounded-lg dark:text-white py-2 px-5 dark:bg-black-300 ${defaultStyled}`,
  [VARIANTS.outline]: `dark:text-white border bg-transparent dark:bg-transparent ${defaultStyled}`,
};

export const Button = (props: ButtonProps) => {
  const styles = Buttons[props.variant || VARIANTS.primary];

  return <button className={styles} {...props} />;
};
