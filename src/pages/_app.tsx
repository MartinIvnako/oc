import type { AppProps } from "next/app";
import "@/assets/css/global.css";

import Layout from "@/stories/layout";
import GTM from "@/services/utils/marketing/GTM";
import FbPixel from "@/services/utils/marketing/FbPixel";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Layout>
            <GTM />
            <FbPixel />
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;
