const log = (message) => {
    console.log(message);
}

const anotherLog = (...args) => {
    const message = args.join(" | ");
    log(message);
}

const anotherLogWithTime = (...args) => {
    const date = new Date();
    const timeMessage = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.toLocaleString(("en-US"), {hour: "numeric", minute: "numeric", second: "numeric", hour12: true})}`;
    anotherLog(timeMessage, ...args);
}

anotherLogWithTime("Hello", "World", "!");