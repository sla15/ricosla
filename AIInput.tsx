import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Wand2 } from 'lucide-react';

interface AIInputProps {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
}

export function AIInput({ onSubmit, isLoading = false }: AIInputProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onSubmit(prompt);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <TextareaAutosize
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your dream website... (e.g., 'Create a modern portfolio website with a dark theme, showcasing my photography work')"
          className="w-full min-h-[100px] p-4 pr-24 text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          maxRows={5}
        />
        <button
          type="submit"
          disabled={!prompt.trim() || isLoading}
          className={`absolute right-3 bottom-3 inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all
            ${prompt.trim() && !isLoading
              ? 'text-white bg-indigo-600 hover:bg-indigo-700'
              : 'text-gray-400 bg-gray-100'
            }`}
        >
          <Wand2 className="w-4 h-4 mr-2" />
          Generate
        </button>
      </div>
    </form>
  );
}