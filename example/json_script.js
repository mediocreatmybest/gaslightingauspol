function randomHeadliner(){
    $.getJSON('example.json', function (data) {
        var randomIndex = Math.floor(Math.random() * data.length);
        var randomData = data[randomIndex];

        var quote = randomData.quote;
        var url = randomData.url;

        console.log(quote);
        console.log(url);
        $('#headliner').html("Quote: " + quote);
        $('#headliner-url').html("URL: <a href='" + url + "'>" + url + "</a>");
    });
}