if (process.env.NODE_ENV === "production") {

} else {
    require("babel-register")({

    });

    require("babel-polyfill");

    require("./server/server");
}
