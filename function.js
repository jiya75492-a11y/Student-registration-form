function getMarks(java, c, python, wtp, fco, rdbms, maths) {
    // 1. Total ane Average shodhavu
    const total = java + c + python + wtp + fco + rdbms + maths;
    const avg = total / 7;
    
    // 2. Simple Grade Logic
    let grade = "Fail";
    if (avg >= 75) grade = "Distinction";
    else if (avg >= 60) grade = "First Class";
    else if (avg >= 50) grade = "Second Class";
    else if (avg >= 35) grade = "Pass";

    // 3. Output Print karvu
    console.log("Total Marks: " + total + " / 700");
    console.log("Average: " + avg.toFixed(2) + "%");
    console.log("Grade: " + grade);
}

// Function call karvu
getMarks(85, 78, 92, 80, 68, 74, 89);