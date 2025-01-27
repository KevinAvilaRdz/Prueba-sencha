/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ModernTunes.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        'ModernTunes.view.TunesView.PreviewTunes'
    ],

    onShowPreview: function (record) {

        if (this.getView().down('video')) {
            return;
        }
        var videoConfig = { 
            xtype: 'video',
            url: record.data.preview,
            posterUrl: record.data.image
        };
        var linkConfig = { 
            docked: 'bottom',
            xtype: 'component',
            tpl: [
                '<a href="{itunesstore}" target="itunes_store">',
               // '<img src="resources/images/get-it-itunes.svg" style="margin: 16px; display: block; margin-left: auto; margin-right: auto; width: 75px;">',
                '</a>'
            ],
            data: {
                itunesstore: record.data.itunesstore
            }
        };
        var containerConfig = { // parent container of the video and the anchor/link
            xtype: 'container',
            title: record.data.title + ' — ' + record.data.artist,
            style: '{background-color: black;}',
            layout: 'fit',
            items: [
                videoConfig,
                linkConfig
            ]
        };
        var vid = Ext.create({ // instance of the Preview Dialog class displaying the container
            xtype: 'preview',
            title: record.data.title,
            layout: 'fit',
            items: [containerConfig],
        });
        vid.show();
    },

    onThumbSelect: function (thumbs, record) {
        this.onShowPreview(record);
    },

    onGridSelect: function (grid, records) {
        this.onShowPreview(records[0]);
    }
});
