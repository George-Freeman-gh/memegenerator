
 import { useEffect, useState } from "react"




const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/2ybua0.png"
    });

    const [allMemes, setAllMemes] = useState([])

    const getRandomImage = () => {
    
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({...prevMeme, randomImage: url}));

 }

 
 const changeHandler = (event) => {

    const {value , name} = event.target

    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))

 }


       useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes))
       },[])

console.log(allMemes)

    return (
      <main>
        <form >
            <div className="textbox-wrap">
                <input 
                className="tb" 
                type="text" 
                placeholder="Top Text"
                value={meme.topText}
                name="topText"
                onChange={changeHandler}
                 />
                <input 
                className="tb" 
                type="text" 
                placeholder="Bottom Text"
                value={meme.bottomText}
                name="bottomText"
                onChange={changeHandler}
                 />
            </div>
            
        </form>
        <div className="submit-align">
        <button className="submit-button" onClick={getRandomImage}>Get a new meme image 🖼️ </button>
    </div>
     <div className="meme">
        <img src={meme.randomImage}  className="meme-image"/>
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>


     </div>
        
    
 
        
    </main>  
    )
}

export default Meme