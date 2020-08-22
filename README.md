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

