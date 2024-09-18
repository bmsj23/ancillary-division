// Toggle Department Information on the Index Page
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const departmentDiv = document.getElementById('departments');
  
  if (toggleButton && departmentDiv) {
    toggleButton.addEventListener('click', function () {
      if (departmentDiv.style.display === 'none') {
        departmentDiv.style.display = 'block';
        toggleButton.textContent = 'Hide Departments';
      } else {
        departmentDiv.style.display = 'none';
        toggleButton.textContent = 'Show Departments';
      }
    });
  }

  // Handle Weekly Updates Form Submission
  const updateForm = document.getElementById('updateForm');
  const submittedDiv = document.getElementById('submittedUpdate');
  
  if (updateForm) {
    updateForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent normal form submission
      
      const updateInput = document.getElementById('update').value;
      if (updateInput) {
        submittedDiv.innerHTML = `<p>Update Submitted: ${updateInput}</p>`;
      }
      document.getElementById('update').value = ""; // Clear the form
    });
  }

  // Load Department List on Directory Page
  const loadDepartmentsButton = document.getElementById('loadDepartments');
  const departmentList = document.getElementById('departmentList');

  if (loadDepartmentsButton && departmentList) {
    const departments = ['Cardiology', 'Neurology', 'Pediatrics', 'Oncology', 'Radiology'];

    loadDepartmentsButton.addEventListener('click', function () {
      departmentList.innerHTML = ""; // Clear existing list
      departments.forEach(dept => {
        const listItem = document.createElement('li');
        listItem.textContent = dept;
        departmentList.appendChild(listItem);
      });
    });
  }
});
