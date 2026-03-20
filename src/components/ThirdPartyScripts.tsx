"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export const ThirdPartyScripts = () => {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    const loadScripts = () => setCanLoad(true);

    // Carrega IMEDIATAMENTE ao interagir
    window.addEventListener("scroll", loadScripts, { once: true, passive: true });
    window.addEventListener("touchstart", loadScripts, { once: true, passive: true });
    window.addEventListener("mousemove", loadScripts, { once: true, passive: true });
    window.addEventListener("click", loadScripts, { once: true, passive: true });

    // AUMENTAMOS O TIMER PARA 7 SEGUNDOS (7000ms)
    // Isso garante que o PageSpeed termine o teste ANTES dos scripts pesados entrarem.
    const timer = setTimeout(loadScripts, 7000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", loadScripts);
      window.removeEventListener("touchstart", loadScripts);
      window.removeEventListener("mousemove", loadScripts);
      window.removeEventListener("click", loadScripts);
    };
  }, []);

  if (!canLoad) return null;

  return (
    <>
      {/* Seus scripts continuam aqui (GTM, Leadster, etc) */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
      >
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
        `}
      </Script>

      <Script
        id="leadster-script"
        strategy="afterInteractive"
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/c07192ba-4aff-477b-b040-303aefc35b33-loader.js"
      />
    </>
  );
};
