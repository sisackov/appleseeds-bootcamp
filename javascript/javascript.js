let codeLineNumber; // the current line of code that should be executed
const lastLineOfCode; // the last line of the program
const callStack = new Stack(); // the function call stack
const microTaskQueue = new Queue(); // stores promises
const taskQueue = new Queue(); // setTimeout, setInterval, eventHandlers,


taskQueue.enqueue('Run Script');
function eventLoop() {
    if (!taskQueue.isEmpty()) {
        const macroTask = taskQueue.dequeue();
        codeLineNumber = macroTask.getStartingLine();
    }

    callStackRunner();

    while (!microTaskQueue.isEmpty()) {
        const microTask = microTaskQueue.dequeue();
        codeLineNumber = microTask.getStartingLine();
        callStackRunner();
    }

    setTimeout(eventLoop, LOOP_SLEEP_TIME);
}

function callStackRunner() {
    while (!callStack.isEmpty()) {
        const callStackItem = callStack.dequeue();
        codeLineNumber = callStackItem.dequeue();
        const newCallStackItem = executeLine(codeLineNumber);
    }
}

/**
 * Recursive function that interprets each line of code and executes it
 */
function executeLine(lineNumber) {
    if (lineNumber === lastLineOfCode) return;

    const callStackItems = [];
    callStackItems.push(lineNumber); //save the first line of the function
    let instruction = interpretLine(lineNumber);
    while (instruction.type !== 'function') {
        if (instruction.type === 'microTask') {
            microTaskQueue.enqueue(value);
        } else if (instruction.type === 'task') {
            taskQueue.enqueue(value);
        } else if (instruction.type === 'declaration') {
            callStackItems.push(instruction);
        }
        instruction = interpretLine(lineNumber);
    }
    return callStackItems;
}
