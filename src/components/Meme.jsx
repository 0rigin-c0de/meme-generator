import "./Meme.css";
import { useState, useEffect } from "react";

export default function Meme() {
  const [allMeme, setAllMeme] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((memesData) => setAllMeme(memesData.data.memes));
  }, []);

  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * allMeme.length);
    const memesArray = allMeme;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: memesArray[randomNum].url,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  return (
    <section className="meme-form-container">
      <div className="meme-form">
        <input
          type="text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          id="top-text"
          placeholder="Shut up"
        />
        <input
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          id="bottom-text"
          placeholder="and take my money"
        />
        <button className="get-meme-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <img
          src={meme.randomImg}
          alt="Random Meme Image"
          className="meme-image"
        />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
}
