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
    response.headers.set("access-control-allow-origin", "*")
    response.headers.set("access-control-allow-headers", "*")
    return response
}
