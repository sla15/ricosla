import React, { useState } from 'react';
import { Header } from './components/Header';
import { AIInput } from './components/AIInput';
import { PreviewPanel } from './components/PreviewPanel';
import { FeatureSelector } from './components/FeatureSelector';
import { Sparkles } from 'lucide-react';

const features = [
  {
    id: 'responsive',
    name: 'Responsive Design',
    description: 'Automatically adapts to any screen size',
  },
  {
    id: 'animations',
    name: 'Animations',
    description: 'Smooth transitions and interactive elements',
  },
  {
    id: 'seo',
    name: 'SEO Optimized',
    description: 'Built-in best practices for search engines',
  },
  {
    id: 'analytics',
    name: 'Analytics Ready',
    description: 'Track visitor behavior and engagement',
  },
  {
    id: 'forms',
    name: 'Contact Forms',
    description: 'Built-in contact and subscription forms',
  },
  {
    id: 'social',
    name: 'Social Integration',
    description: 'Connect with your social media profiles',
  },
];

function App() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['responsive', 'seo']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>();

  const handleGenerate = async (prompt: string) => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setPreviewUrl('https://example.com');
    setIsGenerating(false);
  };

  const handleDownload = () => {
    // Implement download functionality
    console.log('Downloading...');
  };

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((id) => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-indigo-600 mr-3" />
            AI Website Generator
          </h1>
          <p className="text-xl text-gray-600">
            Transform your ideas into beautiful, functional websites in seconds
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Select Features
            </h2>
            <FeatureSelector
              features={features}
              selectedFeatures={selectedFeatures}
              onToggleFeature={toggleFeature}
            />
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Describe Your Website
            </h2>
            <AIInput onSubmit={handleGenerate} isLoading={isGenerating} />
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Preview & Download
            </h2>
            <PreviewPanel
              previewUrl={previewUrl}
              onDownload={handleDownload}
            />
          </section>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Website Generator. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;