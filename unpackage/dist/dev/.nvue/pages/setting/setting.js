import { resolveComponent, openBlock, createElementBlock, createVNode } from "vue";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_cell = resolveComponent("van-cell");
  const _component_van_calendar = resolveComponent("van-calendar");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createVNode(_component_van_cell, {
      title: "选择单个日期",
      value: _ctx.date,
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.show = true)
    }, null, 8, ["value"]),
    createVNode(_component_van_calendar, {
      show: _ctx.show,
      "onUpdate:show": _cache[1] || (_cache[1] = ($event) => _ctx.show = $event),
      onConfirm: _ctx.onConfirm
    }, null, 8, ["show", "onConfirm"])
  ]);
}
const setting = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/study/fe-learning/mobile/demo/pages/setting/setting.nvue"]]);
export {
  setting as default
};
