// - Create a web interface with buttons and text fields that can operate all features as well as a display area for output
// - Build a table and use it to list the elements: students, techers, sections
// - Build an interface to add new students, teachers and sections
// - Build an interface to add/remove students to/from a section
// - Create the data structures outlined below
// - Build a search mechanism that locates students in the system and displays the sections that they are in
// - You can show and hide <div> content by setting the “display” attribute to “none” then show it again with  “inline”.
// - Position your <div> elements relative to each other.
// - You may want to brush up on global vs local vars in JavaScript.

////////







var allStudents = [];
var allTeachers = [];
var allCourses = [];

allStudents.push(new Student("Shaolin","Bao",11));
allStudents.push(new Student("Mateo","Hadeshian",12));
allStudents.push(new Student("Jaden","Yu",10));
allStudents.push(new Student("Luigi","Pasquini",9));
allStudents.push(new Student("Giovanni","Pasquini",12));

allTeachers.push(new Teacher("Masha","Albrecht","Math 2"));
allTeachers.push(new Teacher("Nakia","Baird","Math 3"));
allTeachers.push(new Teacher("Keldon","Clegg","US History"));
allTeachers.push(new Teacher("Matt","Albinson","CS"));
allTeachers.push(new Teacher("Carl","Rogers","English"));

allCourses.push(new Section("Math 2",30, "Masha Albrecht"));
allCourses.push(new Section("Math 3",25, "Nakia Baird"));
allCourses.push(new Section("US History",30, "Keldon Clegg"));
allCourses.push(new Section("CS",32, "Matt Albinson"));
allCourses.push(new Section("English",30, "Carl Rogers"));