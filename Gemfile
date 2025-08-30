source "https://rubygems.org"
ruby '3.4.1'  # Match with your current Ruby version

# Add csv and sass dependencies
gem "csv", "~> 3.2"
gem "sass-embedded", "~> 1.69"  # Use sass-embedded explicitly
gem "jekyll-sass-converter", "~> 2.0"  # Ensure compatibility

# Use GitHub Pages compatible Jekyll version
gem "jekyll", "~> 3.9.3"
gem "webrick", "~> 1.8"
gem "jekyll-include-cache", "~> 0.2.0"

group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-feed"
  gem "jekyll-paginate"
  gem "jekyll-archives"
  gem "jekyll-remote-theme"
  gem "github-pages", group: :jekyll_plugins  # Resolves all compatible dependencies
end
