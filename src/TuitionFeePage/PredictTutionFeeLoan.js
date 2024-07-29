export default function predictLoan() {
    console.log("called====>");
    const tuitionFee = document.getElementById('tuitionFee').value;
    const livingExpenses = document.getElementById('livingExpenses').value;
    const years = document.getElementById('years').value;

    if (tuitionFee && livingExpenses && years) {
        const totalLoan = (parseFloat(tuitionFee) + parseFloat(livingExpenses)) * parseFloat(years);
        document.getElementById('predictionResult').innerText = `Estimated Loan Amount: $${totalLoan.toFixed(2)}`;
    } else {
        document.getElementById('predictionResult').innerText = 'Please fill in all fields.';
    }
}

// export  function applyForLoan() {
//     alert('Redirecting to loan application form...');
//     // Redirect to loan application page (replace URL with actual page)
//     window.location.href = 'https://example.com/apply';
// }

