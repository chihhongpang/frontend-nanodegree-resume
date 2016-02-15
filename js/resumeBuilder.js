/*
This is empty on purpose! Your code to build the resume will go here.
 */

// var name = "Chih-Hong James Pang";
// var role = "Software Developer";
// $("#main").append(name);

// var email = "example@gmail.com";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var picture = "images/fry.jpg";
// var welcomeMsg = "How are you doing today?";
// var skills = ["Java", "Team Work"];
var bio = { "name": "Chih-Hong James Pang",
			"role" : "Software Developer",
			"contacts" : {
				"mobile" : "123-456-7890",
				"email" : "example@gmail.com",
				"github" : "example",
				"twitter" : "example",
				"location" : "Markham, ON"
			},
			"welcomeMessage": "How are you doing today?",
			"skills" : ["Java", "Team Work"],
			"bioPic" : "images/fry.jpg"
};
// $("#main").prepend(bio.welcomeMsg);

var work = {
	"jobs" : [
		{
			"employer" : "IBM",
			"title" : "Software Developer",
			"location" : "Markham, ON",
			"dates" : "1 year",
			"description" : "Maintaining tools"
		}
	]
};
// work.position = "Software Developer";
// work.employer = "IBM";
// work.year = "1";
// work.city = "Markham, ON";

// var education = {};
// education["name"] = "Queen's University";
// education["year"] = "6";
// education["city"] = "Kingston, ON";

// $("#main").append(work["position"]);
// $("#main").append(education.name);

var education = {
	"schools": [
		{
			"name" : "Queen's University",
			"city" : "Kingston, ON",
			"degree" : "BComp",
			"major" : "Software Design Specialization",
			"graduation" : "2016",
			"url" : "http://www.queensu.ca/",
			"onlineCourses" : [
				{
					"title" : "JavaScript Basics",
					"school" : "Udacity",
					"dates" : "2016",
					"url" : "https://www.udacity.com/course/ud804"
				}
			]
		}
	]
};

var project = {
	"projects" : [
		{
			"title" : "project1",
			"dates" : "2016",
			"description" : "description",
			"images" : [
            	"http://placehold.it/350x150",
            	"http://placehold.it/300"
			]
		}
	]
};

