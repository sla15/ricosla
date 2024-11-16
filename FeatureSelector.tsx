import React from 'react';
import { Check } from 'lucide-react';

interface Feature {
  id: string;
  name: string;
  description: string;
}

interface FeatureSelectorProps {
  features: Feature[];
  selectedFeatures: string[];
  onToggleFeature: (featureId: string) => void;
}

export function FeatureSelector({
  features,
  selectedFeatures,
  onToggleFeature,
}: FeatureSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((feature) => (
        <button
          key={feature.id}
          onClick={() => onToggleFeature(feature.id)}
          className={`p-4 rounded-lg border text-left transition-all ${
            selectedFeatures.includes(feature.id)
              ? 'border-indigo-600 bg-indigo-50'
              : 'border-gray-200 hover:border-indigo-300'
          }`}
        >
          <div className="flex items-start">
            <div
              className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 mt-0.5 ${
                selectedFeatures.includes(feature.id)
                  ? 'border-indigo-600 bg-indigo-600 text-white'
                  : 'border-gray-300'
              }`}
            >
              {selectedFeatures.includes(feature.id) && (
                <Check className="w-3 h-3" />
              )}
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{feature.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}