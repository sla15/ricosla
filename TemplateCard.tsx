import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export function TemplateCard({ title, description, image, onClick }: TemplateCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-200">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button
          onClick={onClick}
          className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          Generate template
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
}