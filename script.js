
const labels = [
    'Dec 1',
    'Dec 2',
    'Dec 3',
    'Dec 4',
    'Dec 5',
    'Dec 6',
    'Dec 7',
    'Dec 8',
    'Dec 9',
    'Dec 10',
    'Dec 11',
    'Dec 12',
    'Dec 13',
    'Dec 14'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'Daily Cases (past 2 weeks)',
        backgroundColor: '#5E753F',
        borderColor: '#5E753F',
        data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
    }]
};

const data2 = {
    labels: [
        'Vaccinated',
        'Not Vaccinated'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [9, 1],
        backgroundColor: [
            '#5E753F',
            '#B4C2A3'
        ],
        hoverOffset: 4
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};
const config2 = {
    type: 'pie',
    data: data2,
};

const myChart = new Chart(
    document.getElementById('caseChart'),
    config
);
const myChart2 = new Chart(
    document.getElementById('case2Chart'),
    config2
);
anime({
    targets: '.no1',
    innerHTML: [0, 257510], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places 
    duration: 1500
});
anime({
    targets: '.no2',
    innerHTML: [0, 1365], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places 
    duration: 1500
});
anime({
    targets: '.no3',
    innerHTML: [0, 678], //start and end values
    easing: 'linear',
    round: 1, //rounds off to zero decimal places 
    duration: 1500
});
var hie = anime({
    targets: '.all',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.stagger(100, { start: 100 })
});

tippy('#bedok', {
    content: 'Bedok Polytechnic || 11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01, Singapore 469662 || 6343 1121',
    delay: 100
});
tippy('#bukit', {
    content: 'Bukit Batok Polytechnic || 50 Bukit Batok West Avenue 3, Singapore 659164 || 6343 1122',
    delay: 100
});
tippy('#redh', {
    content: 'Bukit Merah Polytechnic || 162 Bukit Merah Central Level 4, Singapore 150163 || 6343 1123',
    delay: 100
});
tippy('#cck', {
    content: 'Choa Chu Kang Polytechnic || 2 Teck Whye Crescent, Singapore 688846 || 6343 1124',
    delay: 100
});
tippy('#clementi', {
    content: 'Clementi Polytechnic || 451 Clementi Avenue 3, Singapore 120451 || 6343 1125',
    delay: 100
});
tippy('#ali', {
    content: 'Geylang Polytechnic || 21 Geylang East Central, Singapore 389707 || 6343 1126',
    delay: 100
});
tippy('#houg', {
    content: 'Hougang Polytechnic || 89 Hougang Avenue 4, Singapore 538829 || 6765 1121',
    delay: 100
});
tippy('#jurong', {
    content: 'Jurong Polytechnic || 190 Jurong East Avenue 1, Singapore 609788 || 6765 1122',
    delay: 100
});
tippy('#paya', {
    content: 'Marine Parade Polytechnic || 80 Marine Parade Central, Singapore 440080 || 6765 1123',
    delay: 100
});
tippy('#outr', {
    content: 'Outram Polytechnic || 3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937 || 6765 1124',
    delay: 100
});
tippy('#pasir', {
    content: 'Pasir Ris Polytechnic || 1 Pasir Ris Drive 4, Singapore 519457 || 6765 1125',
    delay: 100
});
tippy('#pioneer', {
    content: 'Pioneer Polytechnic || 26 Jurong West Street 61, Singapore 648201 || 6765 1126',
    delay: 100
});

$(document).ready(function () {
    $('#fullpage').fullpage({ //initialize
        //set options
        sectionsColor: ['#E4F5CE', '#E4F5CE', '#E4F5CE'],
        navigation: true,
        navigationPosition: 'right',
        anchors: ['s1', 's2', 's3'],
        afterLoad: function (origin, destination, direction) {
            if ((destination.index == 2) || (destination.index == 1) || (destination.index == 0)) { //section 2
                hie.play(); //anime.js play method
            }
        }
    });

    $('#example').DataTable({
        pageLength: 5,
    });
});
