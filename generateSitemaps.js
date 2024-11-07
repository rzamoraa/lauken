import fs from 'fs/promises';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración de dominios
const domains = [
  'https://lauken.cl',
  'https://laukeninmobiliaria.cl',
  'https://inmobiliarialauken.cl'
];

// URLs del sitio
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/nosotros', changefreq: 'monthly', priority: 0.8 },
  { url: '/proyectos', changefreq: 'weekly', priority: 0.9 },
  { url: '/costa-pulin', changefreq: 'weekly', priority: 0.9 },
  { url: '/san-rafael', changefreq: 'weekly', priority: 0.9 },
  { url: '/entre-valles', changefreq: 'weekly', priority: 0.9 },
  { url: '/vendenos-tu-campo', changefreq: 'monthly', priority: 0.8 },
  { url: '/contacto', changefreq: 'monthly', priority: 0.7 }
];

async function generateSitemapForDomain(domain) {
  try {
    const smStream = new SitemapStream({ hostname: domain });
    
    const links = routes.map(route => ({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: new Date().toISOString(),
      links: domains.map(altDomain => ({
        lang: 'es-CL',
        url: `${altDomain}${route.url}`
      }))
    }));

    const stream = Readable.from(links).pipe(smStream);
    const data = await streamToPromise(stream);
    return data.toString();
  } catch (error) {
    console.error('Error generando sitemap:', error);
    throw error;
  }
}

async function generateSitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${domains.map(domain => `
        <sitemap>
          <loc>${domain}/sitemap-main.xml</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </sitemap>
      `).join('')}
    </sitemapindex>`;
}

async function generateAllSitemaps() {
  try {
    // Asegurarse de que existe el directorio public
    const publicDir = join(__dirname, 'public');
    try {
      await fs.access(publicDir);
    } catch {
      await fs.mkdir(publicDir, { recursive: true });
    }

    // Generar sitemaps para cada dominio
    for (const domain of domains) {
      const sitemap = await generateSitemapForDomain(domain);
      const domainPrefix = domain.replace('https://', '').replace(/\./g, '-');
      await fs.writeFile(
        join(publicDir, `sitemap-${domainPrefix}.xml`),
        sitemap
      );
      console.log(`✅ Generado sitemap para ${domain}`);
    }

    // Generar sitemap index
    const sitemapIndex = await generateSitemapIndex();
    await fs.writeFile(
      join(publicDir, 'sitemap-index.xml'),
      sitemapIndex
    );
    console.log('✅ Generado sitemap index');

    // Generar robots.txt
    const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://lauken.cl/sitemap-index.xml

# No indexar
Disallow: /admin/
Disallow: /api/
Disallow: /error/
Disallow: /404

# Permitir archivos estáticos
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.gif$
Allow: /*.css$
Allow: /*.js$`;

    await fs.writeFile(
      join(publicDir, 'robots.txt'),
      robotsTxt
    );
    console.log('✅ Generado robots.txt');

  } catch (error) {
    console.error('❌ Error generando sitemaps:', error);
    process.exit(1);
  }
}

// Ejecutar la generación
generateAllSitemaps();