Ext.define('ModernTunes.view.TunesView.TunesGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'tunesgrid',
    cls: 'tunes-grid',


    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.cell.*'
    ],
    bind:{
        store:'{tunes}'
    },
    defaults: {
        height: 54
    },

    columns: [{
        text: 'Artist',
        dataIndex: 'artist',
        flex: 1
    }, {
        text: 'Title',
        dataIndex: 'title',
        flex: 1
    }, {
        text: 'Release Date',
        dataIndex: 'release_date',
        flex: .5
    }, {
        text: 'Thumbnail',
        dataIndex: 'image',
        tpl: '<div class="grid-image" style="background-image:url(\'{image}\')"></div>',
        cell: {
            encodeHtml: false
        }
    }]
});