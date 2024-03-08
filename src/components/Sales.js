import sale from "../Assets/images/sale_image.jpg"

function Sales(){
    return(
    <div class="sale_image">
    <img src={sale} alt="sale_image">
</img>    <div class="sale_image__offer">
      <h2>udemy flash sale! 24 hrs to save. </h2>
      <p>get the top courses for just 499 only/-
        just one day to save but a lifetime to learn
      </p>  
    </div>
   </div>
)}

export default Sales