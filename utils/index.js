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

