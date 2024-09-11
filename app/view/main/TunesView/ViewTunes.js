Ext.define('ModernTunes.view.TunesView.ViewTunes', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',
    scrollable: true,

    cls:'tune-view',
    
    layout: {
        type: 'box',
        pack: 'space-around',
        wrap: true
    },
    bind:{
        store:'{tunes}'
    },

    itemCls:'video',
    itemTpl: [
        '<figure>',
        '<div class="thumbnail" style="background-image:url(\'{image}\')"></div>',
        '<figcaption><div class=\'title\'>{title}</div><div class=\'artist\'>{artist}</div></figcaption>',
        '</figure>'
    ]
});