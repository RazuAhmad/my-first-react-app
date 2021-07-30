import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const personArray = [
    {
      name: "Mohammed Abdur Rahman",
      profession: "Web developer",
      about: "An expert level web developer working for three years",
    },

    {
      name: "Mohammad abdur zafoor",
      profession: "Content writing",
      about: "A devoted content writer",
    },

    {
      name: "Mohammad mostafa",
      profession: "Teacher",
      about: "An ideal teacher who cares about every student",
    },

    {
      name: "Mohammad anisul",
      profession: "selfishness",
      about: "Great coward selfish leader of all time in muslim nation",
    },
  ];

  const products = [
    {
      img: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/lightroom.svg",
      name: "Photography  (20GB)",
      price: "US$9.99",
      productDetails:
        "Lightroom, Lightroom Classic, Photoshop on desktop and iPad, and 20GB of cloud storage (1TB available).",
    },
    {
      img: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/acrobat.svg",
      name: "Acrobat Pro",
      price: "US$14.99",
      productDetails:
        "The complete PDF solution for working anywhere (includes desktop, web, and mobile access).",
    },
    {
      img: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/premiere.svg",
      name: "Premiere Pro",
      price: "US$20.99",
      productDetails:
        "Create beautiful graphics, photos, and art on desktop and iPad. Comes with Adobe Fresco for drawing and painting.",
    },
    {
      img: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg",
      name: "Illustrator",
      price: "US$9.99",
    },
    {
      img: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/incopy.svg",
      name: "InCopy",
      price: "US$4.99",
    },
    {
      img: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/xd.svg",
      name: "Adobe XD",
      price: "US$9.99",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to The Official Website of Mohammed Abdur Rahman Razu</p>
        <p>Our top-rated client's names are given below:</p>

        <p>Here we will count:</p>
        <CountNow></CountNow>
        <RandomUsers></RandomUsers>
        <ul>
          {personArray.map((element) => (
            <li>{element.name}</li>
          ))}
        </ul>

        {personArray.map((singleObject) => (
          <Person singlePerson={singleObject}></Person>
        ))}
        {products.map((singleObject) => (
          <Product singleProduct={singleObject}></Product>
        ))}
      </header>
    </div>
  );
}

function Person(props) {
  let personStyle = {
    border: "5px solid gold",
    width: "400px",
    height: "370px",
    backgroundColor: "green",
    boxShadow: " 10px -4px 41px gray",
    marginBottom: "20px",
    borderRadius: "9px",
  };
  return (
    <div style={personStyle}>
      <h2>Name: {props.singlePerson.name}</h2>
      <h3>Profession: {props.singlePerson.profession}</h3>
      <p>About: {props.singlePerson.about}</p>
      <button
        style={{
          backgroundColor: "orange",
          padding: "10px",
          borderRadius: "9px",
        }}
      >
        Show Profile
      </button>
    </div>
  );
}

function Product(props) {
  let productStyle = {
    width: "400px",
    height: "400px",
    border: "4px solid red",
    boxShadow: "10px -4px 41px gray",
    marginBottom: "10px",
    borderRadius: "10px",
  };
  return (
    <div style={productStyle}>
      <img
        src={props.singleProduct.img}
        style={{ width: "100px", marginTop: "10px" }}
        alt=""
      />
      <h3>Product Name: {props.singleProduct.name}</h3>
      <h1>{props.singleProduct.price}</h1>
      <p>{props.singleProduct.about}</p>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          borderRadius: "10px",
          width: "100px",
        }}
      >
        Buy now
      </button>
    </div>
  );
}

function CountNow() {
  let btnStyle = {
    fontSize: "50px",
    backgroundColor: "orange",
    width: "100px",
    margin: "10px",
    borderRadius: "10px",
  };
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button style={btnStyle} onClick={() => setCount(count + 1)}>
        +
      </button>
      <button style={btnStyle} onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}

function RandomUsers() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  });
  return (
    <div>
      <h1>Random User API</h1>
      <ul>
        {users.map((singleUser) => (
          <li>{singleUser.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
