import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdTest = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-0000000000000000"  // Test Client ID
      data-ad-slot="1234567890"                // Random placeholder slot id
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdTest;
