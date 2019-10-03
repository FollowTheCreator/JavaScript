const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.toLocaleString(("en-US"), {hour: "numeric", minute: "numeric", second: "numeric", hour12: true})}`;
}

class Logger{
    log(message) { 
        console.log(message);
    }
}

class TableLogger extends Logger{
    log(...args){
        const message = args.join(" | ");
        super.log(message);
    }
}

class TimeTableLogger extends TableLogger{
    log(...args){
        const timeMessage = formatDate(new Date());
        super.log(timeMessage, ...args);
    }
}

let logger = new Logger();
logger.log("Hello World!");

logger = new TableLogger();
logger.log("Hello", "World", "!");

logger = new TimeTableLogger();
logger.log("Hello", "World", "!");