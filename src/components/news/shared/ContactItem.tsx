import type { ReactNode } from "react";

type ContactItemProps = {
  children: ReactNode;
  iconClassName: string;
  className?: string;
};

export default function ContactItem({
  children,
  iconClassName,
  className = "news-contact-item",
}: ContactItemProps) {
  return (
    <div className={className}>
      <div className={`news-contact-icon ${iconClassName}`}></div>
      {children}
    </div>
  );
}
