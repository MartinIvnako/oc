import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '@/utils/createEmotionCache';
import lightThemeOptions from '@/assets/theme/lightThemeOptions';
import "@/assets/css/global.css";

import Layout from "@/stories/layout";
import GTM from "@/services/utils/marketing/GTM";
import FbPixel from "@/services/utils/marketing/FbPixel";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
