# xinofekuator.github.io
Personal webpage of Ignacio Amaya: http://xinofekuator.github.io

Personal webpage built with Jalpc (https://github.com/jarrekk/Jalpc).

Inspired in other webpages built with Jalpc, such as:
- http://www.jarrekk.com/
- https://dalpozz.github.io/
- http://glemaitre.github.io


### Local setup

`brew install ruby`

Add to your `.zshrc` this:

```
export PATH="/usr/local/opt/ruby/bin:$PATH"
export LDFLAGS="-L/usr/local/opt/ruby/lib"
export CPPFLAGS="-I/usr/local/opt/ruby/include"
export PKG_CONFIG_PATH="/usr/local/opt/ruby/lib/pkgconfig"
```

To fix issues with  libffi reinstall it `brew reinstall libffi`
To install jekyll:
```
sudo gem install bundler
sudo gem install -n /usr/local/bin/ jekyll
```

Finally, install github pages extension: `gem install github-pages`


## Testing

	`gem update github-pages`

Testing your site locally To construct and test your site locally, go into the directory and type

	`jekyll build`

This will create (or modify) a `_site/ directory`, containing everything from `assets/`, and then the `index.md` and all `pages/*.md`files, converted to `html`. (So there’ll be `_site/index.html` and the various `_site/pages/*.html`.)

Type the following in order to “serve” the site. This will first run build, and so it does not need to be preceded by jekyll build.

	`jekyll serve`

Now open your browser and go to http://localhost:4000/site-name/


## Dependencies

Github pages uses bower, so for example it was necessary to install in `bower_components` Chart.js dependencies:
`bower install chart.js --save` but removing some markdown files that were making the build fail.


## Adding a blog post

To add a blog post you just need to create a markdown file in the `_posts` folder. Try to add the date in the file name to locate the files easier.

Example code how to add images that are resized to the screen (`IMAGE_PATH` is located inside `static/blog/`):

```html
<figure align = "center">
<img src="{{ site.img_path }}/IMAGE_PATH" alt="Alternative description not shown" style="width:65%">
<figcaption align = "center"><b>Fig.1 - Here it goes the caption</b></figcaption>
</figure>
```

The categories of the blog can be modified in `blog.yml` and to create a blog post we can add the category in the header. Example header:

```
---
layout: post
title:  "Blog post title"
date:   2015-05-09
desc: "Description of the blog post (not shown in the blog post)"
keywords: "linux,python"
categories: [Linux]
tags: [LVS]
icon: fa-linux
---
```

The description and keywords are not used at the moment for the search (only the filename). The tags do not need to be related with any category and can be a list of comma separated words.

Some useful icons are:
- `icon-python`: Python blog posts
- `fa-database`: Data engineering related posts
- `fa-linux`: Linux or bash blog posts

### Scheduling a blog post

Blog posts with a date in the future won't appear in the blog post list, so this can be used to add content that will only show in the page in the future.

## Using personal access tokens

- Disable your global git config in case of conflict: `git config --local credential.helper ""`
- Introduce your username and [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) previously created in Github
