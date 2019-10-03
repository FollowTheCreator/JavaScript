const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.toLocaleString(("en-US"), {hour: "numeric", minute: "numeric", second: "numeric", hour12: true})}`;
}

const log = (message) => {
    console.log(message);
}

const anotherLog = (...args) => {
    const message = args.join(" | ");
    log(message);
}

const anotherLogWithTime = (...args) => {
    const timeMessage = formatDate(new Date());
    anotherLog(timeMessage, ...args);
}

anotherLogWithTime("Hello", "World", "!");