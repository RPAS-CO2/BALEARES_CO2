ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25831").setExtent([292880.945991, 4225114.279104, 699126.520099, 4515089.568209]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_MixtosCOSMgha_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mixtos COS (Mg/ha)<br />\
    <img src="styles/legend/MixtosCOSMgha_1_0.png" /> 35,0000<br />\
    <img src="styles/legend/MixtosCOSMgha_1_1.png" /> 45,0000<br />\
    <img src="styles/legend/MixtosCOSMgha_1_2.png" /> 55,0000<br />\
    <img src="styles/legend/MixtosCOSMgha_1_3.png" /> 65,0000<br />\
    <img src="styles/legend/MixtosCOSMgha_1_4.png" /> 75,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MixtosCOSMgha_1.png",
            attributions: ' ',
            projection: 'EPSG:25831',
            alwaysInRange: true,
            imageExtent: [345805.746312, 4280387.427243, 610831.908368, 4436097.498045]
        })
    });
var lyr_PinaresCOSMgha_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pinares COS (Mg/ha)<br />\
    <img src="styles/legend/PinaresCOSMgha_2_0.png" /> 35,0000<br />\
    <img src="styles/legend/PinaresCOSMgha_2_1.png" /> 45,0000<br />\
    <img src="styles/legend/PinaresCOSMgha_2_2.png" /> 55,0000<br />\
    <img src="styles/legend/PinaresCOSMgha_2_3.png" /> 65,0000<br />\
    <img src="styles/legend/PinaresCOSMgha_2_4.png" /> 75,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PinaresCOSMgha_2.png",
            attributions: ' ',
            projection: 'EPSG:25831',
            alwaysInRange: true,
            imageExtent: [345052.453425, 4279013.775509, 611009.153753, 4434856.780350]
        })
    });
var lyr_PinaresBiomasaMgha_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pinares  Biomasa (Mg/ha)<br />\
    <img src="styles/legend/PinaresBiomasaMgha_3_0.png" /> 14,00<br />\
    <img src="styles/legend/PinaresBiomasaMgha_3_1.png" /> 42,08<br />\
    <img src="styles/legend/PinaresBiomasaMgha_3_2.png" /> 70,16<br />\
    <img src="styles/legend/PinaresBiomasaMgha_3_3.png" /> 98,24<br />\
    <img src="styles/legend/PinaresBiomasaMgha_3_4.png" /> 126,32<br />\
    <img src="styles/legend/PinaresBiomasaMgha_3_5.png" /> 154,40<br />\
    <img src="styles/legend/PinaresBiomasaMgha_3_6.png" /> 182,48<br />\
    <img src="styles/legend/PinaresBiomasaMgha_3_7.png" /> 208,40<br />\
    <img src="styles/legend/PinaresBiomasaMgha_3_8.png" /> 230,00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PinaresBiomasaMgha_3.png",
            attributions: ' ',
            projection: 'EPSG:25831',
            alwaysInRange: true,
            imageExtent: [345052.453425, 4279013.775509, 611009.153753, 4434856.780350]
        })
    });
var lyr_MixtosBiomasaMgha_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Mixtos Biomasa (Mg/ha)<br />\
    <img src="styles/legend/MixtosBiomasaMgha_4_0.png" /> 14,00<br />\
    <img src="styles/legend/MixtosBiomasaMgha_4_1.png" /> 42,08<br />\
    <img src="styles/legend/MixtosBiomasaMgha_4_2.png" /> 70,16<br />\
    <img src="styles/legend/MixtosBiomasaMgha_4_3.png" /> 98,24<br />\
    <img src="styles/legend/MixtosBiomasaMgha_4_4.png" /> 126,32<br />\
    <img src="styles/legend/MixtosBiomasaMgha_4_5.png" /> 154,40<br />\
    <img src="styles/legend/MixtosBiomasaMgha_4_6.png" /> 182,48<br />\
    <img src="styles/legend/MixtosBiomasaMgha_4_7.png" /> 208,40<br />\
    <img src="styles/legend/MixtosBiomasaMgha_4_8.png" /> 230,00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MixtosBiomasaMgha_4.png",
            attributions: ' ',
            projection: 'EPSG:25831',
            alwaysInRange: true,
            imageExtent: [345805.746312, 4280387.427243, 610831.908368, 4436097.498045]
        })
    });
var format_Mixtos_5 = new ol.format.GeoJSON();
var features_Mixtos_5 = format_Mixtos_5.readFeatures(json_Mixtos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Mixtos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mixtos_5.addFeatures(features_Mixtos_5);
var lyr_Mixtos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mixtos_5, 
                style: style_Mixtos_5,
                popuplayertitle: 'Mixtos',
                interactive: false,
                title: '<img src="styles/legend/Mixtos_5.png" /> Mixtos'
            });
