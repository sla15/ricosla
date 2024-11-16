import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

interface PreviewPanelProps {
  previewUrl?: string;
  onDownload?: () => void;
}

export function PreviewPanel({ previewUrl, onDownload }: PreviewPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="border-b border-gray-200 p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Preview</h2>
        <div className="flex space-x-2">
          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Open
            </a>
          )}
          {onDownload && (
            <button
              onClick={onDownload}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors"
            >
              <Download className="w-4 h-4 mr-1" />
              Download
            </button>
          )}
        </div>
      </div>
      <div className="aspect-[16/9] bg-gray-50 flex items-center justify-center">
        {previewUrl ? (
          <iframe
            src={previewUrl}
            className="w-full h-full border-0"
            title="Website Preview"
          />
        ) : (
          <div className="text-gray-400 text-sm">
            Your preview will appear here
          </div>
        )}
      </div>
    </div>
  );
}