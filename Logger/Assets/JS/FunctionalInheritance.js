const Logger = function(){
    this.log = (message) => console.log(message);
}

const TableLogger = function(){
    Logger.apply(this);

    const parentLog = this.log;
    this.log = (...args) => {
        const message = args.join(" | ");
        parentLog(message);
    }
}

const TableTimeLogger = function(){
    TableLogger.apply(this);

    const parentLog = this.log;
    this.log = (...args) => {
        const timeMessage = this.formatDate(new Date());
        parentLog(timeMessage, ...args);
    }

    this.formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.toLocaleString(("en-US"), {hour: "numeric", minute: "numeric", second: "numeric", hour12: true})}`
}

let logger = new Logger();
logger.log("Hello World!");

logger = new TableLogger();
logger.log("Hello", "World", "!");

logger = new TableTimeLogger();
logger.log("Hello", "World", "!");