"use client";
import { useModalStore } from "../store/modalStore";
import { motion, AnimatePresence } from "framer-motion";
import AuditForm from "../audit-page/AuditForm";

export default function GlobalModal() {
  const { isOpen, modalType, closeModal } = useModalStore();

  if (!isOpen) return null;

  const renderContent = () => {
    switch (modalType) {
      case "audit":
        return <AuditForm />;

      case "contact":
        return <div>Contact Form Here</div>;

      case "pricing":
        return <div>Pricing Form Here</div>;

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* MODAL */}
          <motion.div
            className="
          relative w-full 
          sm:max-w-5xl 
          bg-white 
          rounded-t-3xl sm:rounded-3xl 
          shadow-2xl 
          overflow-hidden
          max-h-[90vh] sm:max-h-[85vh]
          flex flex-col
        "
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            {/* HEADER / CLOSE AREA */}
            <div className="sticky top-0 z-10 flex justify-end p-3 sm:p-4 bg-white/80 backdrop-blur border-b border-gray-100">
              <button
                onClick={closeModal}
                className="
              w-9 h-9 sm:w-10 sm:h-10 
              rounded-full 
              bg-gray-100 hover:bg-gray-200 
              flex items-center justify-center
              active:scale-95 transition
            "
              >
                ✕
              </button>
            </div>

            {/* CONTENT AREA (IMPORTANT FIX) */}
            <div className="overflow-y-auto flex-1">{renderContent()}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
