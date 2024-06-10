import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  // this is added cuz our frontend runs at port 5173 while our backend runs at 3000, so if we need to handle any backend route, we need to change port to 3000, so we had made all backend routes to start with /api route then a / followed by specific routes, so whenever /api is present in route, target will be changed to point to port 3000
  plugins: [react()],
});
