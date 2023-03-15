export PUPPETEER_SKIP_DOWNLOAD=true
npm config set registry https://registry.npm.taobao.org
npm install
npm run build
PORT= 9526 npm run start