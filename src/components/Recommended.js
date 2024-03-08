
import c2 from "../Assets/images/c2.jpg"
import c3 from "../Assets/images/c3.jpg"
import c4 from "../Assets/images/c4.jpg"


function Recommended(){
    return(
<div class="Recommended">
    <h1 class="Recommended__title">Recommended for you</h1>
    <p>pick the best fit</p>
    <div class="Recommended__container">
        <div class="course-card">
            <img src={c2} alt="card">

            </img>
            <p>2024 python data visualisation masterclass</p>
            <p>col steela</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>1999</del></p>

        </div>
        <div class="course-card">
            <img src={c2 } alt="card"></img>
            <p>2024 web Development bootcamp</p>
            <p>col steela</p>
            <p>4.9⭐⭐⭐</p>
            <p>449 <del>1999</del> </p>

        </div>
        <div class="course-card">
            <img src={c3} alt="card"></img>
            <p>2024 basic to advanceprogramming with udemy</p>
            <p>col steela</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>

        </div>
        <div class="course-card">
            <img src={c4} alt="card"></img>
            <p>2024 masterclass  ui/ux desinging</p>
            <p>col steela</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449<del>1999</del></p>

        </div>
    </div>
   </div>
    )}
    export default Recommended