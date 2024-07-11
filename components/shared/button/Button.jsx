import React from 'react';

/**
 * Button Component
 *
 * A reusable button component with customizable styles and click event handling.
 *
 * @param {Object} props - The component's props.
 * @param {string} [props.style='primary'] - The style of the button.
 * @param {string} [props.className=''] - Additional CSS classes for the button.
 * @param {ReactNode} [props.children=''] - The content to be displayed inside the button.
 * @param {function} [props.onClick=''] - The onClick event handler for the button.
 *
 * @returns {ReactNode} The rendered button component.
 */

const styles = {
  primary: 'bg-primary text-white py-3 px-4 text-base',
  secondary: 'bg-white text-primary2 py-2 px-4 font-medium',
  small: 'bg-primary2 text-white py-1 px-4 font-normal',
  outline: 'border border-borderColor rounded-lg py-2 px-4 text-base text-primary2',
  hover: "w-full bg-primary2 hover:bg-primary py-4 text-base text-white font-medium leading-6 shadow-[0_10px_20px_0_rgba(0,0,0,0.1)]"
};

const Button = ({
  style = 'primary', // Default style to 'primary'
  className = '',
  type = 'button',
  name = '',
  Icon,
  before,
  after,
  onClick,
  iconClassName
}) => {

  return (
    <button
      className={`${styles[style]} flex items-center justify-center gap-3 ${className} rounded-lg`}
      onClick={onClick} type={type}
    >
      {before && Icon && <Icon className={`${iconClassName}`} />}
      {name}
      {after && Icon && <Icon className={`${iconClassName}`} />}
    </button>
  );
};

export default Button;


/*
user guideline:
<Button name='test icon ' iconClassName="w-5 h-5 stroke-white" Icon={ArrowDown} after />
*/