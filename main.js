async function toDataURL(url) { 
    const blob = await fetch("https://mega-giga-death-cors-bypass.suca.workers.dev/" + url).then(res => res.blob()); //richiesta a CF
    return URL.createObjectURL(blob); //creo il download del blob
} 
//cors bloccano client-side i browser dal fare richieste da siti terzi al sito
//blob contiene i bit dell'immagine, la carica in RAM
//CF chiede a MJ, e poi gira al nostro sito
//richiesta a Cloudflare passandogli il link originale

async function scarica(link){
    const a = document.createElement("a") 
    a.href = await toDataURL(link) //creiamo un tag a e gli passiamo il nostro link sbloccato
    a.download = "download.png" //download funziona solo su link interni o blob
    document.body.appendChild(a) //aggiunge il tag alla pagina
    a.click() //simula il click dell'utente
    document.body.removeChild(a) //rimozione tag
}

Array.from(document.getElementsByClassName("download")).forEach(element => {
    element.addEventListener("click", ()=>{
        scarica(element.getAttribute("id"))
    })
    
}); //funzione di gestione download

const writer = GlitchedWriter.create(document.getElementById("glitch_this"), {
    interval: [20, 60],
    letterize: true,
})

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async  ()=> {

    await writer.write("Corporates");
    
    await wait(1000);
    await writer.write("Please don't sue us");
    
    await wait(1000);
    await writer.write("This is just a proof of concept ;)");

    await wait(1200);
    await writer.write("S.U.C.A.");
    await writer.write("C.U.A.S.");

    await wait(700);
    await writer.write("Club Universale di Analisi Sofista");
  })();

/*

addEventListener("fetch", event=>{
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request){
    const url = new URL(request.url);
    const requestUrl = request.url.replace(`${url.origin}/`, "");
    let proxiedRequest = new Request(requestUrl, request);
    if(proxiedRequest.headers.has("origin")){
        proxiedRequest.headers.delete("origin")
    }

    if(proxiedRequest.headers.has("referer")){
        proxiedRequest.headers.delete("referer")
    }
    
    let response = await fetch(proxiedRequest)
    response = new Response(response.body, response)
    response.headers.set("access-control-allow-origin", "circolo-universale-di-analisi-sofista.github.io")
    response.headers.set("access-control-allow-headers", "*")
    return response
}

*/