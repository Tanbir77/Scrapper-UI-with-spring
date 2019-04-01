Ext.define('MyApp.view.main.SitemetaList',{
	extend: 'Ext.panel.Panel',
	xtype: 'mainSiteList',
	requires:[
		'MyApp.store.Org'
	],
	title: 'Site Meta List',
	store:{
		type: 'org'
	},
	buttonAlign:'center',
	items: [{
        xtype: 'combobox',
        fieldLabel: 'Choose Organization',
        fieldLabelStyle: 'width:220px',
        width: 350,
        padding: '20 20 0 0',
        bind:{
                store: {
                    type:'org'
                }
         },
		queryMode: 'local',
        displayField: 'OrgName',
        valueField: 'OrgName',
        id: 'genericFormCombo',
        forceSelection: false,
        multiSelect: false,
        typeahead: true
    }]
});