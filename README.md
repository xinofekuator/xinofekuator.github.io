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
To install sudo might be needed: `sudo gem install jekyll`
Finally, install github pages extension: `gem install github-pages`
