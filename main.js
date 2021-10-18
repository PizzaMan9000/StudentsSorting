var studentsList = [];

function submit_button() {
    for (var i = 1; i <= 4; i++) {
        var StudentName = document.getElementById("name_of_the_student_" + i).value;

        console.log(StudentName);
        studentsList.push(StudentName);
        
    }

    var studentsLength = studentsList.length;
    console.log(studentsLength);

    var displayList = [];
    for (var j = 0; j <studentsLength; j++) {

        displayList.push("<h4> NAME - " + studentsList[j] + "</h4>");
        console.log(displayList);
        
    }

    document.getElementById("display_name_with_commas").innerHTML = displayList;
    console.log(displayList);

    var removeCommas = displayList.join(" ");
    console.log(removeCommas);
    document.getElementById("display_name_without_commas").innerHTML = removeCommas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";


    

}

function sorting() {
    studentsList.sort();
    console.log(studentsList);

    var displaySorting = [];
    var studentsLength = studentsList.length;
    console.log(studentsLength);

    for (var i = 0; i < studentsLength; i++) {
        displaySorting.push("<h4> NAME -"+ studentsList[i] + "</h4>");
        console.log(displaySorting);
    }

    var withoutCommas = studentsList.join(" ");
    console.log(withoutCommas);


    document.getElementById("display_name_without_commas").innerHTML = withoutCommas;
}

