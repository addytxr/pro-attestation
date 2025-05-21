"use client";

import React from 'react';

// Heading Block Component
const HeadingBlock = ({ block }) => {
  const { level, text } = block;
  
  switch(level) {
    case 1:
      return <h1 className="text-4xl font-bold my-6 text-slate-800">{text}</h1>;
    case 2:
      return <h2 className="text-3xl font-bold my-5 mt-10 text-slate-800">{text}</h2>;
    case 3:
      return <h3 className="text-2xl font-bold my-4 text-slate-800">{text}</h3>;
    case 4:
      return <h4 className="text-xl font-bold my-3 text-slate-800">{text}</h4>;
    default:
      return <h2 className="text-3xl font-bold my-5 text-slate-800">{text}</h2>;
  }
};

// Paragraph Block Component
const ParagraphBlock = ({ block }) => {
  return <p className="my-4 text-slate-700 leading-loose">{block.text}</p>;
};

// List Block Component
const ListBlock = ({ block }) => {
  const { style, items } = block;
  
  if (style === 'ordered') {
    return (
      <ol className="list-decimal pl-6 my-4 space-y-2 marker:text-[#FF6A00]">
        {items.map((item, index) => (
          <li key={index} className="text-slate-700">{item}</li>
        ))}
      </ol>
    );
  }
  
  return (
    <ul className="list-disc pl-6 my-4 space-y-2 marker:text-[#FF6A00]">
      {items.map((item, index) => (
        <li key={index} className="text-slate-700">{item}</li>
      ))}
    </ul>
  );
};

// Table Block Component
const TableBlock = ({ block }) => {
  const { headers, rows } = block;
  
  return (
    <div className="my-6 overflow-x-auto rounded-lg shadow-md border border-slate-300">
      <table className="min-w-full divide-y divide-slate-300">
        <thead className="bg-slate-50">
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index} 
                className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider border-r border-slate-300 last:border-r-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-300">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-100'}>
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 border-r border-slate-300 last:border-r-0"
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
    <div className="my-6 p-4 border border-slate-300 rounded-lg bg-slate-50 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-800">{question}</h3>
      <p className="mt-2 text-slate-700 leading-relaxed">{answer}</p>
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
        <figcaption className="mt-2 text-center text-sm text-slate-600">{caption}</figcaption>
      )}
    </figure>
  );
};

// Quote Block Component
const QuoteBlock = ({ block }) => {
  const { text, author } = block;
  
  return (
    <blockquote className="my-6 border-l-4 border-[#FF6A00] pl-4 py-3 bg-[#FFF5EE] italic rounded-r-md">
      <p className="text-slate-800 text-lg">{text}</p>
      {author && <footer className="mt-2 text-slate-600">— {author}</footer>}
    </blockquote>
  );
};

// Divider Block Component
const DividerBlock = () => {
  return <hr className="my-8 border-t border-slate-300" />;
};

// Block Renderer Component
const BlockRenderer = ({ blocks }) => {
  if (!blocks || !Array.isArray(blocks)) {
    return <p className="text-center text-slate-500 py-8">No content to display</p>;
  }
  
  return (
    <div className="blog-content max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            return <p key={index} className="text-red-500">Unsupported block type: {block.type}</p>;
        }
      })}
    </div>
  );
};

export default BlockRenderer;