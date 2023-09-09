function randomHeadliner() {
    $.getJSON('example2.json', function (data) {
        // set up variables
        var quotesArray = data.content;
        var randomIndex = Math.floor(Math.random() * quotesArray.length);
        var randomData = quotesArray[randomIndex];

        var quote = randomData.Quote;
        var context = randomData.Context;
        var antagonist = randomData.Antagonist;
        var antagonistId = randomData.Antagonists_id;

        var urlHtml = randomData.URL.map(function(url) {
            return "<a href='" + url + "'>" + url + "</a>";
        }).join(', ');

        var sourceType = randomData.Source_type.join(', ');
        var year = randomData.Year;
        var tags = randomData.Tags.join(', ');

        // JS Logging
        console.log(quote, context, antagonist, antagonistId, urlHtml, sourceType, year, tags);

        // Update the webpage with fetched data
        $('#headliner-quote').html("Quote: " + quote);
        $('#headliner-antagonist').html("-" + antagonist);
        $('#headliner-context').html("Let's set the scene:<br>" + context);
        $('#headliner-antagonist-id').html(antagonistId);
        $('#headliner-url').html("Sources: " + urlHtml);
        $('#headliner-source-type').html(sourceType);
        $('#headliner-year').html("Year: " + year);
        $('#headliner-tags').html(tags);
    });
}
