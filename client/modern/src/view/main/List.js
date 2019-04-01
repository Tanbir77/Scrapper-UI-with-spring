/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Issue',
 
    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Issue Name',  dataIndex: 'issuename',flex:1,align: 'left'},
        { text: 'Description', dataIndex: 'issuedescription',flex: 1,align: 'left' },
        { text: 'Submittedby', dataIndex: 'submittedby',flex:1,align: 'left'},
        {
          text: 'Resolve',
           align: 'center',
           stopSelection: true,
           xtype: 'widgetcolumn',
           widget: {
                  xtype: 'button',
                  _btnText: "resolved",
                  defaultBindProperty: null, //important
                  handler: function(widgetColumn) {
                        var record = widgetColumn.getWidgetRecord();
                        // console.log("Got data!", record);
                        // Ext.Msg.alert('Resolved','problem is solved');
                        //widgetColumn.hide();

                        Ext.MessageBox.confirm(
                        'Confirm', 'Are you sure you want to do this ?', callbackFunction);
                     function callbackFunction(btn) {
                        if(btn == 'yes') {
                           widgetColumn.disable();
                        } else {
                           widgetColumn.enable();
                        }
                     };
                  },
                  listeners: {
                        beforerender: function(widgetColumn){
                            var record = widgetColumn.getWidgetRecord();
                            widgetColumn.setText( widgetColumn._btnText ); //can be mixed with the row data if needed
                        }
                  }
            }
        }
    ],
    bbar: [{
                xtype: 'pagingtoolbar',
                bind:{
                    store: {
                      type:'personnel'
                    }
                },
                displayInfo: true,
                displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
                emptyMsg: "No records to display&nbsp;"
    }],
    tbar:[
            // {
            //     text: 'Add Student',
            //     iconCls: 'fa-plus',
            //     handler: 'onAddClick'
            // }
            {
            iconCls: 'x-fa fa-plus',
            handler:function(){
                

                win = Ext.create('Ext.Window', {
                 title: 'Report',
                 iconCls: 'x-fa fa-plus',
                 layout:'form',
                 width:400,
                 plain: true,
                 items: [{
                  xtype : 'textfield',
                  fieldLabel: 'Issue Name',
                  name:'issuena'
                },{
                  xtype : 'textarea',
                  fieldLabel: 'Issue Description',
                  name:'issuede'
               },{
                  xtype : 'textfield',
                  fieldLabel: 'Submitted By',
                  name:'issuesu'
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
                      //Saving an issue starts from here
                      handler:function(){
                        var varissuename = this.up('window').down('textfield[name=issuena]').getValue();
                        var varissuedescription = this.up('window').down('textfield[name=issuede]').getValue();
                        var varissuesubmittedby = this.up('window').down('textfield[name=issuesu]').getValue();
                        alert("Data: \n"+varissuename+"\n"+varissuedescription+"\n"+varissuesubmittedby);
                      }
                      //saving an issue ends here
                    }
                  ]
                }
                    // {
                    //     xtype:'button',
                    //     text:'Save Issuer'
                    // },{
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
    listeners: {
        select: 'onItemSelected'
    }
});

