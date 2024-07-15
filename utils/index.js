export const hideEmail = (email) => {
    const [name, domain] = email.split("@");
    const hiddenEmail = `${name[0]}${new Array(name.length).join("*")}@${domain}`;
    return hiddenEmail;
}

export function debounceFn(func, delay) {
    let timer;

    return (...args) => {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            func(...args)
        }, delay)
    }
};

export function getErrorMessage(error) {
    let message;

    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && message in error) {
        message = String(error.message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Something went wrong!"
    }

    return message;
}

