import type { MouseEventHandler, ReactNode } from 'react';

type NewsButtonProps = {
  children: ReactNode;
  className: string;
  type?: 'button' | 'submit';
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>;
};

export default function NewsButton({
  children,
  className,
  type = 'button',
  onMouseEnter,
  onMouseLeave
}: NewsButtonProps) {
  return (
    <button
      type={type}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}