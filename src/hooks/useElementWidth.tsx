import { useState, useEffect, RefObject } from "react";

function useElementWidth(r: RefObject<HTMLDivElement>) {
  const [elementWidth, setElementWidth] = useState<number>(0);

  useEffect(() => {
    function handleElementResize() {
      if (r.current) {
        setElementWidth(r.current.offsetWidth);
      }
    }

    window.addEventListener("resize", handleElementResize);

    handleElementResize();

    return () => window.removeEventListener("resize", handleElementResize);
  }, [r]);

  return elementWidth;
}

export default useElementWidth;
