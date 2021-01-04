const Click = {
  bind(el, binding) {
    const runMethod = function () {
      binding.value && binding.value();
    }
    const delay = binding.arg ? +binding.arg : 800;
    el.onclick = function () {
      const current = +new Date;
      if (!el.time) {
        runMethod();
      } else {
        if (current - el.time > delay) {
          runMethod();
        }
      }
      el.time = current;
    }
  }
};

export default {
  name: 'click',
  directive: Click
};

