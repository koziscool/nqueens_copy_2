
var boardView = {

  model: solverModel,

  init: function() {
    var size = this.model.size;
    this.$grid = $('#board-grid');
    for( var row= 0; row < size; row++ ){
      var $rowDiv = $('<div class="row">')
      for( var col= 0; col < size; col++ ){
        var squareIndex = row * size + col;
        var $squareDiv = $('<div>');
        $squareDiv.addClass('square');
        if( (row + col) % 2 === 0 ) {
          $squareDiv.addClass('dark-square');
        } else {
          $squareDiv.addClass('light-square');          
        }

        $squareDiv.attr('id', 'square-' + squareIndex );
        $rowDiv.append($squareDiv);
      }

      this.$grid.append( $rowDiv );
    }
  },

  showSolutionView: function() {
    for( var s in this.model.solution ){
      var idString = '#square-' + this.model.solution[s];
      $(idString).addClass('has-queen');
    }
  },

};