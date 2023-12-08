import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    assetsDir: "images",
    // outDir: "./images",
    rollupOptions: {
      input: {
        app: "./skin.html",
      },
      output: {
        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? "")) {
            return "style.css";
          }
          return `images/${name}`;
        },
      },
    },
  },
});
