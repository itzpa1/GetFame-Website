import React, { useState } from "react";
import { ImageIcon } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackSrc,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  // If error and no fallback, show placeholder
  if (error && !fallbackSrc) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className}`}>
        <div className="text-center text-muted-foreground p-8">
          <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-muted animate-pulse ${className}`}
        >
          <ImageIcon className="w-12 h-12 text-muted-foreground opacity-30" />
        </div>
      )}
      <img
        src={error && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        className={className}
        onError={handleError}
        onLoad={handleLoad}
        style={{ display: loading ? "none" : "block" }}
      />
    </>
  );
}
