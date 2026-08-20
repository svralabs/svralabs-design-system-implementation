import React from 'react';

export default function WebView({ src, title }) {
  return (
    <div className="w-full h-full border-2 border-on-background rounded-lg neubrutal-shadow-active overflow-hidden">
      <iframe
        src={src}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
