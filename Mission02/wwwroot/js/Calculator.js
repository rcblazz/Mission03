$("#btnSend").click(function () {

    var finalGradePer = (($("#assignments").val() * .55) + ($("#groupProject").val() * .05) + ($("#quizzes").val() * .10) + ($("#exams").val() * .20) + ($("#intex").val() * .10)).toFixed(2); // get final percentage and round decimals
    var finalLetterGrade = ""; // declare letter grade variable

    // get letter grade based of percentage
    if (finalGradePer >= 94) {
        finalLetterGrade = "A"
    } else if (finalGradePer < 94 & finalLetterGrade >=90) {
        finalLetterGrade = "A-"
    } else if (finalGradePer < 90 & finalLetterGrade >= 87) {
        finalLetterGrade = "B+"
    } else if (finalGradePer < 87 & finalLetterGrade >= 84) {
        finalLetterGrade = "B"
    } else if (finalGradePer < 84 & finalLetterGrade >= 80) {
        finalLetterGrade = "B-"
    } else if (finalGradePer < 80 & finalLetterGrade >= 77) {
     finalLetterGrade = "C+"
    } else if (finalGradePer < 77 & finalLetterGrade >= 74) {
        finalLetterGrade = "C"
    } else if (finalGradePer < 74 & finalLetterGrade >= 70) {
        finalLetterGrade = "C-"
    } else if (finalGradePer < 70 & finalLetterGrade >= 67) {
        finalLetterGrade = "D+"
    } else if (finalGradePer < 67 & finalLetterGrade >= 64) {
         finalLetterGrade = "D"
    } else if (finalGradePer < 64 & finalLetterGrade >= 60) {
        finalLetterGrade = "D-"
    } else {
        finalLetterGrade = "E"
    }

    alert("Final Grade Percentage: " + finalGradePer + "%" + " " +
        "Final Letter Grade: " + finalLetterGrade)
})