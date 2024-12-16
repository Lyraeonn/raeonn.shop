function order(num,server,zone,item){
    const n = document.getElementById(num);
    const s = document.getElementById(server);
    const z = document.getElementById(zone);
    const i = document.getElementById(item);
    
    window.location.href = "https://wa.me/601151722487?text="+n.value;
}