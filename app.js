/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Modern.tunes.Application',

    name: 'Modern.tunes',

    requires: [
        // This will automatically load all classes in the Modern.tunes namespace
        // so that application classes do not need to require each other.
        'Modern.tunes.*'
    ],

    // The name of the initial view to create.
    mainView: 'Modern.tunes.view.main.Main'
});
