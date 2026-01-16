
import React from 'react';

export const Breadcrumbs: React.FC = () => {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <ol className="flex list-none p-0 text-sm text-gray-500">
          <li className="flex items-center">
            <a href="#inicio" className="hover:text-finacc-evergreen transition-colors flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
              Home
            </a>
            <svg className="w-3 h-3 mx-3" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
          </li>
          <li className="flex items-center text-finacc-evergreen font-semibold">
            <span>Serviços de Contabilidade</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
