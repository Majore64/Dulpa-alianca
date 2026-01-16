
import React from 'react';
import { PageType } from '../App';

interface BreadcrumbItem {
  label: string;
  page?: PageType;
  hash?: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (page: PageType, hash?: string) => void;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate, className = "" }) => {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm py-4 ${className}`}>
      <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
        {/* Home Icon/Link is always first by default or passed in items */}
        <li>
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center text-gray-400 hover:text-finacc-palm transition-colors"
            title="Voltar ao Início"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
          </button>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-4 h-4 text-gray-300 mx-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>
            
            {item.isActive ? (
              <span className="font-semibold text-finacc-evergreen cursor-default sans-serif" aria-current="page">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => item.page && onNavigate(item.page, item.hash)}
                className="text-gray-500 hover:text-finacc-palm transition-colors sans-serif font-light"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
