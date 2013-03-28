$(document).ready(function(){
    var music_for_programming_list = [
        {key: '01: Datassette',                    value: 'http://datashat.net/music_for_programming_1-datassette.mp3'},
        {key: '02: Sunjammer',                     value: 'http://datashat.net/music_for_programming_2-sunjammer.mp3'},
        {key: '03: Datassette',                    value: 'http://datashat.net/music_for_programming_3-datassette.mp3'},
        {key: '04: Com Truise',                    value: 'http://datashat.net/music_for_programming_4-com_truise.mp3'},
        {key: '05: Abe Mangger',                   value: 'http://datashat.net/music_for_programming_5-abe_mangger.mp3'},
        {key: '06: Gods Of The New Age',           value: 'http://datashat.net/music_for_programming_6-gods_of_the_new_age.mp3'},
        {key: '07: Tahlhoff Garten + Untitled',    value: 'http://datashat.net/music_for_programming_7-tahlhoff_garten_and_untitled.mp3'},
        {key: '08: Connectedness Locus',           value: 'http://datashat.net/music_for_programming_8-connectedness_locus.mp3'},
        {key: '09: Datassette',                    value: 'http://datashat.net/music_for_programming_9-datassette.mp3'},
        {key: '10: Unity Gain Temple',             value: 'http://datashat.net/music_for_programming_10-unity_gain_temple.mp3'},
        // {key: '11: Miles Tilmann',
        // {key: '12: Forgotten Light',
        // {key: '13: Matt Whitehead',
        // {key: '14: Tahlhoff Garten + Untitled',
        // {key: '15: Dan Adeyemi',
        // {key: '16: Silent Stelios',
        // {key: '17: Graphplan',
        // {key: '18: Konx Om Pax',value: 'http://datashat.net/music_for_programming_18-konx_om_pax.mp3'},
    ];
    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            var music = music_for_programming_list.shift();
            $(this).jPlayer("setMedia", {
                mp3: music.value,
            }).jPlayer("play");
            $('.jp-title ul li').html(music.key);
        },
        ended: function() {
            var music = music_for_programming_list.shift();
            $(this).jPlayer("setMedia", {
                mp3: music.value,
            }).jPlayer("play");
            $('.jp-title ul li').html(music.key);
        },
        swfPath: "js",
        supplied: "mp3",
        wmode: "window",
    });
});
