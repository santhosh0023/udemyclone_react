function Navbar(){
    return(
<div class="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1-title">udemy</h1>
        </div>
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "#080808"}}></i>
            <input placeholder="search for anything here,tech,business,art">
          </input>
        </div>
        <div class="navbar__s3">
           <p>courses</p>
            <p>my learning</p> 
           <div class="mylearning">
            <p>mylearning</p>
            <div class="mylearning__popup">
                <p>you did not purchase anything yet</p>
            </div>
           </div>
           <i class="fa-solid fa-cart-shopping" ></i>
           <i class="fa-solid fa-bell" ></i>
           <i class="fa-solid fa-user" ></i>
        </div>
        <div class="navbar__s4">
            <i class="fa-solid fa-bars"></i>
        </div>
    
    </div>
    )
}
export default Navbar