import { createPortal } from "react-dom";
import { ReactNode, useEffect, useRef } from "react";

interface CustomModalProps {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
}

export default function CustomModal({
  onClose,
  open,
  children,
}: CustomModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node) && onClose) {
        onClose();
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    // Add or remove a class to the body to disable scrolling
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      // Ensure the class is removed when the component unmounts
      document.body.classList.remove("modal-open");
    };
  }, [onClose, open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/75 mx-auto backdrop-blur-sm backdrop-filter z-[100000000]">
      <div ref={modalRef}>
        {children}
      </div>
    </div>,
    document.body
  );
}
