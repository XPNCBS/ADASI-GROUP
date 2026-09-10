import type { ReactNode } from "react";

type ContactItemProps = {
  children: ReactNode;
  iconClassName: string;
  icon?: ReactNode;
  className?: string;
};

export default function ContactItem({
  children,
  iconClassName,
  icon,
  className = "news-contact-item",
}: ContactItemProps) {
  return (
    <div className={className}>
      <div className={`news-contact-icon ${iconClassName}`}>{icon}</div>
      {children}
    </div>
  );
}
