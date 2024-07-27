document.addEventListener("DOMContentLoaded", function() {
    // Fetch sign-up details
    fetch("fetch_sign_updetails.php")
        .then(response => response.json())
        .then(data => {
            // Display sign-up details in the admin panel
            const signUpDetailsDiv = document.getElementById("signUpDetails");
            signUpDetailsDiv.innerHTML = "<h2 class='section-heading'>Sign-up Details</h2>";
            data.forEach(user => {
                signUpDetailsDiv.innerHTML += `<div class='item'>Username: ${user.username}, Password: ${user.password}</div>`;
            });
        });

    // Fetch worker requests
    fetch("get_worker_requests.php")
        .then(response => response.json())
        .then(data => {
            // Display worker requests in the admin panel
            const workerRequestsDiv = document.getElementById("workerRequests");
            workerRequestsDiv.innerHTML = "<h2 class='section-heading'>Worker Requests</h2>";
            data.forEach(request => {
                workerRequestsDiv.innerHTML += `<div class='item'>Country: ${request.country}, Age: ${request.age}, Skills: ${request.skills}</div>`;
            });
        });

    // Fetch contact submissions
    fetch("fetch_contact_submissions.php")
        .then(response => response.json())
        .then(data => {
            // Display contact submissions in the admin panel
            const contactSubmissionsDiv = document.getElementById("contactSubmissions");
            contactSubmissionsDiv.innerHTML = "<h2 class='section-heading'>Contact Submissions</h2>";
            data.forEach(submission => {
                contactSubmissionsDiv.innerHTML += `<div class='item'>Name: ${submission.name}, Email: ${submission.email}, Message: ${submission.message}</div>`;
            });
        });
});
