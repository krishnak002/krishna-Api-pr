fetchImage = document.querySelector('#fetchImage')
fetchBtn = document.querySelector('#fetchBtn')

const handleFetch = ()=>{
    fetchImage.src = "https://media.tenor.com/jfmI0j5FcpAAAAAM/loading-wtf.gif";
    setTimeout(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(data=>{
            fetchImage.src = data.message;
        })
    },1000)
}
handleFetch();

fetchBtn.addEventListener("click",handleFetch)
