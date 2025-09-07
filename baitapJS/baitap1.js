function tinhKetQua() {
  let diemChuan = parseFloat(document.getElementById("diemChuan").value);
  let mon1 = parseFloat(document.getElementById("mon1").value);
  let mon2 = parseFloat(document.getElementById("mon2").value);
  let mon3 = parseFloat(document.getElementById("mon3").value);
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = parseInt(document.getElementById("doiTuong").value);

  if (isNaN(diemChuan) || isNaN(mon1) || isNaN(mon2) || isNaN(mon3)) {
    document.getElementById("result").innerText = "⚠️ Vui lòng nhập đầy đủ điểm!";
    return;
  }

  let diemKV = 0;
  if (khuVuc === "A") diemKV = 2;
  else if (khuVuc === "B") diemKV = 1;
  else if (khuVuc === "C") diemKV = 0.5;

  let diemDT = 0;
  if (doiTuong === 1) diemDT = 2.5;
  else if (doiTuong === 2) diemDT = 1.5;
  else if (doiTuong === 3) diemDT = 1;

  let tongDiem = mon1 + mon2 + mon3 + diemKV + diemDT;

  let ketQua = "";
  if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
    ketQua = "Rớt (có môn bị điểm 0)";
  } else if (tongDiem >= diemChuan) {
    ketQua = "Đậu ✅";
  } else {
    ketQua = "Rớt ❌";
  }

  document.getElementById("result").innerText =
    `Tổng điểm: ${tongDiem} → Kết quả: ${ketQua}`;
}

function resetForm() {
  document.getElementById("diemChuan").value = "";
  document.getElementById("mon1").value = "";
  document.getElementById("mon2").value = "";
  document.getElementById("mon3").value = "";
  document.getElementById("khuVuc").value = "X";
  document.getElementById("doiTuong").value = "0";
  document.getElementById("result").innerText = "";
}
