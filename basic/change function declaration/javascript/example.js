// original
function user() {
    return {
        type: "new"
    }
}

// refactor
function createUser() {
    return {
        type: "new"
    }
}
