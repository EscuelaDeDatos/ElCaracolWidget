request = new XMLHttpRequest();
request.open('GET', 'https://spreadsheets.google.com/feeds/list/10rgKmYH1W6KW-n5K_x3Abg0cJ4MpJ1YiHq08F09BUq0/od6/public/values?alt=json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400){
    data = JSON.parse(request.responseText);
    var num = Math.floor((Math.random() * data.feed.entry.length) + 1);
    bullet = data.feed.entry[num]['gsx$bullet']['$t'];
    hashtag = data.feed.entry[num]['gsx$hashtag']['$t'];
    url = data.feed.entry[num]['gsx$url']['$t'];
    var chirasview = '<p>' + bullet + '</p><span>' + hashtag + '</span>';

    document.getElementById('widgetchiras').innerHTML='<link rel="stylesheet" type="text/css" href="http://phirequiem.com/projects/widget/demo/sexy.css"><div class="social_widget" onclick="window.open(\' ' + url + ' \', \'_blank\')"><div class="wid_card">' + chirasview + '</div></div>';
  } 
};

request.send();