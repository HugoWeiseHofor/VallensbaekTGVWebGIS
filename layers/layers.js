var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Antropogentlandskab_2 = new ol.format.GeoJSON();
var features_Antropogentlandskab_2 = format_Antropogentlandskab_2.readFeatures(json_Antropogentlandskab_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antropogentlandskab_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antropogentlandskab_2.addFeatures(features_Antropogentlandskab_2);
var lyr_Antropogentlandskab_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Antropogentlandskab_2, 
                style: style_Antropogentlandskab_2,
                popuplayertitle: 'Antropogent landskab',
                interactive: true,
                title: '<img src="styles/legend/Antropogentlandskab_2.png" /> Antropogent landskab'
            });
var format_Bundmorneflade_3 = new ol.format.GeoJSON();
var features_Bundmorneflade_3 = format_Bundmorneflade_3.readFeatures(json_Bundmorneflade_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bundmorneflade_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bundmorneflade_3.addFeatures(features_Bundmorneflade_3);
var lyr_Bundmorneflade_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bundmorneflade_3, 
                style: style_Bundmorneflade_3,
                popuplayertitle: 'Bundmoræneflade',
                interactive: true,
                title: '<img src="styles/legend/Bundmorneflade_3.png" /> Bundmoræneflade'
            });
var format_Erosionsdal_4 = new ol.format.GeoJSON();
var features_Erosionsdal_4 = format_Erosionsdal_4.readFeatures(json_Erosionsdal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Erosionsdal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Erosionsdal_4.addFeatures(features_Erosionsdal_4);
var lyr_Erosionsdal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Erosionsdal_4, 
                style: style_Erosionsdal_4,
                popuplayertitle: 'Erosionsdal',
                interactive: true,
                title: '<img src="styles/legend/Erosionsdal_4.png" /> Erosionsdal'
            });
var format_Marinflade_5 = new ol.format.GeoJSON();
var features_Marinflade_5 = format_Marinflade_5.readFeatures(json_Marinflade_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marinflade_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marinflade_5.addFeatures(features_Marinflade_5);
var lyr_Marinflade_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marinflade_5, 
                style: style_Marinflade_5,
                popuplayertitle: 'Marin flade',
                interactive: true,
                title: '<img src="styles/legend/Marinflade_5.png" /> Marin flade'
            });
var format_Strandvold_6 = new ol.format.GeoJSON();
var features_Strandvold_6 = format_Strandvold_6.readFeatures(json_Strandvold_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandvold_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandvold_6.addFeatures(features_Strandvold_6);
var lyr_Strandvold_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandvold_6, 
                style: style_Strandvold_6,
                popuplayertitle: 'Strandvold',
                interactive: true,
                title: '<img src="styles/legend/Strandvold_6.png" /> Strandvold'
            });
var format_S_7 = new ol.format.GeoJSON();
var features_S_7 = format_S_7.readFeatures(json_S_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_7.addFeatures(features_S_7);
var lyr_S_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S_7, 
                style: style_S_7,
                popuplayertitle: 'Sø',
                interactive: true,
                title: '<img src="styles/legend/S_7.png" /> Sø'
            });
var format_Vandlb100mbuffer_8 = new ol.format.GeoJSON();
var features_Vandlb100mbuffer_8 = format_Vandlb100mbuffer_8.readFeatures(json_Vandlb100mbuffer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb100mbuffer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb100mbuffer_8.addFeatures(features_Vandlb100mbuffer_8);
var lyr_Vandlb100mbuffer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb100mbuffer_8, 
                style: style_Vandlb100mbuffer_8,
                popuplayertitle: 'Vandløb 100m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb100mbuffer_8.png" /> Vandløb 100m buffer'
            });
var format_Vandlb20mbuffer_9 = new ol.format.GeoJSON();
var features_Vandlb20mbuffer_9 = format_Vandlb20mbuffer_9.readFeatures(json_Vandlb20mbuffer_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb20mbuffer_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb20mbuffer_9.addFeatures(features_Vandlb20mbuffer_9);
var lyr_Vandlb20mbuffer_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb20mbuffer_9, 
                style: style_Vandlb20mbuffer_9,
                popuplayertitle: 'Vandløb 20m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb20mbuffer_9.png" /> Vandløb 20m buffer'
            });
var format_Vandlb10mbuffer_10 = new ol.format.GeoJSON();
var features_Vandlb10mbuffer_10 = format_Vandlb10mbuffer_10.readFeatures(json_Vandlb10mbuffer_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb10mbuffer_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb10mbuffer_10.addFeatures(features_Vandlb10mbuffer_10);
var lyr_Vandlb10mbuffer_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb10mbuffer_10, 
                style: style_Vandlb10mbuffer_10,
                popuplayertitle: 'Vandløb 10m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb10mbuffer_10.png" /> Vandløb 10m buffer'
            });
