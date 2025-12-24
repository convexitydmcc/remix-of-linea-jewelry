import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appName: "Test PWA App",
  appId: "com.convexitydmcc.testpwa",
  webDir: "dist",
  server: {
    url: "https://remix-of-linea-jewelry.vercel.app/",
    cleartext: false,
  },
};

export default config;

