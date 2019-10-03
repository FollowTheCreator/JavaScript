const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.toLocaleString(("en-US"), {hour: "numeric", minute: "numeric", second: "numeric", hour12: true})}`;
}

const Logger = {
    log(message) { 
        console.log(message);
    }
}

const TableLogger = Object.create(Logger, {
    log: {
        value: (...args) => {
            const message = args.join(" | ");
            Logger.log(message);
        }
    }
});

const TimeTableLogger = Object.create(TableLogger, {
    log: {
        value: (...args) => {
            const timeMessage = formatDate(new Date());
            TableLogger.log(timeMessage, ...args);
        }
    }
});

Logger.log("Hello World!");

TableLogger.log("Hello", "World", "!");

TimeTableLogger.log("Hello", "World", "!");