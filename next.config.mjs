const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Redirección de WWW a non-WWW (o viceversa según prefieras)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.justiexpress.com',
          },
        ],
        destination: 'https://justiexpress.com/:path*',
        permanent: true,
      },
      
      // Redirección de index.html y index.php
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      
      // Redirección para cualquier archivo .html o .php
      {
        source: '/:path(.+)\\.html',
        destination: '/:path',
        permanent: true,
      },
      {
        source: '/:path(.+)\\.php',
        destination: '/:path',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;