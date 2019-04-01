Ext.define('MyApp.store.Org',{
	extend: 'Ext.data.Store',
	alias: 'store.org',
	fields: [
		'OrgName','OrgNumber'
	],
	data:{
		items: [
			{OrgName: 'Naztech',OrgNumber:'001454214523'},
			{OrgName: 'Leads',OrgNumber:'0013569214523'},
			{OrgName: 'DataSoft',OrgNumber:'005454887923'},
			{OrgName: 'SouthTech',OrgNumber:'00458752923'}
		]
	},
	proxy: {
		type: 'memory',
		reader:{
			type: 'json',
			rootProperty: 'items'
		}
	}
});