const url = "http://localhost:5000/api/students";

const cardHTML = document.getElementById("card-group");

const fetchAsync = async () => {
    let response = await fetch(url);
    studentData = await response.json();
    const cardOutput = studentData.map((item) => {
        return renderStudent(item);
    });
    cardHTML.innerHTML = cardOutput.join("");
}
fetchAsync();

function renderStudent(item) {
    return `
    
    <div class="col-3">
        <div class="p-3 border bg-light"><a href="#"><li>Student: ${item.name};  Id: ${item.id};   Age: ${item.age};   Email: ${item.email}</li></div>
    </div>
        
    `;
};

const searchBox1 = document.getElementById("input1");
const searchButton1 = document.getElementById("button1");
const handleSearchName = (e) => {
    e.preventDefault();
    const nameQuery = searchBox1.value;
    const searchData = studentData.filter((e) => e.name === nameQuery);
    const searchValue = searchData.map((item) => {
        return `
        <div class="col-3">
        <div class="p-3 border bg-light"><a href="#"><li>Student: ${item.name};  Id: ${item.id};   Age: ${item.age};   Email: ${item.email}</li></div>
    </div>
    `;
    });
    cardHTML.innerHTML = searchValue.join("");
};
searchButton1.addEventListener("click", handleSearchName);

const searchBox2 = document.getElementById("input2");
const searchButton2 = document.getElementById("button2");
const handleSearchAge = (e) => {
    e.preventDefault();
    const ageQuery = searchBox2.value;
    const searchData = studentData.filter((e) => e.age == ageQuery);
    const searchValue = searchData.map((item) => {
        return `
        <div class="col-3">
        <div class="p-3 border bg-light"><a href="#"><li>Student: ${item.name};  Id: ${item.id};   Age: ${item.age};   Email: ${item.email}</li></div>
    </div>
    `;
    });
    cardHTML.innerHTML = searchValue.join("");
};
searchButton2.addEventListener("click", handleSearchAge);