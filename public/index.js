$(document).ready(function(){
    var music_for_programming_list = [
        {key: '01: Datassette',                 value: 'http://datashat.net/music_for_programming_1-datassette.mp3'},
        {key: '02: Sunjammer',                  value: 'http://datashat.net/music_for_programming_2-sunjammer.mp3'},
        {key: '03: Datassette',                 value: 'http://datashat.net/music_for_programming_3-datassette.mp3'},
        {key: '04: Com Truise',                 value: 'http://datashat.net/music_for_programming_4-com_truise.mp3'},
        {key: '05: Abe Mangger',                value: 'http://datashat.net/music_for_programming_5-abe_mangger.mp3'},
        {key: '06: Gods Of The New Age',        value: 'http://datashat.net/music_for_programming_6-gods_of_the_new_age.mp3'},
        {key: '07: Tahlhoff Garten + Untitled', value: 'http://datashat.net/music_for_programming_7-tahlhoff_garten_and_untitled.mp3'},
        {key: '08: Connectedness Locus',        value: 'http://datashat.net/music_for_programming_8-connectedness_locus.mp3'},
        {key: '09: Datassette',                 value: 'http://datashat.net/music_for_programming_9-datassette.mp3'},
        {key: '10: Unity Gain Temple',          value: 'http://datashat.net/music_for_programming_10-unity_gain_temple.mp3'},
        {key: '11: Miles Tilmann',              value: 'http://datashat.net/music_for_programming_11-miles_tilmann.mp3'},
        {key: '12: Forgotten Light',            value: 'http://datashat.net/music_for_programming_12-forgotten_light.mp3'},
        {key: '13: Matt Whitehead',             value: 'http://datashat.net/music_for_programming_13-matt_whitehead.mp3'},
        {key: '14: Tahlhoff Garten + Untitled', value: 'http://datashat.net/music_for_programming_14-tahlhoff_garten_and_untitled.mp3'},
        {key: '15: Dan Adeyemi',                value: 'http://datashat.net/music_for_programming_15-dan_adeyemi.mp3'},
        {key: '16: Silent Stelios',             value: 'http://datashat.net/music_for_programming_16-silent_stelios.mp3'},
        {key: '17: Graphplan',                  value: 'http://datashat.net/music_for_programming_17-graphplan.mp3'},
        {key: '18: Konx Om Pax',                value: 'http://datashat.net/music_for_programming_18-konx_om_pax.mp3'},
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
            if (music == null) {
                location.reload();
            }
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
