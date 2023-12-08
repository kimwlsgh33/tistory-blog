/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
function snow() {
  const scrollHeight = document.body.scrollHeight;
  const snowflake = document.createElement("div");
  // 5 ~ 10
  const snowflakeSize = Math.random() * 10 + 5;
  const duration = Math.random() * 3 + scrollHeight / 70 - snowflakeSize;
  const delay = Math.random() * 5;

  snowflake.classList.add("snowflake");
  // 눈 사이즈 설정
  snowflake.style.width = snowflakeSize + "px";
  snowflake.style.height = snowflakeSize + "px";
  // 눈 내리는 위치 설정 : 브라우저 가로길이 * 0 ~ 1
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  // 원근감 설정
  snowflake.style.perspective = Math.random() * 500 + "px";
  // 투명도 설정
  snowflake.style.opacity = "" + Math.random() * 0.5 + 0.5;
  snowflake.style.transition = "all " + duration + "s linear";
  // 바닥에 닿을때까지 떨어지게 함
  document.body.appendChild(snowflake);

  setTimeout(function() {
    snowflake.style.transform = "translateY(" + scrollHeight + "px)";
  }, delay * 1000);

  // 눈이 바닥에 닿으면 제거
  snowflake.addEventListener("transitionend", function() {
    snowflake.remove();
  });
}

// 브라우저가 로딩되면 snow() 함수를 0.1초마다 실행
window.addEventListener("load", function() {
  setInterval(snow, 100);
});
