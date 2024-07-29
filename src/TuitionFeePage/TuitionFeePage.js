import { useState } from 'react'
import '../TuitionFeePage/tutionFee.css'
import calculateLoan from './CalculateFeeLoan'
import  predictLoan from './CalculateFeeLoan'
export default function TuitionFeePage() {
    const [loanAmount, setLoanAmount] = useState(0)
    const [interestRate, setInterestRate] = useState(2.6)
    const [repaymentTerm, setRepaymentTerm] = useState(5)
    const [yearsUntilGraduation, setYearsUntilGraduation] = useState(1)

    function handleChangeLoanAmount(e) {
       setLoanAmount(e.target.value)
    }
    function handleChangeRepaymentTerm(e) {
        setRepaymentTerm(e.target.value)
     }

     function handleChangeGraduationYrs(e) {
        setYearsUntilGraduation(e.target.value)
     }
    return(<header>
        <div class="container">
            <h1>Student Loan Predictor</h1>
            <div class="calculator">
                <form class="loan-form">
                    <div class="form-group">
                        <label for="loanType">Loan Type</label>
                        <select id="loanType" name="loanType">
                            <option value="undergraduate">Undergraduate</option>
                            <option value="graduate">Graduate</option>
                            <option value="parent">Parent</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="loanAmount">Loan Amount</label>
                        <input type="number" id="loanAmount" name="loanAmount" placeholder="$ 5,000" required onChange={handleChangeLoanAmount}/>
                    </div>
                    <div class="form-group">
                        <label for="interestRate">Interest Rate (%)</label>
                        <input type="number" step="0.1" id="interestRate" name="interestRate" placeholder="2.6" disabled value={interestRate}/>
                    </div>
                    <div class="form-group">
                        <label for="repaymentTerm">Repayment Term</label>
                        <select id="repaymentTerm" name="repaymentTerm" onChange={handleChangeRepaymentTerm}>
                            <option value="5">5 Years</option>
                            <option value="10">10 Years</option>
                            <option value="15">15 Years</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="yearsUntilGraduation">Years Until Graduation</label>
                        <select id="yearsUntilGraduation" name="yearsUntilGraduation" onChange={handleChangeGraduationYrs}>
                            <option value="1">1 Year</option>
                            <option value="2">2 Years</option>
                            <option value="3">3 Years</option>
                            <option value="4">4 Years</option>
                        </select>
                    </div>
                    <button type="button" onClick={()=>calculateLoan({loanAmount,interestRate,repaymentTerm,yearsUntilGraduation})} class="calculate-btn">Calculate</button>
                </form>
                <div class="result">
                    <p>Monthly Payment<br/>(Principal + Interest)</p>
                    <h2 id="monthlyPayment">$0.00</h2>
                    <button class="apply-btn">Apply Now</button>
                </div>
            </div>
        </div>
        
    </header>
    )
}