$(document).ready(function(){
	$.get("https://api.github.com/users/jcareergoals", displayName);
	function displayName(data){
		console.log(data); 
		for(i in data){
			$('#content').append("<p><b>" + i + "</b>: " + data[i] + "</p>"); 
		}
	} 
}); 		