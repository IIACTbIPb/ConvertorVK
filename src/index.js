import "core-js/features/map";
import "core-js/features/set";//зависимости нужны для старых устройств
import React from "react";
import ReactDOM from "react-dom";//для работы реакта с дом
import bridge from "@vkontakte/vk-bridge";//для отправки событий
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit");


ReactDOM.render(<App />, document.getElementById("root"));

