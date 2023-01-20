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

```yml
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: "Bruce's Journey"
subtitle: "Live a life you will remember."
description: 'Find the courage to make life a blessing.'
keywords: Blog
author: Shuyue Jia (贾舒越)
language: en
timezone: 'Asia/Shanghai'

# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://SuperBruceJia.github.io/blog
root: /blog
rss: https://shuyuej.com
permalink: :year/:month/:day/:title/
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks

# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
code_dir: downloads/code
i18n_dir: :lang
skip_render:

# Writing
new_post_name: :title.md # File name of new posts
default_layout: post
titlecase: false # Transform title into titlecase
external_link:
  enable: true # Open external links in new tab
  field: site # Apply to the whole site
  exclude: ''
filename_case: 0
render_drafts: false
post_asset_folder: true
relative_link: false
future: true
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace: ''
  wrap: true
  hljs: false
prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: ''

# Home page setting
# path: Root path for your blogs index page. (default = '')
# per_page: Posts displayed per page. (0 = disable pagination)
# order_by: Posts order. (Order by date descending by default)
index_generator:
  path: ''
  per_page: 10
  order_by: -date

# Category & Tag
default_category: uncategorized
category_map:
tag_map:

# Metadata elements
## https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
meta_generator: true

# Date / Time format
## Hexo uses Moment.js to parse and display date
## You can customize the date format as defined in
## http://momentjs.com/docs/#/displaying/format/
date_format: MM-DD-YYYY
time_format: HH:mm:ss
## updated_option supports 'mtime', 'date', 'empty'
updated_option: 'mtime'

# Pagination
## Set per_page to 0 to disable pagination
per_page: 10
pagination_dir: page

# Include / Exclude file(s)
## include:/exclude: options only apply to the 'source/' folder
include:
exclude:
ignore:

# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: Redefine

# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repo:
    github: https://github.com/SuperBruceJia/blog.git
  branch: gh-pages

# sitemap
sitemap:
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml

# RSS
plugin:
- hexo-generator-feed
feed:
type: homepage
path: https://shuyuej.com
limit: 20
```

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


