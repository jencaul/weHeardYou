$(document).click(function () {    
setTimeout(
  function() 
  {	
	  $('.node').each(function() {
		  if(this.id[0]=='i'){
		  $("#"+this.id).css("pointer-events", "none");
		  $("#"+this.id).css("background-color", "#999999");
		  console.log(this.id);
		  }
	  });
  }, 1000);
	});