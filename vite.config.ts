import { defineConfig } from "vite";
import path from "node:path";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src"],
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      lib: path.resolve(__dirname, "./src/lib.ts"),
    },
  },
  // for building
  build: {
    lib: {
      entry: path.resolve(__dirname, "src", "lib.ts"),
      name: "ray-joe",
      formats: ["es", "umd"],
      fileName: (format) => `ray.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
