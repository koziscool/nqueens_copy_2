
var controller = {

  model = solverNodel;
  view = boardView;

  init: function() {

    var start = new Date();
    console.log("start", start);

    this.model.init( size );
    this.view.init();

    this.model.solve();
    this.view.showSolutionView();

    var finish = new Date();
    console.log( "finish", finish);
    console.log( "elapsed", finish - start, "millilseconds" );
  }
}


$(document).ready( function(){
  controller.init(8);
});
