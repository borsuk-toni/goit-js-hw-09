import"./assets/modulepreload-polyfill-ec808ebb.js";const e=document.querySelector(".feedback-form"),m="feedback-form-state",a=JSON.parse(localStorage.getItem(m));a&&(e.elements.email.value=a.email||"",e.elements.message.value=a.message||"");e.addEventListener("input",s=>{const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};localStorage.setItem(m,JSON.stringify(t))});e.addEventListener("submit",s=>{if(s.preventDefault(),e.elements.email.value===""||e.elements.message.value==="")return;const t={email:e.elements.email.value.trim(),message:e.elements.message.value.trim()};console.log(t),localStorage.removeItem(m),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map
