import React from 'react';
import pt from 'prop-types';
import clsx from 'clsx';

const UIButton = ({ children, className = '', type = 'submit', href = '', to = '' }) => {
  const Button = (href && 'a') || 'button';

  return (
    <Button
      {...{
        className: clsx(
          className,
          'bg-primary focus:outline-none focus:shadow-outline rounded py-3 px-4 appearance-none leading-normal',
          'hover:bg-primary-darker text-white hover:text-white no-underline',
        ),
        ...to && { to },
        ...href && { href },
        ...!href && !to ? { type } : {},
      }}
    >
      {children}
    </Button>
  );
};

UIButton.propTypes = {
  children: pt.node.isRequired,
  className: pt.string,
  type: pt.string,
  href: pt.string,
  to: pt.string,
};

export default UIButton;