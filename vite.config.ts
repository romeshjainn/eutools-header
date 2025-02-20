import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      outputDir: "dist",
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), 
      formats: ["es", "cjs"],
      fileName: (format) => `common-header.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@mui/material", "@mui/icons-material"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MUI",
        },
      },
    },
  },
});
