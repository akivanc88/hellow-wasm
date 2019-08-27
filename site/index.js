const js = import("./node_modules/@akivanc881206/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
