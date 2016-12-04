/*
This is empty on purpose! Your code to build the resume will go here.
 */

//adding content to main
$("#main").append("My name is [name_here].");
var formattedName = HTMLheaderName.replace("%data%", "Carnegie Mellon University");

//$("#header").prepend(formattedName);

var role="Pittsburgh, Pennsylvania";


var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



var bio = {
   "name": "Charitard",
   "role": "pokemon",
   "contact_info": "mountain range",
   "pic" : "images/profile_pic.png",
   "msg": "RAWRRRR!!!!!",
   "skills": "pokemon battling, flying, ember, quick attack"
}

$("#main").append(bio);



