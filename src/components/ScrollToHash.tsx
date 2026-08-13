import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Keeps cross-page anchor links working: when a route carries a hash
 * (e.g. `/#contact`) the target section is scrolled into view once the new
 * page has painted. Plain route changes scroll back to the top.
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    let frame = 0;
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      // section may still be mounting (data fetching / lazy images)
      if (attempts < 40) {
        attempts += 1;
        frame = requestAnimationFrame(tryScroll);
      }
    };

    frame = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
