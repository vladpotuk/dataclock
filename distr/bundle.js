(()=>{var t={423:t=>{t.exports={getDate:function(){return(new Date).toLocaleDateString()}}},558:t=>{t.exports={getTime:function(){return(new Date).toLocaleTimeString()}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}(()=>{"use strict";var t=n(423).getDate,e=n(558).getTime,o=t(),r=e();document.addEventListener("DOMContentLoaded",(function(){var t=document.createElement("div");t.textContent="Поточна дата та час: ".concat(o," ").concat(r),t.className="date-time",document.body.appendChild(t)}))})()})();