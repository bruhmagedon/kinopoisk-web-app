import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    return {
        plugins: [react(), svgrPlugin(), tsconfigPaths()],
        build: {
            outDir: 'dist',
            sourcemap: mode !== 'production',
            chunkSizeWarningLimit: 1500
        },
        optimizeDeps: {
            include: ['react', 'react-dom']
        },
        server: {
            host: mode === 'development',
            port: 3000,
            cors: true,
            open: false
        },
        preview: {
            port: 3000
        },
        resolve: {
            alias: {
                '@app': path.resolve(__dirname, './src/app'),
                '@styles': path.resolve(__dirname, './src/app/styles'),
                '@pages': path.resolve(__dirname, './src/pages'),
                '@features': path.resolve(__dirname, './src/features'),
                '@hooks': path.resolve(__dirname, './src/shared/hooks'),
                '@ui': path.resolve(__dirname, './src/shared/ui/kit')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@styles/helpers" as *;`
                }
            }
        }
    };
});
