"use client";

import React from 'react';

// Heading Block Component
const HeadingBlock = ({ block }) => {
  const { level, text } = block;
  
  switch(level) {
    case 1:
      return <h1 className="text-4xl font-bold my-6">{text}</h1>;
    case 2:
      return <h2 className="text-3xl font-bold my-5">{text}</h2>;
    case 3:
      return <h3 className="text-2xl font-bold my-4">{text}</h3>;
    case 4:
      return <h4 className="text-xl font-bold my-3">{text}</h4>;
    default:
      return <h2 className="text-3xl font-bold my-5">{text}</h2>;
  }
};

// Paragraph Block Component
const ParagraphBlock = ({ block }) => {
  return <p className="my-4 text-gray-700 leading-relaxed">{block.text}</p>;
};

// List Block Component
const ListBlock = ({ block }) => {
  const { style, items } = block;
  
  if (style === 'ordered') {
    return (
      <ol className="list-decimal pl-6 my-4 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ol>
    );
  }
  
  return (
    <ul className="list-disc pl-6 my-4 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">{item}</li>
      ))}
    </ul>
  );
};

// Table Block Component
const TableBlock = ({ block }) => {
  const { headers, rows } = block;
  
  return (
    <div className="my-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300 border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r border-gray-300 last:border-r-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-300 last:border-r-0"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// FAQ Block Component
const FAQBlock = ({ block }) => {
  const { question, answer } = block;
  
  return (
    <div className="my-6 p-4 border border-gray-200 rounded-lg">
      <h3 className="text-xl font-semibold text-gray-800">{question}</h3>
      <p className="mt-2 text-gray-700">{answer}</p>
    </div>
  );
};

// Image Block Component
const ImageBlock = ({ block }) => {
  const { src, alt, caption } = block;
  
  return (
    <figure className="my-6">
      <img 
        src={src} 
        alt={alt || caption || 'Blog image'} 
        className="w-full h-auto rounded-lg shadow-md"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-600">{caption}</figcaption>
      )}
    </figure>
  );
};

// Quote Block Component
const QuoteBlock = ({ block }) => {
  const { text, author } = block;
  
  return (
    <blockquote className="my-6 border-l-4 border-[#FF6A00] pl-4 py-2 bg-orange-50 italic">
      <p className="text-gray-800">{text}</p>
      {author && <footer className="mt-2 text-gray-600">— {author}</footer>}
    </blockquote>
  );
};

// Divider Block Component
const DividerBlock = () => {
  return <hr className="my-8 border-t border-gray-300" />;
};

// Block Renderer Component
const BlockRenderer = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks)) {
    return <p>No content to display</p>;
  }
  
  return (
    <div className="blog-content">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return <HeadingBlock key={index} block={block} />;
          case 'paragraph':
            return <ParagraphBlock key={index} block={block} />;
          case 'list':
            return <ListBlock key={index} block={block} />;
          case 'table':
            return <TableBlock key={index} block={block} />;
          case 'faq':
            return <FAQBlock key={index} block={block} />;
          case 'image':
            return <ImageBlock key={index} block={block} />;
          case 'quote':
            return <QuoteBlock key={index} block={block} />;
          case 'divider':
            return <DividerBlock key={index} />;
          default:
            return <p key={index}>Unsupported block type: {block.type}</p>;
        }
      })}
    </div>
  );
};

export default BlockRenderer; 