'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaExpand } from 'react-icons/fa';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl: string;
}

export default function CVModal({ isOpen, onClose, cvUrl }: CVModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl h-[85vh] bg-tech-gray rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-neon-cyan/10 rounded-lg">
                  <FaExpand className="text-neon-cyan" />
                </div>
                <h3 className="text-white font-bold font-mono">Curriculum Vitae</h3>
              </div>
              
              <div className="flex items-center gap-4">
                <a
                  href={cvUrl}
                  download="Satish_Sahu_CV.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-neon-cyan text-black font-bold rounded-lg hover:bg-neon-blue transition-all text-sm shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                >
                  <FaDownload />
                  <span className="hidden sm:inline">Download</span>
                </a>
                
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            {/* PDF Viewer Body */}
            <div className="flex-1 bg-white/5 relative overflow-hidden">
               {/* Embed PDF */}
               <iframe
                 src={`${cvUrl}#toolbar=0`}
                 title="CV Preview"
                 className="w-full h-full border-0"
               />
               
               {/* Fallback for browsers that don't support iframes or embedded PDFs well */}
               <div className="absolute inset-0 -z-10 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <p className="mb-4">PDF Preview is not available in your browser.</p>
                    <a
                      href={cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-cyan hover:underline"
                    >
                      Open PDF in new tab
                    </a>
                  </div>
               </div>
            </div>
            
            {/* Footer / Info */}
            <div className="p-4 bg-black/40 border-t border-white/10 text-center">
                <p className="text-xs text-gray-500 font-mono">
                  Reviewing Satish Sahu's Portfolio Documentation • 2024
                </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
