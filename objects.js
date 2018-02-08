///Student, teacher, section constructors:
///////////////////
var id = 126846;
function Student(firstName, lastName, grade)
{
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
}

function Teacher(firstName, lastName, subject)
{
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
}

function Section(name, maxSize, teacher)
{
    this.id = id++;
    this.name = name;
    this.maxSize = maxSize;
    this.students = [];
    this.currentSize = 0;
    this.teacher = teacher;
}