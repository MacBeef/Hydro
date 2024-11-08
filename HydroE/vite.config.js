import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base:
    process.env.NODE_ENV === "production"
      ? `/${process.env.VITE_APP_REPO_NAME}/`
      : "/",
  envPrefix: "VITE_",
});
