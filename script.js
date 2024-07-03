let btn = document.getElementById('test');
btn.addEventListener('click', () => {　 // 監聽此元素是否被點擊，若被點擊則執行內容
  alert("點到我了");                     // 跳出「點到我了」視窗
  btn.disabled = true;                  // 設為禁止點擊
});