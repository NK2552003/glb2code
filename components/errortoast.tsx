import { useState } from "react";
import { AlertCircle, X } from "lucide-react";

export default function ErrorToast({ message }: { message: string }) {
  const [show, setShow] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setShow(false), 300); // matches animation duration
  };

  if (!show) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 ${
        closing ? "animate-slideOut" : "animate-slideIn"
      }`}
    >
      <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-600/10 px-4 py-2 shadow-lg backdrop-blur-sm">
        <AlertCircle className="h-4 w-4 text-red-400" />
        <span className="text-sm text-white">{message}</span>
        <button
          onClick={handleClose}
          className="ml-2 p-1 rounded-full hover:bg-red-500/50 transition"
        >
          <X className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
}
