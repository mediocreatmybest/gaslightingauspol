jQuery(function ($) {
  console.log('start');
  $.get('example.csv', function (wholeTextFile) {
    //  console.log(wholeTextFile)
    var lines = wholeTextFile.split(/\n/),
      randomIndex = Math.floor(Math.random() * lines.length),
      randomLine = lines[randomIndex];
    console.log(randomIndex, randomLine);
    $('#headliner').html(randomLine.replace(/,/g, '<br>'));
  });
});
