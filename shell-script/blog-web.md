# Building Blog via Hexo

```shell
sudo npm install -g hexo-cli

sudo hexo init blog

cd blog

sudo npm install

sudo hexo s
```

# GitHub Configuration

https://github.com/SuperBruceJia/blog/tree/gh-pages

Branch: gh-pages

Location: /root

# Deployment
## Docs: https://hexo.io/docs/one-command-deployment

# Hexo Configuration
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

```shell
sudo npm install hexo-deployer-git --save
```

----------------------------------

# Deploy Hexo

```shell
sudo hexo clean

sudo hexo g

sudo hexo d
```

----------------------------------

# sitemap

```shell
sudo npm install hexo-generator-sitemap --save

sudo npm install hexo-generator-baidu-sitemap --save
```

```shell
sitemap:
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml
```

----------------------------------

# redefine Configuration

```shell
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
```

----------------------------------

# redefine Configuration

```yml
# ---------------------------------------------------------------------------------------
#  Your basic info
# ---------------------------------------------------------------------------------------
base_info:
  title: "Bruce's Journey" # Site title
  author: Shuyue Jia (贾舒越) # Author name
  url: https://shuyuej.com # Site url
  # Logo image (You can use local image, image external link or don’t fill)
  logo_img: # logo image on the left of the navigation bar

# ---------------------------------------------------------------------------------------
# Theme style settings
# ---------------------------------------------------------------------------------------
style:
  # Theme primary color
  primary_color: "#005080"

  # Avatar (You can use local image or image external link)
  avatar: /images/profile.jpg # avatar of the author

  # Favicon (You can use local image or image external link)
  favicon: /images/Google.ico # favicon of the site
  
  # Article image align position
  article_img_align: center # value: left | center

  # Right side width
  right_side_width: 210px #sidebar width, for toc
  
  # Content area max width
  content_max_width: 1000px #content max width, for article

  #navigation bar background color (from left to right)
  nav_color: 
    left: "#f78736" #left side 
    right: "#367df7"  #right side
    transparency: 35 #percent (10-99)

  # Mouse hover
  hover:
    shadow: true # shadow effect when the mouse hover
    scale: false # scale effect when the mouse hover

  # First screen
  first_screen:
    enable: true
    background_image:
      light: https://evan.beee.top/img/wallhaven-wqery6-light.webp # background image of the first screen, use relative path or external link (if your website is in subdirectory, use external link)
      dark: https://evan.beee.top/img/wallhaven-wqery6-dark.webp # background image of the first screen, use relative path or external link (if your website is in subdirectory, use external link)
    title_color:
      light: "#fff" # first screen title color (light mode)
      dark: "#d1d1b6" # first screen title color (dark mode)
    description: "Survive and Thrive" # the title in the middle of the first screen. HTML supported (e.g. svg html code of your logo)
  
  # Scroll style settings
  scroll:
    progress_bar: # reading progress bar
      enable: true 
    percent: # reading progress percent
      enable: false

# ---------------------------------------------------------------------------------------
# Social contact link
# ---------------------------------------------------------------------------------------
social_contact: # social contact icons in the first screen, you can add more by using fontawesome icon names
  enable: true
  links:
    github: https://github.com/SuperBruceJia
    facebook: https://www.facebook.com/shuyuej
    email: shuyuej@ieee.org

# ---------------------------------------------------------------------------------------
# Navigation menu
# ---------------------------------------------------------------------------------------
menu: #you can customize, i18n files are in the theme's languages folder. fa-regular recommended
  Home: 
    path: / 
    icon: fa-regular fa-house # can be empty
  Archives: 
    path: /archives 
    icon: fa-regular fa-archive # can be empty
  # Status: 
  #   path: https://status.evanluo.top/
  #   icon: fa-regular fa-chart-bar
  # About: 
  #   icon: fa-regular fa-user
  #   submenus:
  #     Me: /about
  #     Github: https://github.com/EvanNotFound/hexo-theme-redefine
  #     Blog: https://www.evanluo.top
  #     Friends: /friends
  # Links: 
  #   icon: fa-regular fa-link
  #   submenus:
  #     Link1: /link1
  #     Link2: /link2
  #     Link3: /link3

  # ...... # you can add more



# ---------------------------------------------------------------------------------------
# Home page article block display settings
# ---------------------------------------------------------------------------------------
home_article:
  category:
    enable: true # show category in home page article block
    limit: 3 # max number of categories shown in home page article block
  tag:
    enable: true # show tags in home page article block
    limit: 3 # max number of tags shown in home page article block

# ---------------------------------------------------------------------------------------
# Post page Settings
# ---------------------------------------------------------------------------------------
post:
  # Post word count
  # Dependencies: hexo-wordcount (npm install hexo-wordcount)
  # See: https://github.com/willin/hexo-wordcount
  word_count:
    enable: true
    wordcount: true # word count, one article
    min2read: true # time to read, one article

  # Author label
  author_label:
    enable: true
    auto: false # if true, show Lv1, Lv2, Lv3... , If false, show custom label
    # label array item can be one or more
    custom_label_list: ["lol"]

# ---------------------------------------------------------------------------------------
# Code copy
# ---------------------------------------------------------------------------------------
code_block:
  copy: true # enable code copy button
  style: mac # mac | simple

# ---------------------------------------------------------------------------------------
# Table of Contents in the Sidebar
# ---------------------------------------------------------------------------------------
toc:
  enable: true

  # Automatically add list number to toc.
  number: false

  # If true, all level of TOC in a post will be displayed, rather than the activated part of it.
  expand_all: true

  # If true, open TOC every time when you enter the article page
  init_open: true

# ---------------------------------------------------------------------------------------
# Post copyright info
# ---------------------------------------------------------------------------------------
copyright_info:
  enable: true

# ---------------------------------------------------------------------------------------
# Website count
# ---------------------------------------------------------------------------------------
website_count:
  # busuanzi
  # See: http://ibruce.info/2015/04/04/busuanzi/
  busuanzi_count:
    enable: true
    site_uv: true
    site_pv: true
    page_pv: true

# ---------------------------------------------------------------------------------------
# Local Search
# Dependencies: hexo-generator-searchdb
# See: https://github.com/theme-next/hexo-generator-searchdb
# ---------------------------------------------------------------------------------------
local_search:
  enable: false
  preload: true # Preload the search data when the page loads

# ---------------------------------------------------------------------------------------
# Comment plugin
# ---------------------------------------------------------------------------------------
comment:
  enable: false
  use: waline # values: waline | gitalk | twikoo

  # Waline
  # See: https://waline.js.org/guide/get-started.html
  waline:
    serverUrl:  # Waline server url(vercel) example: https://example.example.com
    lang: en # Waline language, default: zh-CN. See: https://waline.js.org/guide/client/i18n.html
  
  # Gitalk
  # See: https://github.com/gitalk/gitalk
  gitalk:
    github_id: # GitHub repo owner
    repository: # Repository name to store issues
    client_id: # GitHub Application Client ID
    client_secret: # GitHub Application Client Secret

  # Twikoo
  # See: https://github.com/imaegoo/twikoo
  twikoo:
    visitor: true
    env_id: # Vercel or Tencent Cloud Function environment ID
    region: # environment region. If select Guangzhou, fill in "ap-guangzhou". (optional)

# ---------------------------------------------------------------------------------------
# Friend Links page
# ---------------------------------------------------------------------------------------
friend_links:
  columns: 2 # number of columns. 2 or 3

# ---------------------------------------------------------------------------------------
# RSS
# Dependencies: hexo-generator-feed
# See: https://github.com/hexojs/hexo-generator-feed
# ---------------------------------------------------------------------------------------
rss:
  enable: false

# ---------------------------------------------------------------------------------------
# Lazyload image
# ---------------------------------------------------------------------------------------
lazyload:
  enable: true

# ---------------------------------------------------------------------------------------
# CDN
# ---------------------------------------------------------------------------------------
cdn:
  enable: false

# ---------------------------------------------------------------------------------------
# PJAX
# ---------------------------------------------------------------------------------------
pjax:
  enable: true

# ---------------------------------------------------------------------------------------
# Fontawesome
# ---------------------------------------------------------------------------------------
fontawesome: # select fontawesome versions you want to use, in order to reduce the loading time, select as few as possible
  thin: false # use fontawesome thin version or not
  light: false # use fontawesome light version or not
  duotone: false # use fontawesome duotone version or not

# ---------------------------------------------------------------------------------------
# Footer settings
# ---------------------------------------------------------------------------------------
footer:
  runtime: true # show website running time or not
  start_time: 2020/12/31 23:59:59 # the starting time of your website, format: yyyy/mm/dd hh:mm:ss
  customize: Live a life you will remember
  icp: # ICP record number of your website, Can be null

# ---------------------------------------------------------------------------------------
# Redefine Theme version (Please dont modify it)
# Please go to github to update the latest version frequently
# ---------------------------------------------------------------------------------------
version: 0.4.6
```
