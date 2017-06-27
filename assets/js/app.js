'use strict';
	
	$.getJSON("http://laboratoria.cuadra.co:9339/api/v1/students/",(data)=>{
		$.each(data,(i,obj)=>{
			$("ol").append("<li>"+obj.name+"</li>");

		});
	});

