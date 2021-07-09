$.get('example.csv', function (wholeTextFile) {
    //  console.log(wholeTextFile)
    var lines = wholeTextFile.split(/\n/),
      randomIndex = Math.floor(Math.random() * lines.length),
      randomLine = lines[randomIndex];

    var result = randomLine.split(/,/);
    //console.log(result);
    var quote = result[0]
    var url = result[1]
    //console.log(randomIndex, randomLine);
    console.log(quote)
    console.log(url)
   $('#headliner').html("Quote: " + quote);
   $('#headliner-url').html("URL: <a href=\"" + url + "\"<\\>" + url + "</a>");
  });