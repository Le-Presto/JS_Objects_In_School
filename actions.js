//CREATING
//NEW OBJECTS
///////////////////////////////////////
function showAdd() {

    document.getElementById("add").innerHTML = "<div id = \"stus\">\n" +
        "            <input type=\"text\" id=\"stuFirst\" placeholder=\"Student First Name\" size=\"25\">\n" +
        "            <input type=\"text\" id=\"stuLast\" placeholder=\"Student Last Name\" size=\"25\">\n" +
        "            <select id=\"stuGrade\">\n" +
        "                <option value=\"9\">Freshman</option>\n" +
        "                <option value=\"10\">Sophomore</option>\n" +
        "                <option value=\"11\">Junior</option>\n" +
        "                <option value=\"12\">Senior</option>\n" +
        "            </select>\n" +
        "            <button id=\"addStu\" onclick=\"addStudent()\">Add Student</button>\n" +
        "            <div id=\"StudentConfirmed\"></div>\n" +
        "        </div>\n" +
        "        <div id=\"teas\">\n" +
        "            <input type=\"text\" id=\"teaFirst\" placeholder=\"Teacher First Name\" size=\"25\">\n" +
        "            <input type=\"text\" id=\"teaLast\" placeholder=\"Teacher Last Name\" size=\"25\">\n" +
        "            <input type=\"text\" id=\"teaSubj\" placeholder=\"Teacher Subject\" size=\"25\">\n" +
        "            <button id=\"addTea\" onclick=\"addTeacher()\">Add Teacher</button>\n" +
        "            <div id=\"TeacherConfirmed\"></div>\n" +
        "        </div>\n" +
        "        <div id=\"cous\">\n" +
        "            <input type=\"text\" id=\"courseTitle\" placeholder=\"Course Title\" size=\"25\">\n" +
        "            <select id=\"selectTea\">\n" +
        "            </select>\n" +
        "            <input type=\"number\" id=\"maxSize\" placeholder=\"Maximum Students\" size=\"25\" min=\"1\">\n" +
        "            <button id=\"addCou\" onclick=\"addSection()\">Add Section</button>\n" +
        "            <div id=\"CourseConfirmed\"></div>\n" +
        "            <button id=\"cancelAdd\" onclick=\"cancelAdd()\">Back</button>\ " +
        "        </div>" + "<br><br>";
    for(var i = 0; i < allTeachers.length; i++) {
        document.getElementById("selectTea").innerHTML += "<option value=" + i + ">"
            + allTeachers[i].firstName + " " + allTeachers[i].lastName + "</option>";
    }
}
function cancelAdd() {
    document.getElementById("add").innerHTML = "<button id=\"bigAdd\" onclick=\"showAdd()\">ADD</button>";
}
function addStudent() {
    var firstName = document.getElementById("stuFirst").value;
    var lastName = document.getElementById("stuLast").value;
    var grade = document.getElementById("stuGrade").value;
    var student = new Student(firstName, lastName, grade);
    if((firstName == "") || (lastName == "")) {
        document.getElementById("StudentConfirmed").innerHTML = "Error: Incomplete Student Name.";
        return false;

    } else {

        allStudents.push(student);
        document.getElementById("StudentConfirmed").innerHTML = "Student Successfully Added.";
        return true;
    }

}
function addTeacher() {
    var firstName = document.getElementById("teaFirst").value;
    var lastName = document.getElementById("teaLast").value;
    var subject = document.getElementById("teaSubj").value;
    var teacher = new Teacher(firstName, lastName, subject);
    if((firstName == "") || (lastName == "")) {
        document.getElementById("TeacherConfirmed").innerHTML = "Error: Incomplete Teacher Name.";
        return false;

    } else {

        allTeachers.push(teacher);
        document.getElementById("TeacherConfirmed").innerHTML = "Teacher Successfully Added.";
        return true;
    }
}
function addSection() {
    var courseTitle = document.getElementById("courseTitle").value;
    var maxSize = document.getElementById("maxSize").value;
    var inter = allTeachers[document.getElementById("selectTea").value];
    var teacher = inter.firstName + " " + inter.lastName;
    var course = new Section(courseTitle, maxSize, teacher);

    if((maxSize == "") || (courseTitle == "")) {
        document.getElementById("CourseConfirmed").innerHTML = "Error: Incomplete Data.";
        return false;

    } else {

        allCourses.push(course);
        document.getElementById("CourseConfirmed").innerHTML = "Course Successfully Added.";
        return true;
    }
}
///////////////////////////////////////
///



