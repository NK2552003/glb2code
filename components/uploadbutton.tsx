import React from 'react';

interface UploadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({ label = 'Convert to GLB File', ...props }) => {
  return (
    <button
      type="button"
      className="
        inline-flex items-center justify-center
        px-5 py-3
        font-medium text-sm text-gray-100
        border border-white/20
        rounded-xl
        hover:bg-gray-700 hover:border-gray-600
        focus:outline-none
        transition
        "
      {...props}
    >
      {label}
    </button>
  );
};

export default UploadButton;
