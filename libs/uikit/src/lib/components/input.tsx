import { VARIANTS, Variants } from '../constants/variants';

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  variant?: keyof Pick<Variants, 'primary' | 'outline'>;
};

const defaultStyles = 'h-10 placeholder:text-gray-400 rounded-lg p-2.5 dark:bg-black-100'

const Inputs = {
  [VARIANTS.primary]: defaultStyles,
  [VARIANTS.outline]: `dark:text-white border border-gray-200 ${defaultStyles}`,
};

export const Input = (props: InputProps) => {
  const styles = Inputs[props.variant || VARIANTS.primary];

  return <input className={styles} {...props} />;
};
