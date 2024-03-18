/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "reactPlayerMux";
exports.ids = ["reactPlayerMux"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-player/lib/players/Mux.js":
/*!******************************************************!*\
  !*** ./node_modules/react-player/lib/players/Mux.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar Mux_exports = {};\n__export(Mux_exports, {\n  default: () => Mux\n});\nmodule.exports = __toCommonJS(Mux_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"react?9fde\"));\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(ssr)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs\";\nclass Mux extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    // Proxy methods to prevent listener leaks\n    __publicField(this, \"onReady\", (...args) => this.props.onReady(...args));\n    __publicField(this, \"onPlay\", (...args) => this.props.onPlay(...args));\n    __publicField(this, \"onBuffer\", (...args) => this.props.onBuffer(...args));\n    __publicField(this, \"onBufferEnd\", (...args) => this.props.onBufferEnd(...args));\n    __publicField(this, \"onPause\", (...args) => this.props.onPause(...args));\n    __publicField(this, \"onEnded\", (...args) => this.props.onEnded(...args));\n    __publicField(this, \"onError\", (...args) => this.props.onError(...args));\n    __publicField(this, \"onPlayBackRateChange\", (event) => this.props.onPlaybackRateChange(event.target.playbackRate));\n    __publicField(this, \"onEnablePIP\", (...args) => this.props.onEnablePIP(...args));\n    __publicField(this, \"onSeek\", (e) => {\n      this.props.onSeek(e.target.currentTime);\n    });\n    __publicField(this, \"onDurationChange\", () => {\n      const duration = this.getDuration();\n      this.props.onDuration(duration);\n    });\n    __publicField(this, \"mute\", () => {\n      this.player.muted = true;\n    });\n    __publicField(this, \"unmute\", () => {\n      this.player.muted = false;\n    });\n    __publicField(this, \"ref\", (player) => {\n      this.player = player;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n    this.addListeners(this.player);\n    const playbackId = this.getPlaybackId(this.props.url);\n    if (playbackId) {\n      this.player.playbackId = playbackId;\n    }\n  }\n  componentWillUnmount() {\n    this.player.playbackId = null;\n    this.removeListeners(this.player);\n  }\n  addListeners(player) {\n    const { playsinline } = this.props;\n    player.addEventListener(\"play\", this.onPlay);\n    player.addEventListener(\"waiting\", this.onBuffer);\n    player.addEventListener(\"playing\", this.onBufferEnd);\n    player.addEventListener(\"pause\", this.onPause);\n    player.addEventListener(\"seeked\", this.onSeek);\n    player.addEventListener(\"ended\", this.onEnded);\n    player.addEventListener(\"error\", this.onError);\n    player.addEventListener(\"ratechange\", this.onPlayBackRateChange);\n    player.addEventListener(\"enterpictureinpicture\", this.onEnablePIP);\n    player.addEventListener(\"leavepictureinpicture\", this.onDisablePIP);\n    player.addEventListener(\"webkitpresentationmodechanged\", this.onPresentationModeChange);\n    player.addEventListener(\"canplay\", this.onReady);\n    if (playsinline) {\n      player.setAttribute(\"playsinline\", \"\");\n    }\n  }\n  removeListeners(player) {\n    player.removeEventListener(\"canplay\", this.onReady);\n    player.removeEventListener(\"play\", this.onPlay);\n    player.removeEventListener(\"waiting\", this.onBuffer);\n    player.removeEventListener(\"playing\", this.onBufferEnd);\n    player.removeEventListener(\"pause\", this.onPause);\n    player.removeEventListener(\"seeked\", this.onSeek);\n    player.removeEventListener(\"ended\", this.onEnded);\n    player.removeEventListener(\"error\", this.onError);\n    player.removeEventListener(\"ratechange\", this.onPlayBackRateChange);\n    player.removeEventListener(\"enterpictureinpicture\", this.onEnablePIP);\n    player.removeEventListener(\"leavepictureinpicture\", this.onDisablePIP);\n    player.removeEventListener(\"canplay\", this.onReady);\n  }\n  async load(url) {\n    var _a;\n    const { onError, config } = this.props;\n    if (!((_a = globalThis.customElements) == null ? void 0 : _a.get(\"mux-player\"))) {\n      try {\n        const sdkUrl = SDK_URL.replace(\"VERSION\", config.version);\n        await import(\n          /* webpackIgnore: true */\n          `${sdkUrl}`\n        );\n        this.props.onLoaded();\n      } catch (error) {\n        onError(error);\n      }\n    }\n    const [, id] = url.match(import_patterns.MATCH_URL_MUX);\n    this.player.playbackId = id;\n  }\n  play() {\n    const promise = this.player.play();\n    if (promise) {\n      promise.catch(this.props.onError);\n    }\n  }\n  pause() {\n    this.player.pause();\n  }\n  stop() {\n    this.player.playbackId = null;\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.player.currentTime = seconds;\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.player.volume = fraction;\n  }\n  enablePIP() {\n    if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {\n      this.player.requestPictureInPicture();\n    }\n  }\n  disablePIP() {\n    if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {\n      document.exitPictureInPicture();\n    }\n  }\n  setPlaybackRate(rate) {\n    try {\n      this.player.playbackRate = rate;\n    } catch (error) {\n      this.props.onError(error);\n    }\n  }\n  getDuration() {\n    if (!this.player)\n      return null;\n    const { duration, seekable } = this.player;\n    if (duration === Infinity && seekable.length > 0) {\n      return seekable.end(seekable.length - 1);\n    }\n    return duration;\n  }\n  getCurrentTime() {\n    if (!this.player)\n      return null;\n    return this.player.currentTime;\n  }\n  getSecondsLoaded() {\n    if (!this.player)\n      return null;\n    const { buffered } = this.player;\n    if (buffered.length === 0) {\n      return 0;\n    }\n    const end = buffered.end(buffered.length - 1);\n    const duration = this.getDuration();\n    if (end > duration) {\n      return duration;\n    }\n    return end;\n  }\n  getPlaybackId(url) {\n    const [, id] = url.match(import_patterns.MATCH_URL_MUX);\n    return id;\n  }\n  render() {\n    const { url, playing, loop, controls, muted, config, width, height } = this.props;\n    const style = {\n      width: width === \"auto\" ? width : \"100%\",\n      height: height === \"auto\" ? height : \"100%\"\n    };\n    if (controls === false) {\n      style[\"--controls\"] = \"none\";\n    }\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"mux-player\",\n      {\n        ref: this.ref,\n        \"playback-id\": this.getPlaybackId(url),\n        style,\n        preload: \"auto\",\n        autoPlay: playing || void 0,\n        muted: muted ? \"\" : void 0,\n        loop: loop ? \"\" : void 0,\n        ...config.attributes\n      }\n    );\n  }\n}\n__publicField(Mux, \"displayName\", \"Mux\");\n__publicField(Mux, \"canPlay\", import_patterns.canPlay.mux);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL011eC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEZBQTRGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSw4QkFBOEI7QUFDdkc7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0IsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLHlCQUFPO0FBQzFDLHNCQUFzQixtQkFBTyxDQUFDLHNFQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxQkFBcUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBNkQ7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWtub3ctcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL011eC5qcz9lZDc5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0VTTSA9IChtb2QsIGlzTm9kZU1vZGUsIHRhcmdldCkgPT4gKHRhcmdldCA9IG1vZCAhPSBudWxsID8gX19jcmVhdGUoX19nZXRQcm90b09mKG1vZCkpIDoge30sIF9fY29weVByb3BzKFxuICAvLyBJZiB0aGUgaW1wb3J0ZXIgaXMgaW4gbm9kZSBjb21wYXRpYmlsaXR5IG1vZGUgb3IgdGhpcyBpcyBub3QgYW4gRVNNXG4gIC8vIGZpbGUgdGhhdCBoYXMgYmVlbiBjb252ZXJ0ZWQgdG8gYSBDb21tb25KUyBmaWxlIHVzaW5nIGEgQmFiZWwtXG4gIC8vIGNvbXBhdGlibGUgdHJhbnNmb3JtIChpLmUuIFwiX19lc01vZHVsZVwiIGhhcyBub3QgYmVlbiBzZXQpLCB0aGVuIHNldFxuICAvLyBcImRlZmF1bHRcIiB0byB0aGUgQ29tbW9uSlMgXCJtb2R1bGUuZXhwb3J0c1wiIGZvciBub2RlIGNvbXBhdGliaWxpdHkuXG4gIGlzTm9kZU1vZGUgfHwgIW1vZCB8fCAhbW9kLl9fZXNNb2R1bGUgPyBfX2RlZlByb3AodGFyZ2V0LCBcImRlZmF1bHRcIiwgeyB2YWx1ZTogbW9kLCBlbnVtZXJhYmxlOiB0cnVlIH0pIDogdGFyZ2V0LFxuICBtb2RcbikpO1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG52YXIgX19wdWJsaWNGaWVsZCA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcbiAgX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBNdXhfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoTXV4X2V4cG9ydHMsIHtcbiAgZGVmYXVsdDogKCkgPT4gTXV4XG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKE11eF9leHBvcnRzKTtcbnZhciBpbXBvcnRfcmVhY3QgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgaW1wb3J0X3BhdHRlcm5zID0gcmVxdWlyZShcIi4uL3BhdHRlcm5zXCIpO1xuY29uc3QgU0RLX1VSTCA9IFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9AbXV4L211eC1wbGF5ZXJAVkVSU0lPTi9kaXN0L211eC1wbGF5ZXIubWpzXCI7XG5jbGFzcyBNdXggZXh0ZW5kcyBpbXBvcnRfcmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAvLyBQcm94eSBtZXRob2RzIHRvIHByZXZlbnQgbGlzdGVuZXIgbGVha3NcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25SZWFkeVwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vblJlYWR5KC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25QbGF5XCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uUGxheSguLi5hcmdzKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uQnVmZmVyXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uQnVmZmVyKC4uLmFyZ3MpKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwib25CdWZmZXJFbmRcIiwgKC4uLmFyZ3MpID0+IHRoaXMucHJvcHMub25CdWZmZXJFbmQoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvblBhdXNlXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uUGF1c2UoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvbkVuZGVkXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uRW5kZWQoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvbkVycm9yXCIsICguLi5hcmdzKSA9PiB0aGlzLnByb3BzLm9uRXJyb3IoLi4uYXJncykpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvblBsYXlCYWNrUmF0ZUNoYW5nZVwiLCAoZXZlbnQpID0+IHRoaXMucHJvcHMub25QbGF5YmFja1JhdGVDaGFuZ2UoZXZlbnQudGFyZ2V0LnBsYXliYWNrUmF0ZSkpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvbkVuYWJsZVBJUFwiLCAoLi4uYXJncykgPT4gdGhpcy5wcm9wcy5vbkVuYWJsZVBJUCguLi5hcmdzKSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcIm9uU2Vla1wiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vblNlZWsoZS50YXJnZXQuY3VycmVudFRpbWUpO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvbkR1cmF0aW9uQ2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5nZXREdXJhdGlvbigpO1xuICAgICAgdGhpcy5wcm9wcy5vbkR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibXV0ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnBsYXllci5tdXRlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInVubXV0ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnBsYXllci5tdXRlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJyZWZcIiwgKHBsYXllcikgPT4ge1xuICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vbk1vdW50ICYmIHRoaXMucHJvcHMub25Nb3VudCh0aGlzKTtcbiAgICB0aGlzLmFkZExpc3RlbmVycyh0aGlzLnBsYXllcik7XG4gICAgY29uc3QgcGxheWJhY2tJZCA9IHRoaXMuZ2V0UGxheWJhY2tJZCh0aGlzLnByb3BzLnVybCk7XG4gICAgaWYgKHBsYXliYWNrSWQpIHtcbiAgICAgIHRoaXMucGxheWVyLnBsYXliYWNrSWQgPSBwbGF5YmFja0lkO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnBsYXllci5wbGF5YmFja0lkID0gbnVsbDtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVycyh0aGlzLnBsYXllcik7XG4gIH1cbiAgYWRkTGlzdGVuZXJzKHBsYXllcikge1xuICAgIGNvbnN0IHsgcGxheXNpbmxpbmUgfSA9IHRoaXMucHJvcHM7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwbGF5XCIsIHRoaXMub25QbGF5KTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndhaXRpbmdcIiwgdGhpcy5vbkJ1ZmZlcik7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJwbGF5aW5nXCIsIHRoaXMub25CdWZmZXJFbmQpO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwicGF1c2VcIiwgdGhpcy5vblBhdXNlKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNlZWtlZFwiLCB0aGlzLm9uU2Vlayk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCB0aGlzLm9uRW5kZWQpO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgdGhpcy5vbkVycm9yKTtcbiAgICBwbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJhdGVjaGFuZ2VcIiwgdGhpcy5vblBsYXlCYWNrUmF0ZUNoYW5nZSk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJlbnRlcnBpY3R1cmVpbnBpY3R1cmVcIiwgdGhpcy5vbkVuYWJsZVBJUCk7XG4gICAgcGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsZWF2ZXBpY3R1cmVpbnBpY3R1cmVcIiwgdGhpcy5vbkRpc2FibGVQSVApO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0cHJlc2VudGF0aW9ubW9kZWNoYW5nZWRcIiwgdGhpcy5vblByZXNlbnRhdGlvbk1vZGVDaGFuZ2UpO1xuICAgIHBsYXllci5hZGRFdmVudExpc3RlbmVyKFwiY2FucGxheVwiLCB0aGlzLm9uUmVhZHkpO1xuICAgIGlmIChwbGF5c2lubGluZSkge1xuICAgICAgcGxheWVyLnNldEF0dHJpYnV0ZShcInBsYXlzaW5saW5lXCIsIFwiXCIpO1xuICAgIH1cbiAgfVxuICByZW1vdmVMaXN0ZW5lcnMocGxheWVyKSB7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5XCIsIHRoaXMub25SZWFkeSk7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwbGF5XCIsIHRoaXMub25QbGF5KTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndhaXRpbmdcIiwgdGhpcy5vbkJ1ZmZlcik7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwbGF5aW5nXCIsIHRoaXMub25CdWZmZXJFbmQpO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwicGF1c2VcIiwgdGhpcy5vblBhdXNlKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNlZWtlZFwiLCB0aGlzLm9uU2Vlayk7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCB0aGlzLm9uRW5kZWQpO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgdGhpcy5vbkVycm9yKTtcbiAgICBwbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJhdGVjaGFuZ2VcIiwgdGhpcy5vblBsYXlCYWNrUmF0ZUNoYW5nZSk7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlbnRlcnBpY3R1cmVpbnBpY3R1cmVcIiwgdGhpcy5vbkVuYWJsZVBJUCk7XG4gICAgcGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsZWF2ZXBpY3R1cmVpbnBpY3R1cmVcIiwgdGhpcy5vbkRpc2FibGVQSVApO1xuICAgIHBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2FucGxheVwiLCB0aGlzLm9uUmVhZHkpO1xuICB9XG4gIGFzeW5jIGxvYWQodXJsKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IHsgb25FcnJvciwgY29uZmlnIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghKChfYSA9IGdsb2JhbFRoaXMuY3VzdG9tRWxlbWVudHMpID09IG51bGwgPyB2b2lkIDAgOiBfYS5nZXQoXCJtdXgtcGxheWVyXCIpKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2RrVXJsID0gU0RLX1VSTC5yZXBsYWNlKFwiVkVSU0lPTlwiLCBjb25maWcudmVyc2lvbik7XG4gICAgICAgIGF3YWl0IGltcG9ydChcbiAgICAgICAgICAvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovXG4gICAgICAgICAgYCR7c2RrVXJsfWBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkxvYWRlZCgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFssIGlkXSA9IHVybC5tYXRjaChpbXBvcnRfcGF0dGVybnMuTUFUQ0hfVVJMX01VWCk7XG4gICAgdGhpcy5wbGF5ZXIucGxheWJhY2tJZCA9IGlkO1xuICB9XG4gIHBsYXkoKSB7XG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMucGxheWVyLnBsYXkoKTtcbiAgICBpZiAocHJvbWlzZSkge1xuICAgICAgcHJvbWlzZS5jYXRjaCh0aGlzLnByb3BzLm9uRXJyb3IpO1xuICAgIH1cbiAgfVxuICBwYXVzZSgpIHtcbiAgICB0aGlzLnBsYXllci5wYXVzZSgpO1xuICB9XG4gIHN0b3AoKSB7XG4gICAgdGhpcy5wbGF5ZXIucGxheWJhY2tJZCA9IG51bGw7XG4gIH1cbiAgc2Vla1RvKHNlY29uZHMsIGtlZXBQbGF5aW5nID0gdHJ1ZSkge1xuICAgIHRoaXMucGxheWVyLmN1cnJlbnRUaW1lID0gc2Vjb25kcztcbiAgICBpZiAoIWtlZXBQbGF5aW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgfVxuICB9XG4gIHNldFZvbHVtZShmcmFjdGlvbikge1xuICAgIHRoaXMucGxheWVyLnZvbHVtZSA9IGZyYWN0aW9uO1xuICB9XG4gIGVuYWJsZVBJUCgpIHtcbiAgICBpZiAodGhpcy5wbGF5ZXIucmVxdWVzdFBpY3R1cmVJblBpY3R1cmUgJiYgZG9jdW1lbnQucGljdHVyZUluUGljdHVyZUVsZW1lbnQgIT09IHRoaXMucGxheWVyKSB7XG4gICAgICB0aGlzLnBsYXllci5yZXF1ZXN0UGljdHVyZUluUGljdHVyZSgpO1xuICAgIH1cbiAgfVxuICBkaXNhYmxlUElQKCkge1xuICAgIGlmIChkb2N1bWVudC5leGl0UGljdHVyZUluUGljdHVyZSAmJiBkb2N1bWVudC5waWN0dXJlSW5QaWN0dXJlRWxlbWVudCA9PT0gdGhpcy5wbGF5ZXIpIHtcbiAgICAgIGRvY3VtZW50LmV4aXRQaWN0dXJlSW5QaWN0dXJlKCk7XG4gICAgfVxuICB9XG4gIHNldFBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucGxheWVyLnBsYXliYWNrUmF0ZSA9IHJhdGU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMucHJvcHMub25FcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG4gIGdldER1cmF0aW9uKCkge1xuICAgIGlmICghdGhpcy5wbGF5ZXIpXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7IGR1cmF0aW9uLCBzZWVrYWJsZSB9ID0gdGhpcy5wbGF5ZXI7XG4gICAgaWYgKGR1cmF0aW9uID09PSBJbmZpbml0eSAmJiBzZWVrYWJsZS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gc2Vla2FibGUuZW5kKHNlZWthYmxlLmxlbmd0aCAtIDEpO1xuICAgIH1cbiAgICByZXR1cm4gZHVyYXRpb247XG4gIH1cbiAgZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgaWYgKCF0aGlzLnBsYXllcilcbiAgICAgIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcbiAgfVxuICBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgIGlmICghdGhpcy5wbGF5ZXIpXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7IGJ1ZmZlcmVkIH0gPSB0aGlzLnBsYXllcjtcbiAgICBpZiAoYnVmZmVyZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgZW5kID0gYnVmZmVyZWQuZW5kKGJ1ZmZlcmVkLmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5nZXREdXJhdGlvbigpO1xuICAgIGlmIChlbmQgPiBkdXJhdGlvbikge1xuICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gZW5kO1xuICB9XG4gIGdldFBsYXliYWNrSWQodXJsKSB7XG4gICAgY29uc3QgWywgaWRdID0gdXJsLm1hdGNoKGltcG9ydF9wYXR0ZXJucy5NQVRDSF9VUkxfTVVYKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXJsLCBwbGF5aW5nLCBsb29wLCBjb250cm9scywgbXV0ZWQsIGNvbmZpZywgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiB3aWR0aCA9PT0gXCJhdXRvXCIgPyB3aWR0aCA6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgPT09IFwiYXV0b1wiID8gaGVpZ2h0IDogXCIxMDAlXCJcbiAgICB9O1xuICAgIGlmIChjb250cm9scyA9PT0gZmFsc2UpIHtcbiAgICAgIHN0eWxlW1wiLS1jb250cm9sc1wiXSA9IFwibm9uZVwiO1xuICAgIH1cbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcIm11eC1wbGF5ZXJcIixcbiAgICAgIHtcbiAgICAgICAgcmVmOiB0aGlzLnJlZixcbiAgICAgICAgXCJwbGF5YmFjay1pZFwiOiB0aGlzLmdldFBsYXliYWNrSWQodXJsKSxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIHByZWxvYWQ6IFwiYXV0b1wiLFxuICAgICAgICBhdXRvUGxheTogcGxheWluZyB8fCB2b2lkIDAsXG4gICAgICAgIG11dGVkOiBtdXRlZCA/IFwiXCIgOiB2b2lkIDAsXG4gICAgICAgIGxvb3A6IGxvb3AgPyBcIlwiIDogdm9pZCAwLFxuICAgICAgICAuLi5jb25maWcuYXR0cmlidXRlc1xuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbl9fcHVibGljRmllbGQoTXV4LCBcImRpc3BsYXlOYW1lXCIsIFwiTXV4XCIpO1xuX19wdWJsaWNGaWVsZChNdXgsIFwiY2FuUGxheVwiLCBpbXBvcnRfcGF0dGVybnMuY2FuUGxheS5tdXgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-player/lib/players/Mux.js\n");

/***/ })

};
;