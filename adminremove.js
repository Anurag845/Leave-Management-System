$(document).ready(function() {
    var radioValue = $("input[type=radio]:checked").val();
	if(radioValue == 'Student'){
        $("#Facform").hide();
        $("#Studform").show();
    }
    if(radioValue == 'Faculty'){
        $("#Facform").show();
        $("#Studform").hide();
    }

    $('#submit1').click(function(){
        var username = $('#username').val();
		
		if(username== ''){
		  alert("Enter valid username");
		  $('input[type=text]#username').val("");
		  return false;
		}
		
    });
    $('#submit2').click(function(){
        var username = $('#usernamefac').val();
		
	    if(username== ''){
		  alert("Enter valid usernamefac");
		  $('input[type=text]#usernamefac').val("");
		  return false;
		}
		
	});
	
	$('#reset1').click(function(){
	    $('input[type=text]#username').val("");
        return false;
	});
	
	$('#reset2').click(function(){
        $('input[type=text]#usernamefac').val("");
        return false;
	});
});

