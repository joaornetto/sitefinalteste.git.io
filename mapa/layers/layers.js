var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EspciesAtropeladas2018_1 = new ol.format.GeoJSON();
var features_EspciesAtropeladas2018_1 = format_EspciesAtropeladas2018_1.readFeatures(json_EspciesAtropeladas2018_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspciesAtropeladas2018_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspciesAtropeladas2018_1.addFeatures(features_EspciesAtropeladas2018_1);
var lyr_EspciesAtropeladas2018_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EspciesAtropeladas2018_1, 
                style: style_EspciesAtropeladas2018_1,
                interactive: true,
                title: '<img src="styles/legend/EspciesAtropeladas2018_1.png" /> Espécies Atropeladas (2018)'
            });
var format_EstadodeSoPaulo_2 = new ol.format.GeoJSON();
var features_EstadodeSoPaulo_2 = format_EstadodeSoPaulo_2.readFeatures(json_EstadodeSoPaulo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstadodeSoPaulo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstadodeSoPaulo_2.addFeatures(features_EstadodeSoPaulo_2);
var lyr_EstadodeSoPaulo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstadodeSoPaulo_2, 
                style: style_EstadodeSoPaulo_2,
                interactive: true,
                title: '<img src="styles/legend/EstadodeSoPaulo_2.png" /> Estado de São Paulo '
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EspciesAtropeladas2018_1.setVisible(true);lyr_EstadodeSoPaulo_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EspciesAtropeladas2018_1,lyr_EstadodeSoPaulo_2];
lyr_EspciesAtropeladas2018_1.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Animal': 'Animal', 'Rodovia': 'Rodovia', 'Concession': 'Concession', });
lyr_EstadodeSoPaulo_2.set('fieldAliases', {});
lyr_EspciesAtropeladas2018_1.set('fieldImages', {'Latitude': '', 'Longitude': '', 'Animal': '', 'Rodovia': '', 'Concession': '', });
lyr_EstadodeSoPaulo_2.set('fieldImages', {});
lyr_EspciesAtropeladas2018_1.set('fieldLabels', {'Latitude': 'no label', 'Longitude': 'no label', 'Animal': 'header label', 'Rodovia': 'header label', 'Concession': 'header label', });
lyr_EstadodeSoPaulo_2.set('fieldLabels', {});
lyr_EstadodeSoPaulo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});