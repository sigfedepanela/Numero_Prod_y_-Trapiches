var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental'
            });var format_NmerodeProductoresdePanela_1 = new ol.format.GeoJSON();
var features_NmerodeProductoresdePanela_1 = format_NmerodeProductoresdePanela_1.readFeatures(json_NmerodeProductoresdePanela_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeProductoresdePanela_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NmerodeProductoresdePanela_1.addFeatures(features_NmerodeProductoresdePanela_1);var lyr_NmerodeProductoresdePanela_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeProductoresdePanela_1, 
                style: style_NmerodeProductoresdePanela_1,
    title: 'Número de Productores de Panela<br />\
    <img src="styles/legend/NmerodeProductoresdePanela_1_0.png" />  349 - 2357 <br />\
    <img src="styles/legend/NmerodeProductoresdePanela_1_1.png" />  2357 - 4365 <br />\
    <img src="styles/legend/NmerodeProductoresdePanela_1_2.png" />  4365 - 6372 <br />\
    <img src="styles/legend/NmerodeProductoresdePanela_1_3.png" />  6372 - 8380 <br />\
    <img src="styles/legend/NmerodeProductoresdePanela_1_4.png" />  8380 - 10388 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_NmerodeProductoresdePanela_1.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_NmerodeProductoresdePanela_1];
lyr_LimiteDepartamental_0.set('fieldAliases', {'DEPT': 'DEPT', });
lyr_NmerodeProductoresdePanela_1.set('fieldAliases', {'Dept': 'Dept', 'Total.Prod': 'Total.Prod', '%.Pequeños': '%.Pequeños', '%.Medianos': '%.Medianos', '%.Grandes': '%.Grandes', 'Numero.Tra': 'Numero.Tra', });
lyr_LimiteDepartamental_0.set('fieldImages', {'DEPT': 'TextEdit', });
lyr_NmerodeProductoresdePanela_1.set('fieldImages', {'Dept': 'TextEdit', 'Total.Prod': 'TextEdit', '%.Pequeños': 'TextEdit', '%.Medianos': 'TextEdit', '%.Grandes': 'TextEdit', 'Numero.Tra': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'DEPT': 'inline label', });
lyr_NmerodeProductoresdePanela_1.set('fieldLabels', {'Dept': 'inline label', 'Total.Prod': 'inline label', '%.Pequeños': 'inline label', '%.Medianos': 'inline label', '%.Grandes': 'inline label', 'Numero.Tra': 'inline label', });
lyr_NmerodeProductoresdePanela_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});