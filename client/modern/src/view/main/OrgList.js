Ext.define('MyApp.view.main.OrgList',{
  extend: 'Ext.grid.Panel',
  xtype: 'mainOrgList',
  requires:[
    'MyApp.store.Org'
  ],
  title: 'Organization',
  store:{
    type: 'org'
  },
  buttonAlign:'center',
  columns:[
    {text:'Organization Name',dataIndex:'OrgName',flex:1,align: 'left'},
    {text:'Contact Number',dataIndex:'OrgNumber',flex:1,align: 'left'},
  {
      // xtype: 'checkcolumn',
      // text: 'Indoor?',
      // dataIndex: 'indoor',
      // width: 55
      xtype: 'checkcolumn',
      defaultType: 'checkboxfield',
      dataIndex:''
    }
  ],
  bbar: [{
                xtype: 'pagingtoolbar',
                bind:{
                    store: {
                      type:'org'
                    }
                },
                displayInfo: true,
                displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
                emptyMsg: "No records to display&nbsp;"
  }],
  tbar: [
            {
                text:'Add',
      handler:function(){
        win = Ext.create('Ext.Window', {
                 title: 'Add Organization',
                 layout:'form',
                 closeAction:'hide',
                 width:400,
                 plain: true,
                 items: [{
                  xtype : 'textfield',
                  fieldLabel: 'Organization Name',
                  name:'orgna'
                },{
                  xtype : 'textfield',
                  fieldLabel: 'Contact',
                  name:'orgnu'
               }],
               dockedItems:[//buttons replaced by dockedItems
                {
                  xtype:'toolbar',
                  dock: 'bottom',
                  ui:'footer',
                  items:[
                    {
                      xtype:'button',
                      text:'Cancel',
                      handler:function(){
                        win.close();
                      }
                    },'->',{
                      xtype:'button',
                      text:'Save',
                      handler:function(){
                        var varorgname = this.up('window').down('textfield[name=orgna]').getValue();
                        var varorgnumber = this.up('window').down('textfield[name=orgnu]').getValue();
                        alert("Data: \n"+varorgname+"\n"+varorgnumber);
                      }
                    }
                  ]
                }

                    // {
                    //     xtype:'button',
                    //     text:'Save Org'
                    // },
                    // {
                    //     xtype:'button',
                    //     text:'Cancel',
                    //     handler:function(){
                    //         win.close();
                    //     }
                    // }
               ]
                }).show();
              }
            }, 
            {
                text:'Update',
      handler:function(){
        win = Ext.create('Ext.Window', {
                 title: 'Update Organization',
                 layout:'form',
                 width:400,
                 plain: true,
                 items: [{
                  xtype : 'textfield',
                  fieldLabel: 'Organization Name'
                },{
                  xtype : 'textfield',
                  fieldLabel: 'Contact'
               }],
               dockedItems:[//buttons replaced by dockedItems
               {
                  xtype:'toolbar',
                  dock: 'bottom',
                  ui:'footer',
                  items:[
                    {
                      xtype:'button',
                      text:'Cancel',
                      handler:function(){
                        win.close();
                      }
                    },'->',{
                      xtype:'button',
                      text:'Save'
                    }
                  ]
                }
                    // {
                    //     xtype:'button',
                    //     text:'Update Org'
                    // },
                    // {
                    //     xtype:'button',
                    //     text:'Cancel',
                    //     handler:function(){
                    //         win.close();
                    //     }
                    // }
               ]
                }).show();
              }
            }
  ],
  listeners:{
    select:'onOrgSelected'
  }
});
