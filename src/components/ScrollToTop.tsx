import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollToTopProps = {
  top?: number;
  behavior?: ScrollBehavior;
};

const ScrollToTop = ({ top = 0, behavior = "auto" }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top, behavior });
    }
  }, [pathname, top, behavior]);

  return null;
};

export default ScrollToTop;
