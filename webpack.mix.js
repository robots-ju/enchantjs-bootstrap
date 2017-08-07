const { mix } = require('laravel-mix');

mix.setPublicPath('public');

mix.js('src/js/app.js', 'public/js');
mix.copy('node_modules/enchant.js/images', 'public/images');
mix.sass('src/sass/app.scss', 'public/css');
