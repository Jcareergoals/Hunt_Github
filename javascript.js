$(document).ready(function(){
	function displayName(data){
		console.log(data); 
		for(i in data){
			$('#content').append("<p><b>" + i + "</b>: " + data[i] + "</p>"); 
		}
	} 
	function getData(){
		$.get("https://api.github.com/users/jcareergoals", displayName);
	}
	$('#btn').click(function(){
		getData(); 
	}); 
}); 		