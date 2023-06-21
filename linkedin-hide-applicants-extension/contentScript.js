
/**
 * Function to remove the total number of applicants from LinkedIn Page.
 */
async function removeApplicantsElements() {
  // Remove spans with class 'tvm__text--positive'
  const spansToRemove = document.querySelectorAll('span.tvm__text--positive');
  spansToRemove.forEach(function(span) {
    span.parentNode.removeChild(span);
  });

  // Remove list items with class 'job-card-container__applicant-count'
  const spansToRemove2 = document.querySelectorAll('li.job-card-container__applicant-count');
  spansToRemove2.forEach(function(span) {
    span.parentNode.removeChild(span);
  });

  // Remove spans with class 'jobs-unified-top-card__bullet'
  const spansToRemove3 = document.querySelectorAll('span.jobs-unified-top-card__bullet');
  spansToRemove3.forEach(function(span) {
    span.parentNode.removeChild(span);
  });
}

/**
 * Execute the code after the LinkedIn page has finished loading.
 */
window.addEventListener('load', function() {
  console.log("window.addEventListener Load");
  removeApplicantsElements();
  observeUrlChange();
});

/**
 * Observes changes DOM tree and calls removeApplicantsElements when an element changes. This required because LinkedIn changes the DOM after load event is finished.
 */
const observeUrlChange = () => {
  const body = document.querySelector("body");
  const observer = new MutationObserver(mutations => {
    removeApplicantsElements();
  });
  observer.observe(body, { childList: true, subtree: true });
};