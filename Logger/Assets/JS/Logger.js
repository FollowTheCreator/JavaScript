const log = (message) => {
    console.log(message);
}

const anotherLog = (...args) => {
    const message = args.join(" | ");
    log(message);
}

anotherLog("Hello", "World", "!");