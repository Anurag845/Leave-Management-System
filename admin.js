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
        var password = $('#password').val();
		var email = $('#email').val();
		var age = $('#age').val();
		var dept = $('#dept').val();
		var contact = $('#contact').val();
		var year = $('#year').val();
		var roll = $('#roll').val();
		var div = $('#div').val();
		
		if(username== ''){
		  alert("Enter valid username");
		  $('input[type=text]#username').val("");
		  return false;
		}
		if(password== ''){
		  alert("Enter valid password");
		  $('input[type=text]#password').val("");
		  return false;
		}
		
		if(email== ''){
		  alert("Enter valid email");
		  $('input[type=text]#email').val("");
		  return false;
		}
		if(IsEmail(email)==false){
		  alert("Enter valid email");
		  $('input[type=text]#email').val("");
		  return false;
		}
		if(age== ''){
		  alert("Enter valid age");
		  $('input[type=text]#age').val("");
		  return false;
		}
		if(isNumber(age)==false){
		  alert("Enter valid age");
		  $('input[type=text]#age').val("");
		  return false;
		}
		if(contact== ''){
		  alert("Enter valid contact");
		  $('input[type=text]#contact').val("");
		  return false;
		}
		if(isNumber(contact)==false){
		  alert("Enter valid contact");
		  $('input[type=text]#contact').val("");
		  return false;
		}
		if(contact.length!=10){
		alert("Enter valid contact");
		$('input[type=text]#contact').val("");
		return false;
		}
		if(dept== ''){
		  alert("Enter valid dept");
		  $('input[type=text]#dept').val("");
		  return false;
		}
		if(isText(dept)==false){
		  alert("Enter valid dept");
		  $('input[type=text]#dept').val("");
		  return false;
		}
		if(year== ''){
		  alert("Enter valid year");
		  $('input[type=text]#year').val("");
		  return false;
		}
		if(isNumber(year)==false){
		  alert("Enter valid year");
		  $('input[type=text]#year').val("");
		  return false;
		}
		if(div== ''){
		  alert("Enter valid div");
		  $('input[type=text]#div').val("");
		  return false;
		}
		if(isNumber(div)==false){
		  alert("Enter valid div");
		  $('input[type=text]#div').val("");
		  return false;
		}
		if(roll== ''){
		  alert("Enter valid roll");
		  $('input[type=text]#roll').val("");
		  return false;
		}
		if(isNumber(roll)==false){
		  alert("Enter valid roll");
		  $('input[type=text]#roll').val("");
		  return false;
		}
    });
    
    
    $('#submit2').click(function(){
        var username = $('#usernamefac').val();
        var password = $('#passwordfac').val();
        var email = $('#emailfac').val();
		var age = $('#agefac').val();
		var dept = $('#deptfac').val();
		var contact = $('#contactfac').val();
		
	    if(username== ''){
		  alert("Enter valid usernamefac");
		  $('input[type=text]#usernamefac').val("");
		  return false;
		}
		if(password== ''){
		  alert("Enter valid passwordfac");
		  $('input[type=text]#passwordfac').val("");
		  return false;
		}
		if(email== ''){
		  alert("Enter valid emailfac");
		  $('input[type=text]#emailfac').val("");
		  return false;
		}
		if(IsEmail(email)==false){
		  alert("Enter valid emailfac");
		  $('input[type=text]#emailfac').val("");
		  return false;
		}
		if(age== ''){
		  alert("Enter valid agefac");
		  $('input[type=text]#agefac').val("");
		  return false;
		}
		if(isNumber(age)==false){
		  alert("Enter valid agefac");
		  $('input[type=text]#agefac').val("");
		  return false;
		}
		if(contact== ''){
		  alert("Enter valid contactfac");
		  $('input[type=text]#contactfac').val("");
		  return false;
		}
		if(isNumber(contact)==false){
		  alert("Enter valid contactfac");
		  $('input[type=text]#contactfac').val("");
		  return false;
		}
		if(contact.length!=10){
		alert("Enter valid contactfac");
		$('input[type=text]#contactfac').val("");
		return false;
		}
		if(dept== ''){
		  alert("Enter valid deptfac");
		  $('input[type=text]#deptfac').val("");
		  return false;
		}
		if(isText(dept)==false){
		  alert("Enter valid deptfac");
		  $('input[type=text]#deptfac').val("");
		  return false;
		}
	});
	
	$('#reset1').click(function(){
	    $('input[type=text]#username').val("");
        $('input[type=text]#password').val("");
        $('input[type=text]#email').val("");
        $('input[type=text]#age').val("");
        $('input[type=text]#contact').val("");
        $('input[type=text]#dept').val("");
        $('input[type=text]#year').val("");
        $('input[type=text]#div').val("");
        $('input[type=text]#roll').val("");
        return false;
	});
	
	$('#reset2').click(function(){
        $('input[type=text]#usernamefac').val("");
        $('input[type=text]#passwordfac').val("");
        $('input[type=text]#emailfac').val("");
        $('input[type=text]#agefac').val("");
        $('input[type=text]#contactfac').val("");
        $('input[type=text]#deptfac').val("");
        return false;
	});
});
  
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }
  else{
    return true;
  }
}

function isNumber(num){
    var regex = /^([0-9])+$/;
    if(!regex.test(num)) {
    return false;
  }
  else{
    return true;
  }
}

function isText(text){
    var regex = /^([A-Za-z])+$/;
    if(!regex.test(text)) {
    return false;
  }
  else{
    return true;
  }
}

