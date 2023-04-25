 const apikey = ('I3pLKehCUqhGffyllcD8malDQB8KIVmU')

 //https://api.giphy.com/v1/gifs/random?api_key=I3pLKehCUqhGffyllcD8malDQB8KIVmU
 fetch (`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
    .then(resp => resp.json())
    .then( ({data}) => {
        const {url }=data.images.original
        
        const img =document.createElement('img')
        img.src= url
        document.body.append( img)

    })
 .catch (e=> console.log(e))