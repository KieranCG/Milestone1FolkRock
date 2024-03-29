$(document).ready(function () {
    $("#modalForm").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted");
        // Get the form data
        const formData = $(this).serialize();
        console.log("Form data:", formData);
        // Send an AJAX request to handle form submission
        $.ajax({
            type: "POST",
            url: "https://formdump.codeinstitute.net/",
            data: formData,
            success: function (response) {
                // Update the content on the page to indicate successful submission with success style
                $("#formMessage").removeClass().addClass('success').html("<p>Form submitted successfully!</p>");
                $('#signupModal').modal('hide');
            },
            error: function (error) {
                // Update the content on the page to indicate error with error style
                $("#formMessage").removeClass().addClass('error').html("<p>Error submitting the form. Please try again.</p>");

                // Handle errors
                console.error('Error:', error);
            }
        });
    });
});

$(document).ready(function () {
    $("#contactForm").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitted");
        // Get the form data
        const formData = $(this).serialize();
        console.log("Form data:", formData);
        // Send an AJAX request to handle form submission
        $.ajax({
            type: "POST",
            url: "https://formdump.codeinstitute.net/",
            data: formData,
            success: function (response) {
                // Update the content on the page to indicate successful submission with success style
                $("#submissionMessage").removeClass().addClass('success').html("<p>Form submitted successfully!</p>");

                // Clear the form fields
                $("#contactForm")[0].reset();
            },
            error: function (error) {
                // Update the content on the page to indicate error with error style
                $("#submissionMessage").removeClass().addClass('error').html("<p>Error submitting the form. Please try again.</p>");
                // Handle errors if needed
                console.error('Error:', error);
            }
        });
    });
});