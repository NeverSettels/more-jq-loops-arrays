$(document).ready(function(){

    $('#groceries').submit(function(event){
      var blanks = ['item1', 'item2', 'item3'];
      var capped = blanks.map(function(blank){
        return $('#'+blank).val().toUpperCase();
       
      });
      capped.sort();    
      capped.forEach(function(item){
        $('#item'+(capped.indexOf(item)+1)+'List').text(item);
      })

      $('#groceries').addClass('hide')

    event.preventDefault();
  });

});