/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ModernTunes.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires: [
        'ModernTunes.model.Tune'
    ],
    stores: {
        tunes: {
            model: 'ModernTunes.model.Tune',
            autoLoad: true
        }
    }
});
