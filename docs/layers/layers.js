var wms_layers = [];
var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource__0.addFeatures(features__0);var lyr__0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__0, 
                style: style__0,
    title: 'Землища<br />\
    <img src="styles/legend/_0_0.png" />  0.00 - 2.00 <br />\
    <img src="styles/legend/_0_1.png" />  2.00 - 4.00 <br />\
    <img src="styles/legend/_0_2.png" />  4.00 - 6.00 <br />\
    <img src="styles/legend/_0_3.png" />  6.00 - 8.00 <br />\
    <img src="styles/legend/_0_4.png" />  8.00 - 10.00 <br />\
    <img src="styles/legend/_0_5.png" />  10.00 - 12.50 <br />\
    <img src="styles/legend/_0_6.png" />  12.50 - 15.00 <br />\
    <img src="styles/legend/_0_7.png" />  15.00 - 20.00 <br />\
    <img src="styles/legend/_0_8.png" />  20.00 - 30.00 <br />\
    <img src="styles/legend/_0_9.png" />  30.00 - 40.00 <br />\
    <img src="styles/legend/_0_10.png" />  40.00 - 50.00 <br />\
    <img src="styles/legend/_0_11.png" />  50.00 - 75.00 <br />\
    <img src="styles/legend/_0_12.png" />  75.00 - 100.00 <br />\
    <img src="styles/legend/_0_13.png" />  100.00 - 150.00 <br />\
    <img src="styles/legend/_0_14.png" />  150.00 - 200.00 <br />\
    <img src="styles/legend/_0_15.png" />  200.00 - 300.00 <br />\
    <img src="styles/legend/_0_16.png" />  300.00 - 400.00 <br />\
    <img src="styles/legend/_0_17.png" />  400.00 - 500.00 <br />\
    <img src="styles/legend/_0_18.png" />  500.00 - 3385.10 <br />'
        });

lyr__0.setVisible(true);
var layersList = [lyr__0];
lyr__0.set('fieldAliases', {'LAU_CODE': 'LAU_CODE', 'PROVINCE_CODE': 'PROVINCE_CODE', 'NAME_BG': 'NAME_BG', 'TYPE_BG': 'TYPE_BG', 'NAME_EN': 'NAME_EN', 'TYPE_EN': 'TYPE_EN', 'EKATTE_ID': 'EKATTE_ID', 'SETTLEMENT_FULLNAME': 'SETTLEMENT_FULLNAME', 'AREA_KM2': 'AREA_KM2', 'SETTL_COUNT': 'SETTL_COUNT', 'POP_NSI_2017': 'POP_NSI_2017', 'POP_DENSITY_NSI_2017': 'POP_DENSITY_NSI_2017', 'SETTL_ID_LIST': 'SETTL_ID_LIST', 'POP_NSI_2017_LIST': 'POP_NSI_2017_LIST', 'SETTL_NAME_LIST': 'SETTL_NAME_LIST', 'POP_DENSITY_NSI_2017_EVENT_ANNO': 'POP_DENSITY_NSI_2017_EVENT_ANNO', });
lyr__0.set('fieldImages', {'LAU_CODE': 'Hidden', 'PROVINCE_CODE': 'Hidden', 'NAME_BG': 'Hidden', 'TYPE_BG': 'Hidden', 'NAME_EN': 'Hidden', 'TYPE_EN': 'Hidden', 'EKATTE_ID': 'Hidden', 'SETTLEMENT_FULLNAME': 'Hidden', 'AREA_KM2': 'Hidden', 'SETTL_COUNT': 'Hidden', 'POP_NSI_2017': 'Hidden', 'POP_DENSITY_NSI_2017': 'Hidden', 'SETTL_ID_LIST': 'Hidden', 'POP_NSI_2017_LIST': 'Hidden', 'SETTL_NAME_LIST': 'Hidden', 'POP_DENSITY_NSI_2017_EVENT_ANNO': 'TextEdit', });
lyr__0.set('fieldLabels', {'POP_DENSITY_NSI_2017_EVENT_ANNO': 'no label', });
lyr__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});