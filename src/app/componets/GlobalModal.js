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
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* BACKDROP (soft blue-tinted, not pure black) */}
          <motion.div
            className="absolute inset-0 bg-brand-navy/70 backdrop-blur-md"
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
          max-h-[92vh] sm:max-h-[85vh]
          flex flex-col
          border border-blue-100/30
        "
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.98,
            }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* TOP ACCENT BAR (brand identity reinforcement) */}
            <div className="h-1 w-full bg-linear-to-r from-brand-emerald via-blue-500 to-brand-navy" />

            {/* HEADER */}
            <div className="sticky top-0 z-10 flex justify-between items-center p-3 sm:p-4 bg-white/80 backdrop-blur border-b border-blue-50">
              {/* optional title area (future-proofing) */}
              <div className="text-sm font-medium text-brand-navy">
                {/* can show modal title later */}
              </div>

              <button
                onClick={closeModal}
                className="
              w-9 h-9 sm:w-10 sm:h-10
              rounded-full
              bg-blue-50 hover:bg-blue-100
              text-brand-navy
              flex items-center justify-center
              active:scale-95 transition
              border border-blue-100
            "
              >
                ✕
              </button>
            </div>

            {/* CONTENT */}
            <div className="overflow-y-auto flex-1 bg-linear-to-b from-white to-blue-50/30">
              {renderContent()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
