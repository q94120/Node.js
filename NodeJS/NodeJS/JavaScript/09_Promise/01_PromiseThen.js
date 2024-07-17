// server端
function longTimeWork(workFine = true, errorMessage = "test") {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            (workFine) ? resolve(200) : reject(errorMessage);
        }, 1000);
    })
}

function main() {
    var p = longTimeWork(true, "test")  // try true/false
    .then(function (e) {
        console.log(e);
    })
    .catch(function (e) {
        console.log(e);
    })
}

async function main() {
    var result = await longTimeWork(false, "test");
}

main();
