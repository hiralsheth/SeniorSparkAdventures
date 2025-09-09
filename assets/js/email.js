/* EmailJS integration for sending form submissions.
 *
 * To make the forms send real emails, replace the placeholder strings below with your
 * actual EmailJS public key, service ID and template IDs. You can obtain these by
 * creating a free account at https://www.emailjs.com/ and following the setup wizard.
 *
 * Each form is wired up by its ID and associated template ID. When the visitor
 * submits a form, this script prevents the default submission, gathers all form
 * fields into a single object, sends the data via EmailJS and then redirects
 * the user to a success page. If any error occurs, the user is still redirected
 * to the success page so the flow remains seamless.
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialise EmailJS with your public key
    emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

    /**
     * Attach a submit handler to a form which sends its contents via EmailJS and
     * then redirects to a success page.
     *
     * @param {string} formId     ID of the form element on the page
     * @param {string} templateId Template ID configured in your EmailJS account
     * @param {string} successUrl URL of the success page to redirect to after sending
     */
    function bindEmailForm(formId, templateId, successUrl) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Collect all fields into an object. Arrays are joined as comma separated.
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                // If multiple values exist for the same key (e.g. checkboxes), accumulate them
                if (data[key]) {
                    if (Array.isArray(data[key])) {
                        data[key].push(value);
                    } else {
                        data[key] = [data[key], value];
                    }
                } else {
                    data[key] = value;
                }
            });
            Object.keys(data).forEach(key => {
                if (Array.isArray(data[key])) {
                    data[key] = data[key].join(', ');
                }
            });

            // Send via EmailJS
            emailjs.send('YOUR_EMAILJS_SERVICE_ID', templateId, data)
                .then(function () {
                    // On success, redirect to the success page
                    window.location.href = successUrl;
                })
                .catch(function (error) {
                    console.error('EmailJS error:', error);
                    // Still redirect on error so the user sees the success page
                    window.location.href = successUrl;
                });
        });
    }

    // Attach forms: replace template IDs with your own from EmailJS dashboard
    bindEmailForm('scheduleForm', 'YOUR_TEMPLATE_ID_SCHEDULE', 'schedule-success.html');
    bindEmailForm('intakeForm', 'YOUR_TEMPLATE_ID_INTAKE', 'intake-success.html');
    bindEmailForm('contactForm', 'YOUR_TEMPLATE_ID_CONTACT', 'contact-success.html');
});