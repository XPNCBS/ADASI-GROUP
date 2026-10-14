import { useEffect } from "react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `calc(${window.getComputedStyle(body).paddingRight} + ${scrollbarWidth}px)`;
    }
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      {" "}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {" "}
        <button className="modal-close" onClick={onClose}>
          {" "}
          &times;{" "}
        </button>{" "}
        {children}{" "}
      </div>{" "}
    </div>
  );
}
