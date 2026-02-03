// Get existing data or create empty array
let applications = JSON.parse(localStorage.getItem("apps")) || [];

// FORM SUBMIT
if (document.getElementById("housingForm")) {
  document.getElementById("housingForm").addEventListener("submit", function(e){
    e.preventDefault();

    let app = {
      name: document.getElementById("name").value,
      income: document.getElementById("income").value,
      family: document.getElementById("family").value,
      type: document.getElementById("type").value,
      status: "Pending"
    };

    applications.push(app);
    localStorage.setItem("apps", JSON.stringify(applications));

    document.getElementById("msg").innerText = "Application Submitted!";
    this.reset();
  });
}

// ADMIN TABLE LOAD
if (document.getElementById("tableData")) {
  let table = document.getElementById("tableData");

  applications.forEach((app, index) => {
    let row = table.insertRow();

    row.insertCell(0).innerText = app.name;
    row.insertCell(1).innerText = app.income;
    row.insertCell(2).innerText = app.family;
    row.insertCell(3).innerText = app.type;
    row.insertCell(4).innerText = app.status;

    let action = row.insertCell(5);

    let approveBtn = document.createElement("button");
    approveBtn.innerText = "Approve";
    approveBtn.onclick = function() {
      applications[index].status = "Approved";
      localStorage.setItem("apps", JSON.stringify(applications));
      location.reload();
    };

    let rejectBtn = document.createElement("button");
    rejectBtn.innerText = "Reject";
    rejectBtn.onclick = function() {
      applications[index].status = "Rejected";
      localStorage.setItem("apps", JSON.stringify(applications));
      location.reload();
    };

    action.appendChild(approveBtn);
    action.appendChild(rejectBtn);
  });
}