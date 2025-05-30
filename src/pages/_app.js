import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { ApolloScript } from "@/components/ApolloScript";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <ApolloScript />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
