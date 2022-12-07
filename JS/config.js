var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    accessToken: 'pk.eyJ1Ijoidm9ydG9uYSIsImEiOiJjbGJkNmVncWUwa2VtM3dueXc2OGdnNDdsIn0.gqxoAbC0xNvE06ko4sCGjQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Our Team',
    subtitle: 'Where is Everyone From?',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'Fleming College',
            alignment: 'left',
            hidden: false,
            title: 'Fleming College',
            image: 'Images/fleming.png',
            description: 'Bungi Consulting headquarters established in Lindsay, ON in 2022',
            location: {
                center: [-78.7408268,44.3410783],
                zoom: 14.5,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Sam',
            alignment: 'right',
            hidden: false,
            title: 'Samuel Pethick',
            image: 'Images/sam.jpg',
            description: 'Official Cartographer',
            location: {
                center: [-78.7712805, 44.3545731],
                zoom: 11.5,
                pitch: 40,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Jordan',
            alignment: 'left',
            hidden: false,
            title: 'Jordan Tishler',
            image: 'Images/Jordan.jpg',
            description: 'Spatial Analyst',
            location: {
                center: [-80.1211384, 43.9121321],
                zoom: 12.5,
                pitch: 40,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Vince',
            alignment: 'right',
            hidden: false,
            title: 'Vince Ortona',
            image: 'Images/vince.jpg',
            description: 'Programmer',
            location: {
                center: [-73.8519554,45.5590971],
                zoom: 10.5,
                pitch: 50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Francis',
            alignment: 'left',
            hidden: false,
            title: 'Francis Soriano',
            image: 'Images/Francis.jpg',
            description: 'Project Manager',
            location: {
                center: [55.1438121,25.1003766],
                zoom: 12.5,
                pitch: 50,
                bearing: 0,
                speed: 1,
                curve: 1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
