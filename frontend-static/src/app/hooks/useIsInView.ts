"use client";

import { RefObject, useEffect, useState } from "react";

export default function useIsInView<T>(ref: RefObject<T>) {
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    });

    observer.observe(ref.current as HTMLElement);

    return () => {
      observer.disconnect();
    };
  }, []);
  return isInView;
}
