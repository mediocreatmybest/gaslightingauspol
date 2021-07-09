$("#refresh-button").onClick(function() {
    alert('click');
    $("#main-container").load("#main-container .headliner .headliner-url > *");
  }); 