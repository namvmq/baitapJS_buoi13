function toggleKetNoi() {
  let loaiKH = document.getElementById("loaiKH").value;
  let soKetNoi = document.getElementById("soKetNoi");
  if (loaiKH === "doanhNghiep") {
    soKetNoi.disabled = false;
  } else {
    soKetNoi.disabled = true;
    soKetNoi.value = "";
  }
}

function tinhTienCap() {
  let maKH = document.getElementById("maKH").value.trim();
  let loaiKH = document.getElementById("loaiKH").value;
  let soKetNoi = parseInt(document.getElementById("soKetNoi").value) || 0;
  let soKenh = parseInt(document.getElementById("soKenh").value);

  if (!maKH || isNaN(soKenh) || soKenh < 0) {
    document.getElementById("result").innerText = "⚠️ Vui lòng nhập đủ dữ liệu hợp lệ!";
    return;
  }

  let tongTien = 0;

  if (loaiKH === "nhaDan") {
    tongTien = 4.5 + 20.5 + (soKenh * 7.5);
  } else {
    tongTien = 15; // phí xử lý
    // phí dịch vụ cơ bản
    if (soKetNoi <= 10) {
      tongTien += 75;
    } else {
      tongTien += 75 + (soKetNoi - 10) * 5;
    }
    tongTien += soKenh * 50;
  }

  document.getElementById("result").innerText =
    `Mã KH: ${maKH}
Loại KH: ${loaiKH === "nhaDan" ? "Nhà dân" : "Doanh nghiệp"}
Số kênh cao cấp: ${soKenh}
Số kết nối: ${loaiKH === "doanhNghiep" ? soKetNoi : "N/A"}
Tổng tiền phải trả: $${tongTien.toFixed(2)}`;
}

function resetForm() {
  document.getElementById("maKH").value = "";
  document.getElementById("loaiKH").value = "nhaDan";
  document.getElementById("soKetNoi").value = "";
  document.getElementById("soKetNoi").disabled = true;
  document.getElementById("soKenh").value = "";
  document.getElementById("result").innerText = "";
}
