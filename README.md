![A preview of my revamped blogfolio](https://res.cloudinary.com/braydoncoyer/image/upload/v1639000556/new_blogfolio_igoj09.png)

# braydoncoyer.dev

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [Notion API](https://developers.notion.com)
- **Database**: [Supabase](https://supabase.com)
- **Open Graph Images**: [Cloudinary](https://cloudinary.com)
- **Newsletter**: [Revue](https://www.getrevue.co)
- **Deployment**: [Vercel](https://vercel.com)

## Project Overview

- `components/*` - Various components used throughout the site.
- `layouts/*` - The different layout options available to use on each page.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering article reactions, article views, [`/stats`](https://braydoncoyer.dev/stats), newsletter subscription, and to generate a sitemap.
- `pages/blog/*` - Static pre-rendered blog pages that fetch information from the Notion API.
- `pages/stats` - [Site statistics](https://braydoncoyer.dev/stats) about my website.
- `pages/*` - All other static pages.
- `public/*` - Static assets including robots.txt
- `styles/*` - A handful of global styles, and reusable classes utilzing @apply with Tailwind.
- `data/*` - a simple object containing global data about the site.

## Running Locally

```bash
$ git clone https://github.com/braydoncoyer/braydoncoyer.dev.git
$ cd braydoncoyer.dev
$ npm install
$ npm run dev
```

Create a `.env` file similar to `.env.example` and include the appropriate keys.

## Notion Article Template

Duplicate [the following Notion database](https://www.notion.so/0d3e00c6bbe54231897b9fcbc7747f78?v=4d7f0006d9a144b5bd8b9251f2ec39cd), grab the database ID and add it to the environment variables in the `.env` file.

## Docker run

跳过jutpter的环境变量？
①创建镜像：
docker build -f ./Dockerfile -t myblog .
②启动容器：
docker run -itd -p 9526:9526 --name myblog myblog

## Linux nohup run
export PORT=9526
nohup npm run start > runbuild0316.log 2>&1 &
## while insatll how to install  sharp
export PUPPETEER_SKIP_DOWNLOAD=true
a1234@Olas-MacBook-Pro braydoncoyer.dev-3 % export npm_config_sharp_binary_host="https://npmmirror.com/mirrors/sharp" \
  export npm_config_sharp_libvips_binary_host="https://npmmirror.com/mirrors/sharp-libvips" \
  npm install sharp