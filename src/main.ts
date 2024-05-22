const usernameInput = document.getElementById("username") as HTMLInputElement;
const submitButton = document.getElementById("submit") as HTMLButtonElement;

usernameInput.focus();
submitButton.addEventListener("click", handleClick);
usernameInput.addEventListener("click", (e) => {
  console.dir(e);
}); // mouseClick이라고 자동으로 추론되기도 함. 그때는 타입 명시 필요 없음

function handleClick(e: MouseEvent) {
  e.preventDefault();
  const message = `${usernameInput.value}님 반갑습니다!`;
  alert(message);
}
