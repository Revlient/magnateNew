if (typeof window === "undefined") {
    const noop = () => { };
    const storageMock = {
        getItem: () => null,
        setItem: noop,
        removeItem: noop,
        clear: noop,
        length: 0,
        key: () => null,
    };

    if (
        typeof global.localStorage === "undefined" ||
        typeof global.localStorage.getItem !== "function"
    ) {
        (global as any).localStorage = storageMock;
    }
}