//LISTING OBJECTS
///////////////////////////////////////
function listStu() {
    var writtenList = "";
    for(var stu = 0; stu < allStudents.length; stu++) {
        writtenList += (allStudents[stu].firstName + " " + allStudents[stu].lastName + ". " + "Grade: " + allStudents[stu].grade + "<br><br>");
    }

    document.getElementById("view").innerHTML = "<button id=\"listStu\" onclick=\"listStu()\">Refresh List</button>\n" +
        "<br>" + writtenList + "<button id='hideStu' onclick='backToView(\"Stu\")'>Hide</button>" + "<br><br>";
    return writtenList;
}
function listTea() {
    var writtenList = "";
    for(var tea = 0; tea < allTeachers.length; tea++) {
        writtenList += (allTeachers[tea].lastName + ". " + "Subject: " + allTeachers[tea].subject + "<br><br>");
    }

    document.getElementById("view").innerHTML = "<button id=\"listTea\" onclick=\"listTea()\">Refresh List</button>\n" +
        "<br>" +  writtenList + "<button id='hideTea' onclick='backToView(\"Tea\")'>Hide</button>" + "<br><br>";
    return writtenList;
}
function listCourses() {
    var writtenList = "";
    for(var cou = 0; cou < allCourses.length; cou++) {
        writtenList += (allCourses[cou].name + " taught by " + allCourses[cou].teacher + "<br>Students Enrolled: " + allCourses[cou].students + "<br><br>");
    }

    document.getElementById("view").innerHTML =  "<button id=\"listCourses\" onclick=\"listCourses()\">Refresh List</button>\n" +
        "<br>" + writtenList + "<button id='hideCou' onclick='backToView(\"Cou\")'>Hide</button>" + "<br><br>";
    return writtenList;
}
function backToView() {
    document.getElementById("view").innerHTML =
        "<button id=\"listStu\" onclick=\"listStu()\">List Students</button>\n" + "<br>" +
        "        <button id=\"listTea\" onclick=\"listTea()\">List Teachers</button>\n" + "<br>" +
        "        <button id=\"listCourses\" onclick=\"listCourses()\">List Courses</button>\n" + "<br>" +
        "        <button id=\"cancelList\" onclick='showView()'>Back</button> " + "<br><br>";
}
function showView() {
    document.getElementById("view").innerHTML = "<button id=\"bigView\" onclick=\"backToView()\">VIEW</button>";
}
///////////////////////////////////////
///


//MANAGING &
//MOVING OBJECTS
///////////////////////////////////////
function showManage() {
    document.getElementById("manage").innerHTML = "<select id=\"selectStu\">            \n" +
        "        </select>" + "<br>" +
        "        <select id=\"selectCou\">            \n" +
        "        </select>" + "<br>" +
        "        <button id=\"putStu\" onclick=\"addStudentToSection()\">Add Student to Section</button>\n" + "<br>" +
        "        <button id=\"putStu\" onclick=\"removeStudentFromSection()\">Remove Student from Section</button>\n" + "<br>" +
        "        <div id=\"manageConfirm\"></div>\n" + "<br>" +
        "        <button id='backManage' onclick='backToManage()'>Back</button> ";
    for(var i = 0; i < allStudents.length; i++) {
        document.getElementById("selectStu").innerHTML += "<option value=" + i + ">"
        + allStudents[i].firstName + " " + allStudents[i].lastName + ". ID: " + allStudents[i].id +"</option>";
    }
    for(var f = 0; f < allCourses.length; f++) {
        document.getElementById("selectCou").innerHTML += "<option value=" + f + ">" + allCourses[f].name + "</option>";
    }
}
function backToManage() {
    document.getElementById("manage").innerHTML = "<button id=\"bigManage\" onclick=\"showManage()\">MANAGE</button>";
}
function addStudentToSection() {
    var student = allStudents[document.getElementById("selectStu").value];
    var course = allCourses[document.getElementById("selectCou").value];
    course.currentSize += 1;
    if(course.students.indexOf(" " + student.firstName + " " + student.lastName) == -1) {
        course.students.push(" " + student.firstName + " " + student.lastName);
    }
    document.getElementById("manageConfirm").innerHTML = student.firstName + " added to " + course.name;
}


function removeStudentFromSection() {
    var student = allStudents[document.getElementById("selectStu").value];
    var course = allCourses[document.getElementById("selectCou").value];
    course.currentSize -= 1;
    course.students.splice(student.firstName + " " + student.lastName);
    document.getElementById("manageConfirm").innerHTML = student.firstName + " removed from " + course.name;
}
///////////////////////////////////////
///


