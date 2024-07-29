import '../TuitionFeePage/tutionFee.css'
import  predictLoan from './PredictTutionFeeLoan'
export default function TuitionFeePage() {
    return(<body><div class="container">
        <header>
            <h1>Student Loan Predictor</h1>
        </header>
        <main>
            <form id="loanPredictorForm">
                <label for="tuitionFee">Tuition Fee ($):</label>
                <input type="number" id="tuitionFee" name="tuitionFee" required/>

                <label for="livingExpenses">Living Expenses ($):</label>
                <input type="number" id="livingExpenses" name="livingExpenses" required/>

                <label for="years">Years of Study:</label>
                <input type="number" id="years" name="years" required/>

                <button type="button" onclick={()=>predictLoan()}>Predict Loan</button>
            </form>
            <div id="predictionResult"></div>
        </main>
        {/* <footer>
            <button onclick={()=>applyForLoan()}>Apply for Loan</button>
        </footer> */}
   </div></body>

    )
}