import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    plugins: [
      {
        name: 'html-utf8-charset',
        configureServer(server) {
          server.middlewares.use((_req, res, next) => {
            const originalSetHeader = res.setHeader.bind(res);
            res.setHeader = (name, value) => {
              if (
                String(name).toLowerCase() === 'content-type' &&
                typeof value === 'string' &&
                value === 'text/html'
              ) {
                return originalSetHeader(name, 'text/html; charset=utf-8');
              }
              return originalSetHeader(name, value);
            };
            next();
          });
        },
      },
    ],
  },
});
