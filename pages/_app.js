import '../styles/globals.css';

import "tailwindcss/tailwind.css";
import Router from "next/router";

//you can add here a page loading bar

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
