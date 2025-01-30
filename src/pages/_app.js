import "@/app/globals.css";
import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "next-themes";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute={"class"}>
        <CustomCursor />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
