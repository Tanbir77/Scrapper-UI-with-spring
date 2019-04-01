Ext.require(['Ext.data.*', 'Ext.grid.*']);
Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    fields: [
        'issuename', 'issuedescription', 'submittedby'
    ],

    data: { items: [
        { issuename: 'Jean Luc', issuedescription: "Setup Problem", submittedby: "pritam"},
        { issuename: 'Worf', issuedescription: "Documentation is incorrect",  submittedby: "Rabby" },
        { issuename: 'Deanna', issuedescription: "Setup Fingerprint", submittedby: "Rasadin" },
        { issuename: 'Data', issuedescription: "Need Extjs tutor", submittedby: "Rubel" },
        { issuename: 'corrupted file', issuedescription: "Coffee?!", submittedby: "Sakib" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        },
        writer:{
            type:'json',
            writeAllFields: false,
            rootProperty:'items'
        }
    }
});
