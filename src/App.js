
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (

    <div className="App">
     <head>
    <title>My E-Commerce Site</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="App.css"></link>
  </head>
  <body>
    <header>
      <style>
      background-image: url(snapshot_1648985182336.png);
    
      </style>
     
      <nav>
        <ul class= "list-group list-group-horizontal">
          <li class="list-group-item"><a href="#">Home</a></li>
          <li class="list-group-item"><a href="#">Shop</a></li>
          <li class="list-group-item"><a href="#">About Us</a></li>
          <li class="list-group-item"><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
    
    <main>
      <section id="hero">
      <h1>My E-Commerce Site</h1>
        <h2>Welcome to My E-Commerce Site</h2>
        <p>Find everything you need for your next project or purchase.</p>
        <button>Shop Now</button>
      </section>
      
      <section id="featured">
        <h2>Featured Products</h2>
        <ul id="featured-products"></ul>
      </section>
    </main>
    
    <footer>
      <p>&copy; 2023 My E-Commerce Site</p>
    </footer>
  </body>
    </div>
  );
}

export default App;
