import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// @ts-ignore : I dont have time
import path from "path";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
		alias: {
			// @ts-expect-error: I dont have time
			"@": path.resolve(__dirname, "./src"),
		},
	},
})
