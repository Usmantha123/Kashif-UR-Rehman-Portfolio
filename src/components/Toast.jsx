import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

/**
 * Toast notification for clipboard feedback & form statuses
 */
export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  const bgStyles = {
    success: 'bg-emerald-950/90 text-emerald-200 border-emerald-500/40 shadow-emerald-950/50',
    error: 'bg-red-950/90 text-red-200 border-red-500/40 shadow-red-950/50',
    info: 'bg-slate-900/90 text-slate-200 border-slate-700 shadow-slate-950/50',
  };

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-blue-400 shrink-0" />,
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-xl transition-all duration-300 animate-slide-up ${bgStyles[type] || bgStyles.success}`}
    >
      {icons[type]}
      <p className="text-sm font-medium pr-2">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

Toast.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'info']),
  onClose: PropTypes.func,
};

