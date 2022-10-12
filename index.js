function saturdayFun(action = "roller-skate") {
    return `This Saturday, I want to ${action}!`
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(wraps = "*", close = "||") {
    const part1 = `${wraps}`
    return function innerWrap(adjective = "special") {
        return `You are ${part1}${adjective}${part1}!`
    }
}