var format_Vandlb2mbuffer_11 = new ol.format.GeoJSON();
var features_Vandlb2mbuffer_11 = format_Vandlb2mbuffer_11.readFeatures(json_Vandlb2mbuffer_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb2mbuffer_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb2mbuffer_11.addFeatures(features_Vandlb2mbuffer_11);
var lyr_Vandlb2mbuffer_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb2mbuffer_11, 
                style: style_Vandlb2mbuffer_11,
                popuplayertitle: 'Vandløb 2m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb2mbuffer_11.png" /> Vandløb 2m buffer'
            });
var format_Vandlb_12 = new ol.format.GeoJSON();
var features_Vandlb_12 = format_Vandlb_12.readFeatures(json_Vandlb_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb_12.addFeatures(features_Vandlb_12);
var lyr_Vandlb_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb_12, 
                style: style_Vandlb_12,
                popuplayertitle: 'Vandløb',
                interactive: true,
                title: '<img src="styles/legend/Vandlb_12.png" /> Vandløb'
            });
var format_Ser100mbuffer_13 = new ol.format.GeoJSON();
var features_Ser100mbuffer_13 = format_Ser100mbuffer_13.readFeatures(json_Ser100mbuffer_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser100mbuffer_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser100mbuffer_13.addFeatures(features_Ser100mbuffer_13);
var lyr_Ser100mbuffer_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser100mbuffer_13, 
                style: style_Ser100mbuffer_13,
                popuplayertitle: 'Søer 100m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser100mbuffer_13.png" /> Søer 100m buffer'
            });
var format_Ser20mbuffer_14 = new ol.format.GeoJSON();
var features_Ser20mbuffer_14 = format_Ser20mbuffer_14.readFeatures(json_Ser20mbuffer_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser20mbuffer_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser20mbuffer_14.addFeatures(features_Ser20mbuffer_14);
var lyr_Ser20mbuffer_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser20mbuffer_14, 
                style: style_Ser20mbuffer_14,
                popuplayertitle: 'Søer 20m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser20mbuffer_14.png" /> Søer 20m buffer'
            });
var format_Ser10mbuffer_15 = new ol.format.GeoJSON();
var features_Ser10mbuffer_15 = format_Ser10mbuffer_15.readFeatures(json_Ser10mbuffer_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser10mbuffer_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser10mbuffer_15.addFeatures(features_Ser10mbuffer_15);
var lyr_Ser10mbuffer_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser10mbuffer_15, 
                style: style_Ser10mbuffer_15,
                popuplayertitle: 'Søer 10m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser10mbuffer_15.png" /> Søer 10m buffer'
            });
var format_Ser2mbuffer_16 = new ol.format.GeoJSON();
var features_Ser2mbuffer_16 = format_Ser2mbuffer_16.readFeatures(json_Ser2mbuffer_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser2mbuffer_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser2mbuffer_16.addFeatures(features_Ser2mbuffer_16);
var lyr_Ser2mbuffer_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser2mbuffer_16, 
                style: style_Ser2mbuffer_16,
                popuplayertitle: 'Søer 2m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser2mbuffer_16.png" /> Søer 2m buffer'
            });
var format_Ser_17 = new ol.format.GeoJSON();
var features_Ser_17 = format_Ser_17.readFeatures(json_Ser_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser_17.addFeatures(features_Ser_17);
var lyr_Ser_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser_17, 
                style: style_Ser_17,
                popuplayertitle: 'Søer',
                interactive: true,
                title: '<img src="styles/legend/Ser_17.png" /> Søer'
            });
var format_Jordforureningvidenniveau2V2_18 = new ol.format.GeoJSON();
var features_Jordforureningvidenniveau2V2_18 = format_Jordforureningvidenniveau2V2_18.readFeatures(json_Jordforureningvidenniveau2V2_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jordforureningvidenniveau2V2_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jordforureningvidenniveau2V2_18.addFeatures(features_Jordforureningvidenniveau2V2_18);
var lyr_Jordforureningvidenniveau2V2_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jordforureningvidenniveau2V2_18, 
                style: style_Jordforureningvidenniveau2V2_18,
                popuplayertitle: 'Jordforurening videnniveau 2 (V2)',
                interactive: true,
                title: '<img src="styles/legend/Jordforureningvidenniveau2V2_18.png" /> Jordforurening videnniveau 2 (V2)'
            });
var format_Jordforureningvidenniveau1V1_19 = new ol.format.GeoJSON();
var features_Jordforureningvidenniveau1V1_19 = format_Jordforureningvidenniveau1V1_19.readFeatures(json_Jordforureningvidenniveau1V1_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jordforureningvidenniveau1V1_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jordforureningvidenniveau1V1_19.addFeatures(features_Jordforureningvidenniveau1V1_19);
var lyr_Jordforureningvidenniveau1V1_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jordforureningvidenniveau1V1_19, 
                style: style_Jordforureningvidenniveau1V1_19,
                popuplayertitle: 'Jordforurening videnniveau 1 (V1)',
                interactive: true,
                title: '<img src="styles/legend/Jordforureningvidenniveau1V1_19.png" /> Jordforurening videnniveau 1 (V1)'
            });
