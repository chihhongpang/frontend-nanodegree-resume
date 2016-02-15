/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Chih-Hong James Pang";
var role = "Software Developer";
$("#main").append(name);

var email = "example@gmail.com";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var picture = "images/fry.jpg";
var welcomeMsg = "How are you doing today?";
var skills = ["Java", "Team Work"];
var bio = { "name": name,
			"role" : role,
			"email" : email,
			"picture" : picture,
			"welcomeMsg": welcomeMsg,
			"skills" : skills
};
$("#main").prepend(bio.welcomeMsg);
