var bio = {
   "name": "Kathleen Ruan",
   "role": "Student, Programmer, Hobby Artist, whatevers",
   "contacts": {
      "email": "kruan@andrew.cmu.edu",
      "github": "karuan",
      "twitter": "NA",
      "location": "Pittsburgh, Pennsylvania, United States"
   },
   "picture": "images/me.png",
   "welcomeMessage": "I'm currently a student at Carnegie Mellon University. Thanks for stopping by!",
   "skills": ["Java", "python", "Software Development", "C/C++", "Unity", "HTML5/CSS/JavaScript"]
};

var work = {
   "jobs": [
{
         "employer": "Carnegie Mellon Housing Services",
         "title": "Desk Service Assistant",
         "location": "Pittsburgh, PA",
         "datesWorked": "January 2017 - August 2015",
         "description": "Part time student staff working at residence house service desks, dunctioning as an entrance checkpoint and a customer serice representative for Housing Services."
      },     


 {
         "employer": "Children's National Medical Center",
         "title": "Research Assistant",
         "location": "Washington, DC",
         "datesWorked": "June 2015 - August 2015",
         "description": "I was hired to research the effects of deletion in the NF1 cancerous gene through use of mosaic analysis with double markers (MADM) technique using ImageJ and Excel."
      }
,
 {
         "employer": "Youth Building Bridges",
         "title": "English Tutor",
         "location": "Gansu, China",
         "datesWorked": "June 2014 - August 2014",
         "description": "Led summer classes for underpriviledged kids in their core curriculum with a focus on teaching English." 

      }
 


   ]
};

var education = {
   "schools": [
      { "name": "Carnegie Mellon University",
         "datesAttended": "2016 - Present",
         "location": "Pittsburgh, Pennsylvania, US",
         "degree": "B.Sc.in Computer Science",
         "major": "Computer Science",
         "minor": "Mathematics",
         "url": "www.cmu.edua"
      }      
   ],
   "onlineCourses": [
     { "school": "Udacity",
         "title": "Javascript Basics",
         "completed": "November 2016",
         "url": "https://www.udacity.com/course/ud804"
      },
      { "school": "Udacity",
         "title": "Intro to HTML and CSS",
         "completed": "October 2016",
         "url": "https://www.udacity.com/course/ud304"
      }   
    
   ]
};

var projects = {
   "projects": [
       {
         "title": "Pebble Study Tracker [Javascript, C], Hackathon",
         "datesWorked": "Spring 2017",
         "description": "Created a pebble app requesting and sending input from mobile device to watch using JavaScript messaging, and programming in C to store assignment names and blocks of time studied to persistent storage.",
         "images": ["images/pebble1.png","images/pebble2.png"],
         "url": "https://github.com/karuan/pebbleStudyTracker"
      } 





     /**
       {
         "title": "[Project Title Here]",
         "datesWorked": "[Month Year - Month Year]",
         "description": "[description goes here]"
         "images": ["images/filename.extension"],
         "url": "probably some gitpage #broke"
      } 
      **/
  ]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
   $("#header").append(HTMLskillsStart);

   for(i in bio.skills) {
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
   }
}

for(i in formattedContactInfo) {
   $("#topContacts").append(formattedContactInfo[i]);
   $("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

   if(work.jobs.length > 0) {
   
      $("#workExperience").append(HTMLworkStart);

      for(i in work.jobs) {
         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
         var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
         var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
         var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
         var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

         var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

         $(".work-entry:last").append(formattedEmployerWorkTitle);
         $(".work-entry:last").append(formattedWorkLocation);
         $(".work-entry:last").append(formattedDatesWorked);
         $(".work-entry:last").append(formattedWorkDescription);
      }

   }

}

displayWork();


projects.display = function() {
   if(projects.projects.length > 0) {
      for(i in projects.projects) {
         $("#projects").append(HTMLprojectStart);

         var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
         var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
         var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

         $(".project-entry:last").append(formattedProjectTitle);
         $(".project-entry:last").append(formattedProjectDates);
         $(".project-entry:last").append(formattedProjectDescription);

         for(img in projects.projects[i].images) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
            $(".project-entry:last").append(formattedProjectImage);
         }
         

      }
   }
}

projects.display();

education.display = function() {
   if(education.schools.length > 0 || education.onlineCourses.length > 0) {
      for(i in education.schools) {
         $("#education").append(HTMLschoolStart);

         var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
         var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
         var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
         var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);         
         var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
         var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

         $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
         $(".education-entry:last").append(formattedSchoolDates);
         $(".education-entry:last").append(formattedSchoolLocation);
         $(".education-entry:last").append(formattedSchoolMajor);
         $(".education-entry:last").append(formattedSchoolMinor);
      }

      if(education.onlineCourses.length > 0) {
         $("#education").append(HTMLonlineClasses);
         for(i in education.onlineCourses) {            
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

            $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
         }
      }
      
   }
}

education.display();

/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
         }
      },
      series: [{
            name: 'Java',
            color: 'rgba(223, 83, 83, .5)',
            data: [[2013, 3], [2012, 3]] 
         },
         {
            name: 'python',
            color: 'rgba(119, 152, 191, .5)',
            data: [[2016, 5], [2014, 2]]
         },
         {
            name: 'SQL',
            color: 'rgba(119, 152, 80, .5)',
            data: [[2016, 1]]
         },
                {
            name: 'C/C++',
            color: 'rgba(0, 102, 0, .5)',
            data: [[2016, 2], [2015, 1]]
         },
                {
            name: 'Javascript',
            color: 'rgba(204, 0, 0, .5)',
            data: [[2016, 1]]
         },
         {
            name: 'HTML/CSS',
            color: 'rgba(153, 51, 0, .5)',
            data: [[2016, 5], [2015, 1]]
         },
         {
            name: 'Web Development',
            color: 'rgba(0, 153, 102, .5)',
            data: [[2016, 2]]
         }

       ]
   });
});


$("#mapDiv").append(googleMap);
