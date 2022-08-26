sudo npm install -g hexo-cli

----------------------------------

sudo hexo init blog

cd blog

sudo npm install

----------------------------------

sudo hexo s

----------------------------------

https://github.com/SuperBruceJia/blog/tree/gh-pages

Branch: gh-pages

Location: /root

----------------------------------

# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repo:
    github: https://github.com/SuperBruceJia/blog.git
  branch: gh-pages

----------------------------------

sudo npm install hexo-deployer-git --save

----------------------------------

sudo hexo clean

sudo hexo g

sudo hexo d

----------------------------------

sudo npm install hexo-generator-sitemap --save

sudo npm install hexo-generator-baidu-sitemap --save

# sitemap
sitemap:
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml

----------------------------------

cd /source 
sudo vim robots.txt

# hexo robots.txt
User-agent: *
Allow: /
Allow: /archives/

Disallow: /vendors/
Disallow: /js/
Disallow: /css/
Disallow: /fonts/
Disallow: /vendors/
Disallow: /fancybox/

Sitemap: https://shuyuej.com/blog/sitemap.xml
Sitemap: https://shuyuej.com/blog/baidusitemap.xml

----------------------------------


