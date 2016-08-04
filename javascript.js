$(document).ready(function(){
	// HANDLES RESPONSE
	function displayName(data){
		if(typeof(data) === 'object'){
			$('#content').html("");   // clears the #content element
			for(i in data){
				$('#content').append("<p><b>" + i + "</b>: " + data[i] + "</p>"); 
			}
		} else {
			$('#content').html("<p>No data could be located for that username</p>"); 
		}
	} 
	// GETS DATA FROM API 
	function getData(data){
		$.get("https://api.github.com/users/" + data, displayName);
		$('#username').val(""); 
	}
	// FORM 
	$('form').submit(function(){
		var user = $('#username').val(); 
		if(user.length > 1){ 
			getData(user);	
		} else {
			$('#content').html("<p class='center'>Please enter a valid username (e.g. Jcareergoals )</p>");
		}
		return false; 	// prevents page from refreshing
	});
}); 		