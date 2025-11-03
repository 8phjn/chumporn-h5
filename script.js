function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');

  if (username === "user" && password === "1234") {
    window.location.href = "page2.html";
  } else {
    error.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    error.style.color = "red";
  }
}

function goToDetail(name, img, desc) {
  localStorage.setItem("placeName", name);
  localStorage.setItem("placeImage", img);
  localStorage.setItem("placeDesc", desc);
  window.location.href = "page3.html";
}

function backToMain() {
  window.location.href = "page2.html";
}

// สำหรับโหลดข้อมูลในหน้า page3.html
window.onload = () => {
  if (document.getElementById("placeName")) {
    document.getElementById("placeName").textContent = localStorage.getItem("placeName");
    document.getElementById("placeImage").src = localStorage.getItem("placeImage");
    document.getElementById("placeDesc").textContent = localStorage.getItem("placeDesc");
  }
};
