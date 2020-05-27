let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = [' before the class','right in time','when I finished','during my lunch','while I was praying'];
let space = " ";



function miexcusa(){
    let randomwho = who[Math.floor(Math.random() * who.length)];
    let randomwhat = what[Math.floor(Math.random() * what.length)];
    let randomwhen = when[Math.floor(Math.random() * when.length)];
    var excuse = randomwho + space + randomwhat + space + randomwhen;
    document.getElementById("demo").innerHTML = excuse;
    console.log(excuse);
    return excuse;
}