var format_RisikoforstningsskaderGEO_20 = new ol.format.GeoJSON();
var features_RisikoforstningsskaderGEO_20 = format_RisikoforstningsskaderGEO_20.readFeatures(json_RisikoforstningsskaderGEO_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoforstningsskaderGEO_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoforstningsskaderGEO_20.addFeatures(features_RisikoforstningsskaderGEO_20);
var lyr_RisikoforstningsskaderGEO_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RisikoforstningsskaderGEO_20, 
                style: style_RisikoforstningsskaderGEO_20,
                popuplayertitle: 'Risiko for sætningsskader (GEO)',
                interactive: true,
    title: 'Risiko for sætningsskader (GEO)<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_20_0.png" /> 0-0,01<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_20_1.png" /> 0,01-0,02<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_20_2.png" /> 0,02-0,05<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_20_3.png" /> 0,05-0,1<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_20_4.png" /> >0,1<br />' });
var format_Risikoforhavvandsindsivning_21 = new ol.format.GeoJSON();
var features_Risikoforhavvandsindsivning_21 = format_Risikoforhavvandsindsivning_21.readFeatures(json_Risikoforhavvandsindsivning_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Risikoforhavvandsindsivning_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Risikoforhavvandsindsivning_21.addFeatures(features_Risikoforhavvandsindsivning_21);
var lyr_Risikoforhavvandsindsivning_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Risikoforhavvandsindsivning_21, 
                style: style_Risikoforhavvandsindsivning_21,
                popuplayertitle: 'Risiko for havvandsindsivning',
                interactive: true,
    title: 'Risiko for havvandsindsivning<br />\
    <img src="styles/legend/Risikoforhavvandsindsivning_21_0.png" /> <br />' });
var format_RisikoforoversvmmelseKystdirektoratet_22 = new ol.format.GeoJSON();
var features_RisikoforoversvmmelseKystdirektoratet_22 = format_RisikoforoversvmmelseKystdirektoratet_22.readFeatures(json_RisikoforoversvmmelseKystdirektoratet_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoforoversvmmelseKystdirektoratet_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoforoversvmmelseKystdirektoratet_22.addFeatures(features_RisikoforoversvmmelseKystdirektoratet_22);
var lyr_RisikoforoversvmmelseKystdirektoratet_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RisikoforoversvmmelseKystdirektoratet_22, 
                style: style_RisikoforoversvmmelseKystdirektoratet_22,
                popuplayertitle: 'Risiko for oversvømmelse (Kystdirektoratet)',
                interactive: true,
                title: '<img src="styles/legend/RisikoforoversvmmelseKystdirektoratet_22.png" /> Risiko for oversvømmelse (Kystdirektoratet)'
            });
var format_Gammelkystlinje18701899_23 = new ol.format.GeoJSON();
var features_Gammelkystlinje18701899_23 = format_Gammelkystlinje18701899_23.readFeatures(json_Gammelkystlinje18701899_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gammelkystlinje18701899_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gammelkystlinje18701899_23.addFeatures(features_Gammelkystlinje18701899_23);
var lyr_Gammelkystlinje18701899_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gammelkystlinje18701899_23, 
                style: style_Gammelkystlinje18701899_23,
                popuplayertitle: 'Gammel kystlinje (1870-1899)',
                interactive: true,
                title: '<img src="styles/legend/Gammelkystlinje18701899_23.png" /> Gammel kystlinje (1870-1899)'
            });
var format_EngeogMoser18701899_24 = new ol.format.GeoJSON();
var features_EngeogMoser18701899_24 = format_EngeogMoser18701899_24.readFeatures(json_EngeogMoser18701899_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EngeogMoser18701899_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EngeogMoser18701899_24.addFeatures(features_EngeogMoser18701899_24);
var lyr_EngeogMoser18701899_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EngeogMoser18701899_24, 
                style: style_EngeogMoser18701899_24,
                popuplayertitle: 'Enge og Moser (1870-1899)',
                interactive: true,
                title: '<img src="styles/legend/EngeogMoser18701899_24.png" /> Enge og Moser (1870-1899)'
            });
var format_Frededeomrder_25 = new ol.format.GeoJSON();
var features_Frededeomrder_25 = format_Frededeomrder_25.readFeatures(json_Frededeomrder_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_25.addFeatures(features_Frededeomrder_25);
var lyr_Frededeomrder_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_25, 
                style: style_Frededeomrder_25,
                popuplayertitle: 'Fredede områder',
                interactive: true,
                title: '<img src="styles/legend/Frededeomrder_25.png" /> Fredede områder'
            });
var format_Spildevandskloakering_26 = new ol.format.GeoJSON();
var features_Spildevandskloakering_26 = format_Spildevandskloakering_26.readFeatures(json_Spildevandskloakering_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spildevandskloakering_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spildevandskloakering_26.addFeatures(features_Spildevandskloakering_26);
var lyr_Spildevandskloakering_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spildevandskloakering_26, 
                style: style_Spildevandskloakering_26,
                popuplayertitle: 'Spildevandskloakering',
                interactive: true,
                title: '<img src="styles/legend/Spildevandskloakering_26.png" /> Spildevandskloakering'
            });
