function randomHeadliner() {
    $.getJSON('example1.json', function (data) {
        // set up variables
        var quotesArray = data.content;
        var randomIndex = Math.floor(Math.random() * quotesArray.length);
        var randomData = quotesArray[randomIndex];

        var quote = randomData.Quote;
        var antagonist = randomData.Antagonist;
        var antagonistId = randomData.Antagonists_id;

        var urlHtml = randomData.URL.map(function(url) {
            return "<a href='" + url + "'>" + url + "</a>";
        }).join(', ');

        var sourceType = randomData.Source_type.join(', ');
        var year = randomData.Year;
        var tags = randomData.Tags.join(', ');

        // JS Logging
        console.log(quote, antagonist, antagonistId, urlHtml, sourceType, year, tags);

        // Update the webpage with fetched data
        $('#headliner-quote').html("Quote: " + quote);
        $('#headliner-antagonist').html("- " + antagonist);
        $('#headliner-antagonist-id').html("Antagonist ID: " + antagonistId);
        $('#headliner-url').html("Context URL: " + urlHtml);
        $('#headliner-source-type').html("Source Type: " + sourceType);
        $('#headliner-year').html("Year: " + year);
        $('#headliner-tags').html("Tags: " + tags);
    });
}
