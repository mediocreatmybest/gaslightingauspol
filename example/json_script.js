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
        var quoteIndex = randomData.Index;

        var urlHtml = randomData.URL.map(function(url) {
            return "<a href='" + url + "'>" + url + "</a>";
        }).join(', ');

        var sourceType = randomData.Source_type.join(', ');
        var year = randomData.Year;
        var tags = randomData.Tags.join(', ');

        // Create section we can start to modify output data
        if (antagonistId) {
            antagonist = "<a href='https://theyvoteforyou.org.au/mp.php?id=uk.org.publicwhip/member/" + antagonistId + "'>" + antagonist + "</a>";
        }

        // JS Logging
        console.log(quote, context, antagonist, antagonistId, urlHtml, sourceType, year, tags, quoteIndex);

        // Update the webpage with fetched data
        $('#headliner-quote').html("Quote: " + quote);
        $('#headliner-antagonist').html("-" + antagonist);
        $('#headliner-context').html("Let's set the scene:<br>" + context);
        $('#headliner-url').html("Sources: " + urlHtml);
        $('#headliner-source-type').html(sourceType);
        $('#headliner-year').html("Year: " + year);
        $('#headliner-tags').html(tags);
        $('#headliner-index').html(quoteIndex);
    });
}
