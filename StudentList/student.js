let students = [
    { name:"Abhirami" , age:21},
    {name:"Ramya" , age:10},
    {name:"Prathyu" , age:25},
    {name: "RAP" , age:20}
];
function displayStudents()
 {
    const list = document.getElementById("studentlist");
    list.innerHTML ="";
    students.forEach((student, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${student.name} - Age: ${student.age}`;
        list.appendChild(li);
    });
}

function sortByName() {
    students.sort((a, b) => a.name.localeCompare(b.name));
    displayStudents();
}
 function sortByAge() {
    students.dort((a, b) => a.age - b.age);
    displayStudents();
}