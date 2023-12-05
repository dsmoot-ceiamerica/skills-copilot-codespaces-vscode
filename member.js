function skillsMember() {
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var memberSkills = document.getElementById("memberSkills").value;
    var memberSkills = memberSkills + member + " " + skills + "<br>";
    document.getElementById("memberSkills").innerHTML = memberSkills;
}