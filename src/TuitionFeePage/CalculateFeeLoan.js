export default function calculateLoan(props) {

    let {loanAmount,interestRate,repaymentTerm,yearsUntilGraduation} =props
     loanAmount = parseFloat(loanAmount);
     interestRate = parseFloat(interestRate) / 100 / 12;
     repaymentTerm = parseFloat(repaymentTerm) * 12;

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -repaymentTerm));

    
    if (!isNaN(monthlyPayment)) {
        document.getElementById('monthlyPayment').innerText = `$${monthlyPayment.toFixed(2)}`;
    } else {
        document.getElementById('monthlyPayment').innerText = `$0.00`;
    }
}