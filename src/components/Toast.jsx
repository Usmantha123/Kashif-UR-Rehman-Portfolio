import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

/**
 * Toast notification for clipboard feedback & form statuses
 */
export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  const bgStyles = {
    success: 'bg-slate-900/95 dark:bg-slate-900/95 text-blue-300 border-blue-500/50 shadow-blue-950/40',
    error: 'bg-slate-900/95 dark:bg-slate-900/95 text-red-300 border-red-500/50 shadow-red-950/40',
    info: 'bg-slate-900/95 dark:bg-slate-900/95 text-slate-200 border-slate-700 shadow-slate-950/40',
  };

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-blue-400 shrink-0" />,
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4.5 py-3 rounded-2xl border backdrop-blur-xl shadow-2xl transition-all duration-300 animate-slide-up ${bgStyles[type] || bgStyles.success}`}
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

