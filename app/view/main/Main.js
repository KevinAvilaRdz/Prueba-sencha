/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('Modern.tunes.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'ModernTunes.view.TunesView.ViewTunes',
        'ModernTunes.view.TunesView.TunesGrid',
        'ModernTunes.view.main.MainController'
    ],

    controller: 'main',
    viewModel: 'main',
    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',
    items: [{
        title: "Thumbnails",
        xtype: 'tunesview',
        listeners:{
            select:'onThumbSelect'
        }
    }, {
        title: "Grid",
        xtype: 'tunesgrid',
        listeners: {
            select: 'onGridSelect'
        }

    }]
});
