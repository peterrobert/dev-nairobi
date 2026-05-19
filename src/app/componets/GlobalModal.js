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
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-5xl mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 cursor-pointer right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 z-10"
            >
              ✕
            </button>

            {renderContent()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
