/* global Ext */

Ext.create('Ext.data.Store', {
	storeId: 'simpsonsStore',
	fields:[ 'name', 'email', 'phone'],
	data: [
		{ name: 'Lisa', email: 'lisa@simpsons.example.com', phone: '111-111-1224' },
		{ name: 'Bart', email: 'bart@simpsons.example.com', phone: '111-222-1234' },
		{ name: 'Homer', email: 'homer@simpsons.example.com', phone: '444-222-1244' },
		{ name: 'Marge', email: 'marge@simpsons.example.com', phone: '444-222-1254' }
	]
});

Ext.create('Ext.grid.Panel', {
	title: 'Simpsons',
	store: Ext.data.StoreManager.lookup('simpsonsStore'),
	columns: [
		{ text: 'Name', dataIndex: 'name' },
		{ text: 'Email', dataIndex: 'email', flex: 1 },
		{ text: 'Phone', dataIndex: 'phone' },
		{
			text: 'Action',
			xtype: 'actioncolumn',
			width: 80,
			items: [{
				icon: 'assets/icon-Hello.svg',
				tooltip: 'Show Info',
				handler: function (grid, rowIndex, colIndex) {
					const record = grid.getStore().getAt(rowIndex);
					const message = `Say hi to ${record.get('name')}! 
						<br>&bull; <a href="mailto:${record.get('email')}">${record.get('email')}</a>
						<br>&bull; <a href="tel:${record.get('phone')}">${record.get('phone')}</a>
					`;
					Ext.Msg.alert('Hello', message);
				}
			}]
		},
	],
	height: 200,
	width: 400,
	renderTo: document.querySelector('#ext-grid'),
});
