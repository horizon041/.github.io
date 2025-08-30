source "https://rubygems.org"
ruby '3.3.0'  # Match with your workflow

# Core Jekyll for GitHub Pages compatibility
gem "jekyll", "~> 3.9.3"
gem "webrick", "~> 1.8"

# Optional: Cache plugin (compatible with Jekyll 3.7+)
gem "jekyll-include-cache", "~> 0.2.0"

group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-feed"
  gem "jekyll-paginate"
  gem "jekyll-archives"
  gem "jekyll-remote-theme"
  # GitHub Pages bundle (includes all supported plugins)
  gem "github-pages", group: :jekyll_plugins
end
