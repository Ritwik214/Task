/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "reactPlayerDailyMotion";
exports.ids = ["reactPlayerDailyMotion"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-player/lib/players/DailyMotion.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-player/lib/players/DailyMotion.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar DailyMotion_exports = {};\n__export(DailyMotion_exports, {\n  default: () => DailyMotion\n});\nmodule.exports = __toCommonJS(DailyMotion_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"react?9fde\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(ssr)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(ssr)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://api.dmcdn.net/all.js\";\nconst SDK_GLOBAL = \"DM\";\nconst SDK_GLOBAL_READY = \"dmAsyncInit\";\nclass DailyMotion extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"onDurationChange\", () => {\n      const duration = this.getDuration();\n      this.props.onDuration(duration);\n    });\n    __publicField(this, \"mute\", () => {\n      this.callPlayer(\"setMuted\", true);\n    });\n    __publicField(this, \"unmute\", () => {\n      this.callPlayer(\"setMuted\", false);\n    });\n    __publicField(this, \"ref\", (container) => {\n      this.container = container;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url) {\n    const { controls, config, onError, playing } = this.props;\n    const [, id] = url.match(import_patterns.MATCH_URL_DAILYMOTION);\n    if (this.player) {\n      this.player.load(id, {\n        start: (0, import_utils.parseStartTime)(url),\n        autoplay: playing\n      });\n      return;\n    }\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, (DM) => DM.player).then((DM) => {\n      if (!this.container)\n        return;\n      const Player = DM.player;\n      this.player = new Player(this.container, {\n        width: \"100%\",\n        height: \"100%\",\n        video: id,\n        params: {\n          controls,\n          autoplay: this.props.playing,\n          mute: this.props.muted,\n          start: (0, import_utils.parseStartTime)(url),\n          origin: window.location.origin,\n          ...config.params\n        },\n        events: {\n          apiready: this.props.onReady,\n          seeked: () => this.props.onSeek(this.player.currentTime),\n          video_end: this.props.onEnded,\n          durationchange: this.onDurationChange,\n          pause: this.props.onPause,\n          playing: this.props.onPlay,\n          waiting: this.props.onBuffer,\n          error: (event) => onError(event)\n        }\n      });\n    }, onError);\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"seek\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction);\n  }\n  getDuration() {\n    return this.player.duration || null;\n  }\n  getCurrentTime() {\n    return this.player.currentTime;\n  }\n  getSecondsLoaded() {\n    return this.player.bufferedTime;\n  }\n  render() {\n    const { display } = this.props;\n    const style = {\n      width: \"100%\",\n      height: \"100%\",\n      display\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\"div\", { style }, /* @__PURE__ */ import_react.default.createElement(\"div\", { ref: this.ref }));\n  }\n}\n__publicField(DailyMotion, \"displayName\", \"DailyMotion\");\n__publicField(DailyMotion, \"canPlay\", import_patterns.canPlay.dailymotion);\n__publicField(DailyMotion, \"loopOnEnded\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL0RhaWx5TW90aW9uLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSw2REFBNkQ7QUFDM0k7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0RkFBNEY7QUFDekg7QUFDQTtBQUNBO0FBQ0EsbUdBQW1HO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLDhCQUE4QjtBQUN2RztBQUNBO0FBQ0Esb0RBQW9ELGtCQUFrQixhQUFhO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMkJBQTJCLG1CQUFPLENBQUMseUJBQU87QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMsZ0VBQVU7QUFDckMsc0JBQXNCLG1CQUFPLENBQUMsc0VBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUNBQXFDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxPQUFPLDhEQUE4RCxlQUFlO0FBQzNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pa25vdy1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvRGFpbHlNb3Rpb24uanM/ZjI1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xudmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2dldE93blByb3BEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfX2dldE93blByb3BOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIF9fZ2V0UHJvdG9PZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fZXhwb3J0ID0gKHRhcmdldCwgYWxsKSA9PiB7XG4gIGZvciAodmFyIG5hbWUgaW4gYWxsKVxuICAgIF9fZGVmUHJvcCh0YXJnZXQsIG5hbWUsIHsgZ2V0OiBhbGxbbmFtZV0sIGVudW1lcmFibGU6IHRydWUgfSk7XG59O1xudmFyIF9fY29weVByb3BzID0gKHRvLCBmcm9tLCBleGNlcHQsIGRlc2MpID0+IHtcbiAgaWYgKGZyb20gJiYgdHlwZW9mIGZyb20gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGZyb20gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGtleSBvZiBfX2dldE93blByb3BOYW1lcyhmcm9tKSlcbiAgICAgIGlmICghX19oYXNPd25Qcm9wLmNhbGwodG8sIGtleSkgJiYga2V5ICE9PSBleGNlcHQpXG4gICAgICAgIF9fZGVmUHJvcCh0bywga2V5LCB7IGdldDogKCkgPT4gZnJvbVtrZXldLCBlbnVtZXJhYmxlOiAhKGRlc2MgPSBfX2dldE93blByb3BEZXNjKGZyb20sIGtleSkpIHx8IGRlc2MuZW51bWVyYWJsZSB9KTtcbiAgfVxuICByZXR1cm4gdG87XG59O1xudmFyIF9fdG9FU00gPSAobW9kLCBpc05vZGVNb2RlLCB0YXJnZXQpID0+ICh0YXJnZXQgPSBtb2QgIT0gbnVsbCA/IF9fY3JlYXRlKF9fZ2V0UHJvdG9PZihtb2QpKSA6IHt9LCBfX2NvcHlQcm9wcyhcbiAgLy8gSWYgdGhlIGltcG9ydGVyIGlzIGluIG5vZGUgY29tcGF0aWJpbGl0eSBtb2RlIG9yIHRoaXMgaXMgbm90IGFuIEVTTVxuICAvLyBmaWxlIHRoYXQgaGFzIGJlZW4gY29udmVydGVkIHRvIGEgQ29tbW9uSlMgZmlsZSB1c2luZyBhIEJhYmVsLVxuICAvLyBjb21wYXRpYmxlIHRyYW5zZm9ybSAoaS5lLiBcIl9fZXNNb2R1bGVcIiBoYXMgbm90IGJlZW4gc2V0KSwgdGhlbiBzZXRcbiAgLy8gXCJkZWZhdWx0XCIgdG8gdGhlIENvbW1vbkpTIFwibW9kdWxlLmV4cG9ydHNcIiBmb3Igbm9kZSBjb21wYXRpYmlsaXR5LlxuICBpc05vZGVNb2RlIHx8ICFtb2QgfHwgIW1vZC5fX2VzTW9kdWxlID8gX19kZWZQcm9wKHRhcmdldCwgXCJkZWZhdWx0XCIsIHsgdmFsdWU6IG1vZCwgZW51bWVyYWJsZTogdHJ1ZSB9KSA6IHRhcmdldCxcbiAgbW9kXG4pKTtcbnZhciBfX3RvQ29tbW9uSlMgPSAobW9kKSA9PiBfX2NvcHlQcm9wcyhfX2RlZlByb3Aoe30sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pLCBtb2QpO1xudmFyIF9fcHVibGljRmllbGQgPSAob2JqLCBrZXksIHZhbHVlKSA9PiB7XG4gIF9fZGVmTm9ybWFsUHJvcChvYmosIHR5cGVvZiBrZXkgIT09IFwic3ltYm9sXCIgPyBrZXkgKyBcIlwiIDoga2V5LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG52YXIgRGFpbHlNb3Rpb25fZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoRGFpbHlNb3Rpb25fZXhwb3J0cywge1xuICBkZWZhdWx0OiAoKSA9PiBEYWlseU1vdGlvblxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fdG9Db21tb25KUyhEYWlseU1vdGlvbl9leHBvcnRzKTtcbnZhciBpbXBvcnRfcmVhY3QgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgaW1wb3J0X3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGltcG9ydF9wYXR0ZXJucyA9IHJlcXVpcmUoXCIuLi9wYXR0ZXJuc1wiKTtcbmNvbnN0IFNES19VUkwgPSBcImh0dHBzOi8vYXBpLmRtY2RuLm5ldC9hbGwuanNcIjtcbmNvbnN0IFNES19HTE9CQUwgPSBcIkRNXCI7XG5jb25zdCBTREtfR0xPQkFMX1JFQURZID0gXCJkbUFzeW5jSW5pdFwiO1xuY2xhc3MgRGFpbHlNb3Rpb24gZXh0ZW5kcyBpbXBvcnRfcmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiY2FsbFBsYXllclwiLCBpbXBvcnRfdXRpbHMuY2FsbFBsYXllcik7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uRHVyYXRpb25DaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmdldER1cmF0aW9uKCk7XG4gICAgICB0aGlzLnByb3BzLm9uRHVyYXRpb24oZHVyYXRpb24pO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJtdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcihcInNldE11dGVkXCIsIHRydWUpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJ1bm11dGVcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKFwic2V0TXV0ZWRcIiwgZmFsc2UpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJyZWZcIiwgKGNvbnRhaW5lcikgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbk1vdW50ICYmIHRoaXMucHJvcHMub25Nb3VudCh0aGlzKTtcbiAgfVxuICBsb2FkKHVybCkge1xuICAgIGNvbnN0IHsgY29udHJvbHMsIGNvbmZpZywgb25FcnJvciwgcGxheWluZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBbLCBpZF0gPSB1cmwubWF0Y2goaW1wb3J0X3BhdHRlcm5zLk1BVENIX1VSTF9EQUlMWU1PVElPTik7XG4gICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICB0aGlzLnBsYXllci5sb2FkKGlkLCB7XG4gICAgICAgIHN0YXJ0OiAoMCwgaW1wb3J0X3V0aWxzLnBhcnNlU3RhcnRUaW1lKSh1cmwpLFxuICAgICAgICBhdXRvcGxheTogcGxheWluZ1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICgwLCBpbXBvcnRfdXRpbHMuZ2V0U0RLKShTREtfVVJMLCBTREtfR0xPQkFMLCBTREtfR0xPQkFMX1JFQURZLCAoRE0pID0+IERNLnBsYXllcikudGhlbigoRE0pID0+IHtcbiAgICAgIGlmICghdGhpcy5jb250YWluZXIpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGNvbnN0IFBsYXllciA9IERNLnBsYXllcjtcbiAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmNvbnRhaW5lciwge1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgIHZpZGVvOiBpZCxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgY29udHJvbHMsXG4gICAgICAgICAgYXV0b3BsYXk6IHRoaXMucHJvcHMucGxheWluZyxcbiAgICAgICAgICBtdXRlOiB0aGlzLnByb3BzLm11dGVkLFxuICAgICAgICAgIHN0YXJ0OiAoMCwgaW1wb3J0X3V0aWxzLnBhcnNlU3RhcnRUaW1lKSh1cmwpLFxuICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICAgICAgICAuLi5jb25maWcucGFyYW1zXG4gICAgICAgIH0sXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGFwaXJlYWR5OiB0aGlzLnByb3BzLm9uUmVhZHksXG4gICAgICAgICAgc2Vla2VkOiAoKSA9PiB0aGlzLnByb3BzLm9uU2Vlayh0aGlzLnBsYXllci5jdXJyZW50VGltZSksXG4gICAgICAgICAgdmlkZW9fZW5kOiB0aGlzLnByb3BzLm9uRW5kZWQsXG4gICAgICAgICAgZHVyYXRpb25jaGFuZ2U6IHRoaXMub25EdXJhdGlvbkNoYW5nZSxcbiAgICAgICAgICBwYXVzZTogdGhpcy5wcm9wcy5vblBhdXNlLFxuICAgICAgICAgIHBsYXlpbmc6IHRoaXMucHJvcHMub25QbGF5LFxuICAgICAgICAgIHdhaXRpbmc6IHRoaXMucHJvcHMub25CdWZmZXIsXG4gICAgICAgICAgZXJyb3I6IChldmVudCkgPT4gb25FcnJvcihldmVudClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgb25FcnJvcik7XG4gIH1cbiAgcGxheSgpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJwbGF5XCIpO1xuICB9XG4gIHBhdXNlKCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBhdXNlXCIpO1xuICB9XG4gIHN0b3AoKSB7XG4gIH1cbiAgc2Vla1RvKHNlY29uZHMsIGtlZXBQbGF5aW5nID0gdHJ1ZSkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNlZWtcIiwgc2Vjb25kcyk7XG4gICAgaWYgKCFrZWVwUGxheWluZykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuICBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRWb2x1bWVcIiwgZnJhY3Rpb24pO1xuICB9XG4gIGdldER1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllci5kdXJhdGlvbiB8fCBudWxsO1xuICB9XG4gIGdldEN1cnJlbnRUaW1lKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcbiAgfVxuICBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllci5idWZmZXJlZFRpbWU7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzcGxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5XG4gICAgfTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZSB9LCAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHJlZjogdGhpcy5yZWYgfSkpO1xuICB9XG59XG5fX3B1YmxpY0ZpZWxkKERhaWx5TW90aW9uLCBcImRpc3BsYXlOYW1lXCIsIFwiRGFpbHlNb3Rpb25cIik7XG5fX3B1YmxpY0ZpZWxkKERhaWx5TW90aW9uLCBcImNhblBsYXlcIiwgaW1wb3J0X3BhdHRlcm5zLmNhblBsYXkuZGFpbHltb3Rpb24pO1xuX19wdWJsaWNGaWVsZChEYWlseU1vdGlvbiwgXCJsb29wT25FbmRlZFwiLCB0cnVlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-player/lib/players/DailyMotion.js\n");

/***/ })

};
;