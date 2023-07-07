let btn = document.getElementById("shortbtn");
btn.addEventListener('click',short);

 async function short(){
    let longurl = document.getElementById("longurl").value;
    let shorturl = document.getElementById("slink");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`);

    const data = await result.json();
    shorturl.value = data.result.short_link2; 

} 