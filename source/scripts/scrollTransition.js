let elementObjects = [];

export const resetElementObjects = () => {
    elementObjects = [];
};

export const checkElement = (elementObject) => {
    const element = elementObject.element;
    const postClassName = elementObject.postClassName;

    const extraFunction = elementObject.extraFunction;

    let offset = elementObject.offset;

    if (typeof offset === "undefined") {
        offset = 0;
    }

    if (typeof window.scrollY === "undefined") {
        window.scrollY = document.documentElement.scrollTop;
    }

    if (window.innerHeight + window.scrollY >= element.offsetTop + offset) {
        if (element.classList.contains(postClassName)) {
            return;
        } else {
            element.classList.add(postClassName);

            if (typeof extraFunction !== "undefined") {
                extraFunction("add");
            }
        }
    } else if (window.innerHeight + window.scrollY < element.offsetTop) {
        if (!element.classList.contains(postClassName)) {
            return;
        } else {
            element.classList.remove(postClassName);

            if (typeof extraFunction !== "undefined") {
                extraFunction("remove");
            }
        }
    }
};

export const addElement = (className, postClassName, offset, extraFunction) => {
    let numberOfSameExistingElements = 0;

    elementObjects.map((object) => {
        if (object.postClassName === postClassName) {
            numberOfSameExistingElements++;
        }
    });

    const element = document.getElementsByClassName(className)[numberOfSameExistingElements];
    const object = {
        element,
        postClassName,
        offset,
        extraFunction
    };

    elementObjects.push(object);
};

export const onScroll = () => {
    elementObjects.map((object) => {
        checkElement(object);
    });
};
