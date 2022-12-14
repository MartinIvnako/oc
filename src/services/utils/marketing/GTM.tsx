import React from 'react'
import Script from "next/script";
import { isBoolean } from 'util';

type Props = {}

const GTM = (props: Props) => {

  return (
      <>
          {process.env.NEXT_PUBLIC_GTM ? (
              <Script
                  id='GTM'
                  strategy='afterInteractive'
                  dangerouslySetInnerHTML={{
                      __html: `
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM}');  `,
                  }}
              />
          ) : null}
      </>
  );
}

export default GTM