var format_IngenKloakering_27 = new ol.format.GeoJSON();
var features_IngenKloakering_27 = format_IngenKloakering_27.readFeatures(json_IngenKloakering_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IngenKloakering_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IngenKloakering_27.addFeatures(features_IngenKloakering_27);
var lyr_IngenKloakering_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IngenKloakering_27, 
                style: style_IngenKloakering_27,
                popuplayertitle: 'Ingen Kloakering',
                interactive: true,
                title: '<img src="styles/legend/IngenKloakering_27.png" /> Ingen Kloakering'
            });
var format_VedtagetSeperatkloakering_28 = new ol.format.GeoJSON();
var features_VedtagetSeperatkloakering_28 = format_VedtagetSeperatkloakering_28.readFeatures(json_VedtagetSeperatkloakering_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VedtagetSeperatkloakering_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VedtagetSeperatkloakering_28.addFeatures(features_VedtagetSeperatkloakering_28);
var lyr_VedtagetSeperatkloakering_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VedtagetSeperatkloakering_28, 
                style: style_VedtagetSeperatkloakering_28,
                popuplayertitle: 'Vedtaget Seperatkloakering',
                interactive: true,
                title: '<img src="styles/legend/VedtagetSeperatkloakering_28.png" /> Vedtaget Seperatkloakering'
            });
var format_Vallensbk_29 = new ol.format.GeoJSON();
var features_Vallensbk_29 = format_Vallensbk_29.readFeatures(json_Vallensbk_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vallensbk_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vallensbk_29.addFeatures(features_Vallensbk_29);
var lyr_Vallensbk_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vallensbk_29, 
                style: style_Vallensbk_29,
                popuplayertitle: 'Vallensbæk',
                interactive: false,
                title: '<img src="styles/legend/Vallensbk_29.png" /> Vallensbæk'
            });
var group_Jordforurening = new ol.layer.Group({
                                layers: [lyr_Jordforureningvidenniveau2V2_18,lyr_Jordforureningvidenniveau1V1_19,],
                                fold: 'close',
                                title: 'Jordforurening'});

var group_Kbenhavn = new ol.layer.Group({
                                layers: [lyr_Vallensbk_29,],
                                fold: 'close',
                                title: 'Vallensbæk'});
var group_Vandloeb = new ol.layer.Group({
                                layers: [
                                    lyr_Vandlb_12,
                                    lyr_Vandlb2mbuffer_11,
                                    lyr_Vandlb10mbuffer_10,
                                    lyr_Vandlb20mbuffer_9,
                                    lyr_Vandlb100mbuffer_8,
                                ],
                                fold: 'close',
                                title: 'Vandløb'});

var group_soer = new ol.layer.Group({
                                layers: [
                                    lyr_Ser_17,
                                    lyr_Ser2mbuffer_16,
                                    lyr_Ser10mbuffer_15,
                                    lyr_Ser20mbuffer_14,
                                    lyr_Ser100mbuffer_13,
                                ],
                                fold: 'close',
                                title: 'Søer'});
var group_bagrundskort = new ol.layer.Group({
                                layers: [lyr_ESRIGraylight_0, lyr_OpenStreetMap_1,],
                                fold: 'close',
                                title: 'bagrundskort'});

var group_kloakering = new ol.layer.Group({
                                layers: [lyr_IngenKloakering_27, lyr_Spildevandskloakering_26, lyr_VedtagetSeperatkloakering_28],
                                fold: 'open',
                                title: 'Kloakering'});

                



var group_IKKEkort = new ol.layer.Group({
    layers: [
        group_kloakering
    ],
    fold: 'open',
    title: '"IKKE" kort'
})

var group_MSKEIKKEkort = new ol.layer.Group({
                                layers: [
                                lyr_RisikoforoversvmmelseKystdirektoratet_22,
                                lyr_RisikoforstningsskaderGEO_20,
                                group_soer, 
                                group_Vandloeb,
                                lyr_Risikoforhavvandsindsivning_21,
                                lyr_Gammelkystlinje18701899_23,
                                lyr_EngeogMoser18701899_24,  
                                group_Jordforurening,
                                lyr_Frededeomrder_25,
                            ],
                                fold: 'open',
                                title: '"MÅSKE IKKE" kort'
});

var group_GeomorfologiGEUS = new ol.layer.Group({
                                layers: [
                                    lyr_Bundmorneflade_3,
                                    lyr_S_7,
                                    lyr_Erosionsdal_4,
                                    lyr_Marinflade_5,
                                    lyr_Strandvold_6,
                                    lyr_Antropogentlandskab_2,
                                ],
                                fold: 'close',
                                title: 'Geomorfologi (GEUS)'});


