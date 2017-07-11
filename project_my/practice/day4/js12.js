function palin(){
var str_entry=document.getElementById("str").value;
   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var ccount = 0;

	if(cstr==="") {
		alert("Nothing found!");
		return false;
	}

	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {

		if (cstr.length === 1) {
			alert("Entry is a palindrome.");
			return true;
		} else {

			ccount = (cstr.length - 1) / 2;
		}
	}

	for (var x = 0; x < ccount; x++) {

		if (cstr[x] != cstr.slice(-1-x)[0]) {
			alert("Entry is not a palindrome.");
			return false;
		}
	}
	alert("The entry is a palindrome.");
	return true;