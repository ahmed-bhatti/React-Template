import "./Navbar.css"

const Navbar = () => {
    return ( 
        <>
        
            <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid margin-b ">
    <a class="navbar-brand nab" href="#">StudioM4.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon hi"></span>
    </button>
    <div class="collapse navbar-collapse float-end" id="navbarNavDropdown">
      <ul class="navbar-nav margin  ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li><li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Live Demo
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Live Demo blocks 
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Buy Now</a>
        </li>
        <li> <i className="fa fa-shopping-cart "></i></li>
      </ul>
    </div>
  </div>
</nav>
           
          
        </>
     );
}
 
export default Navbar;