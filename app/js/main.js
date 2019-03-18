$(document).ready(function(){

  // Fetch / render JSON table data
  $.getJSON("code-test.json", function(result){

      // Sort object by APY high to low
      var sortedResult = result.sort(function (a, b){
        return b.apy - a.apy;
      });

      // Loop through data and display in table rows
      $.each(sortedResult, function(i, item){
        $("#rate-table tbody").append(
          "<tr><td class='no-heading'>" + item.name + "</td>" +
          "<td>" + item.apy + " %</td>" +
          "<td>$" + item.earnings.toFixed(2) + "</td></tr>"
        );
      });
    });

  // Tabs
  $('.tabber-tab').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tabber-tab').removeClass('active');
    $('.tabber-content').removeClass('active');

    $(this).addClass('active');
    $("#tab-" + tab_id).addClass('active');
  });

});
