import { useEffect } from "react";

export function ApolloScript() {
  useEffect(() => {
    const randomCacheBuster = Math.random().toString(36).substring(7);
    const script = document.createElement("script");

    script.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${randomCacheBuster}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.trackingFunctions?.onLoad) {
        window.trackingFunctions.onLoad({
          appId: "682b2d9e6ba3e1001d9fa8d1",
        });
      } else {
        console.warn("Apollo tracking functions not available yet.");
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
