import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: { preset: "netlifyEdge", compatibilityDate: "latest" },
});