lyr_ESRIGraylight_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Antropogentlandskab_2.setVisible(false);lyr_Bundmorneflade_3.setVisible(false);lyr_Erosionsdal_4.setVisible(false);lyr_Marinflade_5.setVisible(false);lyr_Strandvold_6.setVisible(false);lyr_S_7.setVisible(false);lyr_Vandlb100mbuffer_8.setVisible(false);lyr_Vandlb20mbuffer_9.setVisible(false);lyr_Vandlb10mbuffer_10.setVisible(false);lyr_Vandlb2mbuffer_11.setVisible(false);lyr_Vandlb_12.setVisible(false);lyr_Ser100mbuffer_13.setVisible(false);lyr_Ser20mbuffer_14.setVisible(false);lyr_Ser10mbuffer_15.setVisible(false);lyr_Ser2mbuffer_16.setVisible(false);lyr_Ser_17.setVisible(false);lyr_Jordforureningvidenniveau2V2_18.setVisible(true);lyr_Jordforureningvidenniveau1V1_19.setVisible(true);lyr_RisikoforstningsskaderGEO_20.setVisible(false);lyr_Risikoforhavvandsindsivning_21.setVisible(false);lyr_RisikoforoversvmmelseKystdirektoratet_22.setVisible(false);lyr_Gammelkystlinje18701899_23.setVisible(true);lyr_EngeogMoser18701899_24.setVisible(true);lyr_Frededeomrder_25.setVisible(true);lyr_Spildevandskloakering_26.setVisible(true);lyr_IngenKloakering_27.setVisible(true);lyr_VedtagetSeperatkloakering_28.setVisible(true);lyr_Vallensbk_29.setVisible(true);
var layersList = [group_bagrundskort, group_GeomorfologiGEUS, group_MSKEIKKEkort, group_IKKEkort];
lyr_Antropogentlandskab_2.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Bundmorneflade_3.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Erosionsdal_4.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Marinflade_5.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Strandvold_6.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_S_7.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Vandlb100mbuffer_8.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb20mbuffer_9.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb10mbuffer_10.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb2mbuffer_11.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb_12.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Ser100mbuffer_13.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'soetype': 'soetype', 'vanduuid': 'vanduuid', 'underminimumsoe': 'underminimumsoe', 'link': 'link', });
lyr_Ser20mbuffer_14.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'soetype': 'soetype', 'vanduuid': 'vanduuid', 'underminimumsoe': 'underminimumsoe', 'link': 'link', });
lyr_Ser10mbuffer_15.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'soetype': 'soetype', 'vanduuid': 'vanduuid', 'underminimumsoe': 'underminimumsoe', 'link': 'link', });
lyr_Ser2mbuffer_16.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'soetype': 'soetype', 'vanduuid': 'vanduuid', 'underminimumsoe': 'underminimumsoe', 'link': 'link', });
lyr_Ser_17.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'soetype': 'soetype', 'vanduuid': 'vanduuid', 'underminimumsoe': 'underminimumsoe', 'link': 'link', });
lyr_Jordforureningvidenniveau2V2_18.set('fieldAliases', {'fid': 'fid', 'Objekt_id': 'Objekt_id', 'SenesteInddateringsdato': 'SenesteInddateringsdato', 'Lokalitetsnr': 'Lokalitetsnr', 'Lokalitetetsforureningsstatus': 'Lokalitetetsforureningsstatus', 'Lokalitetetsadresse': 'Lokalitetetsadresse', 'Regionsnavn': 'Regionsnavn', 'Lokalitetsejerlavkode': 'Lokalitetsejerlavkode', 'Lokalitetsmatrikler': 'Lokalitetsmatrikler', 'Kortlaegningsdato': 'Kortlaegningsdato', 'Jordforureningsattester': 'Jordforureningsattester', });
lyr_Jordforureningvidenniveau1V1_19.set('fieldAliases', {'fid': 'fid', 'Objekt_id': 'Objekt_id', 'SenesteInddateringsdato': 'SenesteInddateringsdato', 'Lokalitetsnr': 'Lokalitetsnr', 'Lokalitetetsforureningsstatus': 'Lokalitetetsforureningsstatus', 'Lokalitetetsadresse': 'Lokalitetetsadresse', 'Regionsnavn': 'Regionsnavn', 'Lokalitetsejerlavkode': 'Lokalitetsejerlavkode', 'Lokalitetsmatrikler': 'Lokalitetsmatrikler', 'Kortlaegningsdato': 'Kortlaegningsdato', 'Jordforureningsattester': 'Jordforureningsattester', });
lyr_RisikoforstningsskaderGEO_20.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Risikoforhavvandsindsivning_21.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_RisikoforoversvmmelseKystdirektoratet_22.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Gammelkystlinje18701899_23.set('fieldAliases', {'fid': 'fid', });
lyr_EngeogMoser18701899_24.set('fieldAliases', {'fid': 'fid', });
lyr_Frededeomrder_25.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_length': 'Shape_length', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Spildevandskloakering_26.set('fieldAliases', {'fid': 'fid', 'doklink': 'doklink', 'uuid': 'uuid', 'temakode': 'temakode', 'temanavn': 'temanavn', 'objekt_id': 'objekt_id', 'systid_fra': 'systid_fra', 'oprettet': 'oprettet', 'oprindkode': 'oprindkode', 'oprindelse': 'oprindelse', 'statuskode': 'statuskode', 'status': 'status', 'cvr_kode': 'cvr_kode', 'cvrname': 'cvrname', 'bruger_id': 'bruger_id', 'link': 'link', 'navn1201': 'navn1201', 'type1201a': 'type1201a', 'vaerd1201a': 'vaerd1201a', 'type1201b': 'type1201b', 'vaerd1201b': 'vaerd1201b', 'staar1201': 'staar1201', 'sluaar1201': 'sluaar1201', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', });
lyr_IngenKloakering_27.set('fieldAliases', {'fid': 'fid', 'doklink': 'doklink', 'uuid': 'uuid', 'temakode': 'temakode', 'temanavn': 'temanavn', 'objekt_id': 'objekt_id', 'systid_fra': 'systid_fra', 'oprettet': 'oprettet', 'oprindkode': 'oprindkode', 'oprindelse': 'oprindelse', 'statuskode': 'statuskode', 'status': 'status', 'cvr_kode': 'cvr_kode', 'cvrname': 'cvrname', 'bruger_id': 'bruger_id', 'link': 'link', 'navn1201': 'navn1201', 'type1201a': 'type1201a', 'vaerd1201a': 'vaerd1201a', 'type1201b': 'type1201b', 'vaerd1201b': 'vaerd1201b', 'staar1201': 'staar1201', 'sluaar1201': 'sluaar1201', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', 'CG_ID': 'CG_ID', 'navn': 'navn', 'regionskode': 'regionskode', 'udtraeksdato': 'udtraeksdato', 'kommunekode': 'kommunekode', 'udenforkommuneinddeling': 'udenforkommuneinddeling', });
lyr_VedtagetSeperatkloakering_28.set('fieldAliases', {'fid': 'fid', 'doklink': 'doklink', 'uuid': 'uuid', 'temakode': 'temakode', 'temanavn': 'temanavn', 'objekt_id': 'objekt_id', 'systid_fra': 'systid_fra', 'oprettet': 'oprettet', 'oprindkode': 'oprindkode', 'oprindelse': 'oprindelse', 'statuskode': 'statuskode', 'status': 'status', 'cvr_kode': 'cvr_kode', 'cvrname': 'cvrname', 'bruger_id': 'bruger_id', 'link': 'link', 'navn1201': 'navn1201', 'type1201a': 'type1201a', 'vaerd1201a': 'vaerd1201a', 'type1201b': 'type1201b', 'vaerd1201b': 'vaerd1201b', 'staar1201': 'staar1201', 'sluaar1201': 'sluaar1201', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', });
lyr_Vallensbk_29.set('fieldAliases', {'fid': 'fid', 'navn': 'navn', });
lyr_Antropogentlandskab_2.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Bundmorneflade_3.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Erosionsdal_4.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Marinflade_5.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Strandvold_6.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_S_7.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Vandlb100mbuffer_8.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb20mbuffer_9.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb10mbuffer_10.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb2mbuffer_11.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb_12.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Ser100mbuffer_13.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'soetype': 'TextEdit', 'vanduuid': 'TextEdit', 'underminimumsoe': 'TextEdit', 'link': 'TextEdit', });
lyr_Ser20mbuffer_14.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'soetype': 'TextEdit', 'vanduuid': 'TextEdit', 'underminimumsoe': 'TextEdit', 'link': 'TextEdit', });
lyr_Ser10mbuffer_15.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'soetype': 'TextEdit', 'vanduuid': 'TextEdit', 'underminimumsoe': 'TextEdit', 'link': 'TextEdit', });
lyr_Ser2mbuffer_16.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'soetype': 'TextEdit', 'vanduuid': 'TextEdit', 'underminimumsoe': 'TextEdit', 'link': 'TextEdit', });
lyr_Ser_17.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'soetype': 'TextEdit', 'vanduuid': 'TextEdit', 'underminimumsoe': 'TextEdit', 'link': 'TextEdit', });
lyr_Jordforureningvidenniveau2V2_18.set('fieldImages', {'fid': 'TextEdit', 'Objekt_id': 'TextEdit', 'SenesteInddateringsdato': 'DateTime', 'Lokalitetsnr': 'TextEdit', 'Lokalitetetsforureningsstatus': 'TextEdit', 'Lokalitetetsadresse': 'TextEdit', 'Regionsnavn': 'TextEdit', 'Lokalitetsejerlavkode': 'Range', 'Lokalitetsmatrikler': 'TextEdit', 'Kortlaegningsdato': 'DateTime', 'Jordforureningsattester': 'TextEdit', });
lyr_Jordforureningvidenniveau1V1_19.set('fieldImages', {'fid': 'TextEdit', 'Objekt_id': 'TextEdit', 'SenesteInddateringsdato': 'DateTime', 'Lokalitetsnr': 'TextEdit', 'Lokalitetetsforureningsstatus': 'TextEdit', 'Lokalitetetsadresse': 'TextEdit', 'Regionsnavn': 'TextEdit', 'Lokalitetsejerlavkode': 'Range', 'Lokalitetsmatrikler': 'TextEdit', 'Kortlaegningsdato': 'DateTime', 'Jordforureningsattester': 'TextEdit', });
lyr_RisikoforstningsskaderGEO_20.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Risikoforhavvandsindsivning_21.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_RisikoforoversvmmelseKystdirektoratet_22.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Gammelkystlinje18701899_23.set('fieldImages', {'fid': 'TextEdit', });
lyr_EngeogMoser18701899_24.set('fieldImages', {'fid': 'TextEdit', });
lyr_Frededeomrder_25.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'Range', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'DateTime', 'Systid_til': 'DateTime', 'Oprettet': 'DateTime', 'Oprindkode': 'Range', 'Oprindelse': 'TextEdit', 'Statuskode': 'Range', 'Status': 'TextEdit', 'Off_kode': 'Range', 'Offentlig': 'TextEdit', 'CVR_kode': 'Range', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_length': 'TextEdit', 'Fred_tkode': 'Range', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'Range', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'Range', 'Gyldig_fra': 'DateTime', 'Gyldig_til': 'DateTime', });
lyr_Spildevandskloakering_26.set('fieldImages', {'fid': 'TextEdit', 'doklink': 'TextEdit', 'uuid': 'TextEdit', 'temakode': 'Range', 'temanavn': 'TextEdit', 'objekt_id': 'Range', 'systid_fra': 'TextEdit', 'oprettet': 'TextEdit', 'oprindkode': 'Range', 'oprindelse': 'TextEdit', 'statuskode': 'Range', 'status': 'TextEdit', 'cvr_kode': 'TextEdit', 'cvrname': 'TextEdit', 'bruger_id': 'TextEdit', 'link': 'TextEdit', 'navn1201': 'TextEdit', 'type1201a': 'Range', 'vaerd1201a': 'TextEdit', 'type1201b': 'Range', 'vaerd1201b': 'TextEdit', 'staar1201': 'Range', 'sluaar1201': 'Range', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datostart': 'Range', 'datoslut': 'Range', });
lyr_IngenKloakering_27.set('fieldImages', {'fid': 'TextEdit', 'doklink': 'TextEdit', 'uuid': 'TextEdit', 'temakode': 'Range', 'temanavn': 'TextEdit', 'objekt_id': 'Range', 'systid_fra': 'TextEdit', 'oprettet': 'TextEdit', 'oprindkode': 'Range', 'oprindelse': 'TextEdit', 'statuskode': 'Range', 'status': 'TextEdit', 'cvr_kode': 'TextEdit', 'cvrname': 'TextEdit', 'bruger_id': 'TextEdit', 'link': 'TextEdit', 'navn1201': 'TextEdit', 'type1201a': 'Range', 'vaerd1201a': 'TextEdit', 'type1201b': 'Range', 'vaerd1201b': 'TextEdit', 'staar1201': 'Range', 'sluaar1201': 'Range', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datostart': 'Range', 'datoslut': 'Range', 'CG_ID': 'Range', 'navn': 'TextEdit', 'regionskode': 'Range', 'udtraeksdato': 'DateTime', 'kommunekode': 'TextEdit', 'udenforkommuneinddeling': 'TextEdit', });
lyr_VedtagetSeperatkloakering_28.set('fieldImages', {'fid': 'TextEdit', 'doklink': 'TextEdit', 'uuid': 'TextEdit', 'temakode': 'TextEdit', 'temanavn': 'TextEdit', 'objekt_id': 'TextEdit', 'systid_fra': 'TextEdit', 'oprettet': 'TextEdit', 'oprindkode': 'TextEdit', 'oprindelse': 'TextEdit', 'statuskode': 'TextEdit', 'status': 'TextEdit', 'cvr_kode': 'TextEdit', 'cvrname': 'TextEdit', 'bruger_id': 'TextEdit', 'link': 'TextEdit', 'navn1201': 'TextEdit', 'type1201a': 'TextEdit', 'vaerd1201a': 'TextEdit', 'type1201b': 'TextEdit', 'vaerd1201b': 'TextEdit', 'staar1201': 'TextEdit', 'sluaar1201': 'TextEdit', 'datoforsl': 'TextEdit', 'datovedt': 'TextEdit', 'datoaflyst': 'TextEdit', 'datoikraft': 'TextEdit', 'datostart': 'TextEdit', 'datoslut': 'TextEdit', });
lyr_Vallensbk_29.set('fieldImages', {'fid': 'TextEdit', 'navn': 'TextEdit', });
lyr_Antropogentlandskab_2.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Bundmorneflade_3.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Erosionsdal_4.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Marinflade_5.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Strandvold_6.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_S_7.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Vandlb100mbuffer_8.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb20mbuffer_9.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb10mbuffer_10.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb2mbuffer_11.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb_12.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ser100mbuffer_13.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'soetype': 'no label', 'vanduuid': 'no label', 'underminimumsoe': 'no label', 'link': 'no label', });
lyr_Ser20mbuffer_14.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'soetype': 'no label', 'vanduuid': 'no label', 'underminimumsoe': 'no label', 'link': 'no label', });
lyr_Ser10mbuffer_15.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'soetype': 'no label', 'vanduuid': 'no label', 'underminimumsoe': 'no label', 'link': 'no label', });
lyr_Ser2mbuffer_16.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'soetype': 'no label', 'vanduuid': 'no label', 'underminimumsoe': 'no label', 'link': 'no label', });
lyr_Ser_17.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'soetype': 'no label', 'vanduuid': 'no label', 'underminimumsoe': 'no label', 'link': 'no label', });
lyr_Jordforureningvidenniveau2V2_18.set('fieldLabels', {'fid': 'no label', 'Objekt_id': 'no label', 'SenesteInddateringsdato': 'no label', 'Lokalitetsnr': 'no label', 'Lokalitetetsforureningsstatus': 'no label', 'Lokalitetetsadresse': 'no label', 'Regionsnavn': 'no label', 'Lokalitetsejerlavkode': 'no label', 'Lokalitetsmatrikler': 'no label', 'Kortlaegningsdato': 'no label', 'Jordforureningsattester': 'no label', });
lyr_Jordforureningvidenniveau1V1_19.set('fieldLabels', {'fid': 'no label', 'Objekt_id': 'no label', 'SenesteInddateringsdato': 'no label', 'Lokalitetsnr': 'no label', 'Lokalitetetsforureningsstatus': 'no label', 'Lokalitetetsadresse': 'no label', 'Regionsnavn': 'no label', 'Lokalitetsejerlavkode': 'no label', 'Lokalitetsmatrikler': 'no label', 'Kortlaegningsdato': 'no label', 'Jordforureningsattester': 'no label', });
lyr_RisikoforstningsskaderGEO_20.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Risikoforhavvandsindsivning_21.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_RisikoforoversvmmelseKystdirektoratet_22.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Gammelkystlinje18701899_23.set('fieldLabels', {'fid': 'no label', });
lyr_EngeogMoser18701899_24.set('fieldLabels', {'fid': 'no label', });
lyr_Frededeomrder_25.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_length': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Spildevandskloakering_26.set('fieldLabels', {'fid': 'no label', 'doklink': 'no label', 'uuid': 'no label', 'temakode': 'no label', 'temanavn': 'no label', 'objekt_id': 'no label', 'systid_fra': 'no label', 'oprettet': 'no label', 'oprindkode': 'no label', 'oprindelse': 'no label', 'statuskode': 'no label', 'status': 'no label', 'cvr_kode': 'no label', 'cvrname': 'no label', 'bruger_id': 'no label', 'link': 'no label', 'navn1201': 'no label', 'type1201a': 'no label', 'vaerd1201a': 'no label', 'type1201b': 'no label', 'vaerd1201b': 'no label', 'staar1201': 'no label', 'sluaar1201': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', });
lyr_IngenKloakering_27.set('fieldLabels', {'fid': 'no label', 'doklink': 'no label', 'uuid': 'no label', 'temakode': 'no label', 'temanavn': 'no label', 'objekt_id': 'no label', 'systid_fra': 'no label', 'oprettet': 'no label', 'oprindkode': 'no label', 'oprindelse': 'no label', 'statuskode': 'no label', 'status': 'no label', 'cvr_kode': 'no label', 'cvrname': 'no label', 'bruger_id': 'no label', 'link': 'no label', 'navn1201': 'no label', 'type1201a': 'no label', 'vaerd1201a': 'no label', 'type1201b': 'no label', 'vaerd1201b': 'no label', 'staar1201': 'no label', 'sluaar1201': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', 'CG_ID': 'no label', 'navn': 'no label', 'regionskode': 'no label', 'udtraeksdato': 'no label', 'kommunekode': 'no label', 'udenforkommuneinddeling': 'no label', });
lyr_VedtagetSeperatkloakering_28.set('fieldLabels', {'fid': 'no label', 'doklink': 'no label', 'uuid': 'no label', 'temakode': 'no label', 'temanavn': 'no label', 'objekt_id': 'no label', 'systid_fra': 'no label', 'oprettet': 'no label', 'oprindkode': 'no label', 'oprindelse': 'no label', 'statuskode': 'no label', 'status': 'no label', 'cvr_kode': 'no label', 'cvrname': 'no label', 'bruger_id': 'no label', 'link': 'no label', 'navn1201': 'no label', 'type1201a': 'no label', 'vaerd1201a': 'no label', 'type1201b': 'no label', 'vaerd1201b': 'no label', 'staar1201': 'no label', 'sluaar1201': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', });
lyr_Vallensbk_29.set('fieldLabels', {'fid': 'no label', 'navn': 'no label', });
lyr_Vallensbk_29.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});