import { useEffect, useRef, useState } from 'react';

export default function BoxImage({
  src,
  alt = '',
  loading = 'lazy',
  className = '',
  wrapperClassName = '',
  ...imgProps
}) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

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
        wrapperClassName ? ` ${wrapperClassName}` : ''
      }`}
    >
      <span className="box-image__shimmer" aria-hidden="true" />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        className={className || undefined}
        onLoad={markLoaded}
        onError={markLoaded}
        {...imgProps}
      />
    </div>
  );
}
