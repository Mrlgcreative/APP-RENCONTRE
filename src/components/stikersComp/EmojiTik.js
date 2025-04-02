import { useState, useEffect } from "react";

export default function EmojiTik () {

    const umoji = [
        "https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif",
        "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif",
        "https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.gif",
    
      ]; 

    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % umoji.length);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <>
            <img src={umoji[index]} alt={`Image ${index + 1}`} width={30} height={30} />
        </>
    )
}