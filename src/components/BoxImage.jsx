import { useEffect, useRef, useState } from 'react';

export default function BoxImage({
  src,
  alt = '',
  loading,
  priority = false,
  className = '',
  wrapperClassName = '',
  ...imgProps
}) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const resolvedLoading = loading ?? (priority ? 'eager' : 'lazy');

  useEffect(() => {
    setLoaded(false);
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  const markLoaded = () => setLoaded(true);

  return (
    <div
      className={`box-image${loaded ? ' box-image--loaded' : ''}${
        priority ? ' box-image--priority' : ''
      }${wrapperClassName ? ` ${wrapperClassName}` : ''}`}
    >
      {!priority ? <span className="box-image__shimmer" aria-hidden="true" /> : null}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={resolvedLoading}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        className={className || undefined}
        onLoad={markLoaded}
        onError={markLoaded}
        {...imgProps}
      />
    </div>
  );
}
