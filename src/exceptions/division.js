const division = (a, b) => {
    if (b===0)
        throw new Error("division by zero is not allowed")
    return a/b
}

export default division