var format_Pinares_6 = new ol.format.GeoJSON();
var features_Pinares_6 = format_Pinares_6.readFeatures(json_Pinares_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_Pinares_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pinares_6.addFeatures(features_Pinares_6);
var lyr_Pinares_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pinares_6, 
                style: style_Pinares_6,
                popuplayertitle: 'Pinares',
                interactive: false,
                title: '<img src="styles/legend/Pinares_6.png" /> Pinares'
            });
var format_MUPBaleares_7 = new ol.format.GeoJSON();
var features_MUPBaleares_7 = format_MUPBaleares_7.readFeatures(json_MUPBaleares_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_MUPBaleares_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUPBaleares_7.addFeatures(features_MUPBaleares_7);
var lyr_MUPBaleares_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUPBaleares_7, 
                style: style_MUPBaleares_7,
                popuplayertitle: 'MUP Baleares',
                interactive: false,
                title: '<img src="styles/legend/MUPBaleares_7.png" /> MUP Baleares'
            });
var format_MUPComunaBunyola_8 = new ol.format.GeoJSON();
var features_MUPComunaBunyola_8 = format_MUPComunaBunyola_8.readFeatures(json_MUPComunaBunyola_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25831'});
var jsonSource_MUPComunaBunyola_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUPComunaBunyola_8.addFeatures(features_MUPComunaBunyola_8);
var lyr_MUPComunaBunyola_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUPComunaBunyola_8, 
                style: style_MUPComunaBunyola_8,
                popuplayertitle: 'MUP Comuna Bunyola',
                interactive: true,
    title: 'MUP Comuna Bunyola<br />\
    <img src="styles/legend/MUPComunaBunyola_8_0.png" /> Rodal 2b<br />\
    <img src="styles/legend/MUPComunaBunyola_8_1.png" /> Rodal 9c<br />\
    <img src="styles/legend/MUPComunaBunyola_8_2.png" /> Rodal 10<br />\
    <img src="styles/legend/MUPComunaBunyola_8_3.png" /> Rodales<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_MixtosCOSMgha_1.setVisible(true);lyr_PinaresCOSMgha_2.setVisible(true);lyr_PinaresBiomasaMgha_3.setVisible(true);lyr_MixtosBiomasaMgha_4.setVisible(true);lyr_Mixtos_5.setVisible(false);lyr_Pinares_6.setVisible(false);lyr_MUPBaleares_7.setVisible(true);lyr_MUPComunaBunyola_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MixtosCOSMgha_1,lyr_PinaresCOSMgha_2,lyr_PinaresBiomasaMgha_3,lyr_MixtosBiomasaMgha_4,lyr_Mixtos_5,lyr_Pinares_6,lyr_MUPBaleares_7,lyr_MUPComunaBunyola_8];
lyr_Mixtos_5.set('fieldAliases', {'Poligon': 'Poligon', });
lyr_Pinares_6.set('fieldAliases', {'Poligon': 'Poligon', });
lyr_MUPBaleares_7.set('fieldAliases', {'Nom_finca': 'Nom_finca', 'Min_Illa': 'Min_Illa', 'Min_Munici': 'Min_Munici', 'Min_Titula': 'Min_Titula', 'Util_pub': 'Util_pub', 'Cod_publ': 'Cod_publ', 'Sup_ha': 'Sup_ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_MUPComunaBunyola_8.set('fieldAliases', {'id': 'id', 'CUARTEL': 'CUARTEL', 'RODAL': 'RODAL', 'ÁREA (ha)': 'ÁREA (ha)', 'FICHA': 'FICHA', });
lyr_Mixtos_5.set('fieldImages', {'Poligon': 'TextEdit', });
lyr_Pinares_6.set('fieldImages', {'Poligon': 'TextEdit', });
lyr_MUPBaleares_7.set('fieldImages', {'Nom_finca': 'TextEdit', 'Min_Illa': 'TextEdit', 'Min_Munici': 'TextEdit', 'Min_Titula': 'TextEdit', 'Util_pub': 'TextEdit', 'Cod_publ': 'Range', 'Sup_ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_MUPComunaBunyola_8.set('fieldImages', {'id': 'TextEdit', 'CUARTEL': 'TextEdit', 'RODAL': 'TextEdit', 'ÁREA (ha)': 'TextEdit', 'FICHA': 'ExternalResource', });
lyr_Mixtos_5.set('fieldLabels', {'Poligon': 'no label', });
lyr_Pinares_6.set('fieldLabels', {'Poligon': 'no label', });
lyr_MUPBaleares_7.set('fieldLabels', {'Nom_finca': 'inline label - visible with data', 'Min_Illa': 'no label', 'Min_Munici': 'no label', 'Min_Titula': 'no label', 'Util_pub': 'no label', 'Cod_publ': 'no label', 'Sup_ha': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_MUPComunaBunyola_8.set('fieldLabels', {'id': 'no label', 'CUARTEL': 'no label', 'RODAL': 'inline label - visible with data', 'ÁREA (ha)': 'inline label - visible with data', 'FICHA': 'inline label - visible with data', });
lyr_MUPComunaBunyola_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});