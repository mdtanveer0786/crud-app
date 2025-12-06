const API_URL = "https://crud-app-rnp2.onrender.com/api/students";

async function addStudent() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, phone })
  });

  loadStudents();
}

async function loadStudents() {
  const res = await fetch(API_URL);
  const students = await res.json();

  let html = `
    <tr>
      <th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
    </tr>
  `;

  students.forEach(s => {
    html += `
      <tr>
        <td>${s.name}</td>
        <td>${s.email}</td>
        <td>${s.phone}</td>
        <td>
          <button onclick="deleteStudent('${s._id}')">Delete</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("studentTable").innerHTML = html;
}

async function deleteStudent(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadStudents();
}

loadStudents();