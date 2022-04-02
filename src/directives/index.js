// 负责管理所有的自定义指令

export const imageerror = {
  inserted(el, binding) {
    el.src = el.src || binding.value
    el.onerror = function() {
      el.src = binding.value
    }
  },
  componentUpdated(el, binding) {
    el.src = el.src || binding.value
    el.onerror = function() {
      el.src = binding.value
    }
  }
}
