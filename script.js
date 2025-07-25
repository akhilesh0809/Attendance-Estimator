function validateForm() {
    let currentAttendance = +document.getElementById("currentAttendance").value.trim();
    let desired = +document.getElementById("desiredAttendance").value.trim();
    let totClasses = +document.getElementById("totalClasses").value.trim();
    let attended = +document.getElementById("attendedClasses").value.trim();
    let classes = +document.getElementById("classesPerDay").value;
    let content = "";
    if ( currentAttendance >= desired ) {
        content = "<h3>You've already met your desired attendance percentage!</h3>";
        document.querySelector(".results").innerHTML = content;
        return false;
    }
    desired = desired / 100;
    console.log("desired: " + desired);
    let x = (desired * totClasses - attended) / (1 - desired);
    x = Math.ceil(x);
    console.log("x: " + Math.ceil(x));
     
    let daysNeeded = Math.floor(x / classes);
    let classesNeeded = x % classes;
    console.log(daysNeeded);
    console.log(classesNeeded);
    content = `<h2>Results</h2>
<p>You need to attend ${x} more classes consecutively (without missing any) to reach ${desired * 100}% attendance.</p>
<p>More Specifically:</p>
<ul>
    <li>${daysNeeded} days</li>
    <li>${classesNeeded} classes</li>
</ul>`;
    document.querySelector(".results").innerHTML = content;
    return false;
}

