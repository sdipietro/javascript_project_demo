import Example from "./scripts/example";
import Drawer from "./scripts/drawer";

document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello from index.js");
    // const main = document.getElementById("main");
    // new Example(main);

    const canvas = document.getElementById("canvas");
    const drawer = new Drawer(canvas);
})