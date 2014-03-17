Ext.application({
    name: 'Myapp',

    launch: function() {
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
                {
                    title: 'Home',
                    iconCls: 'home',
                    html: [
                        '<img src="http://staging.sencha.com/img/sencha.png" />',
                        '<h1>Welcome to Doctor's near me App</h1>',
                        "<p>This app will display the nearby doctors ",
                        "along with their ratings by our other users </p>",
                        '<h2>RAXA EMR</h2>'
                    ].join("")
                }
            ]
        });
    }
});
