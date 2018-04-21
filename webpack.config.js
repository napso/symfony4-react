var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')

    .setPublicPath('/build')

    .addEntry('app', './assets/js/app.js')

    .enableBuildNotifications()

    .autoProvidejQuery()

    .enableSassLoader()

    .enableSourceMaps(!Encore.isProduction())

    .enableReactPreset()
;

module.exports = Encore.getWebpackConfig();
