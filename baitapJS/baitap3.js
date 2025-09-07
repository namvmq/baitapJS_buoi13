function tinhThue() {
  let hoTen = document.getElementById("hoTen").value.trim();
  let thuNhap = parseFloat(document.getElementById("thuNhap").value);
  let phuThuoc = parseInt(document.getElementById("phuThuoc").value);

  if (!hoTen || isNaN(thuNhap) || isNaN(phuThuoc) || thuNhap < 0 || phuThuoc < 0) {
    document.getElementById("result").innerText = "⚠️ Vui lòng nhập dữ liệu hợp lệ!";
    return;
  }

  // Tính thu nhập chịu thuế
  let thuNhapChiuThue = thuNhap - 4 - (phuThuoc * 1.6);
  if (thuNhapChiuThue <= 0) {
    document.getElementById("result").innerText = 
      `Họ tên: ${hoTen}\nThu nhập chịu thuế: 0\nKhông phải nộp thuế ✅`;
    return;
  }

  // Xác định thuế suất
  let thueSuat = 0;
  if (thuNhapChiuThue <= 60) thueSuat = 5;
  else if (thuNhapChiuThue <= 120) thueSuat = 10;
  else if (thuNhapChiuThue <= 210) thueSuat = 15;
  else if (thuNhapChiuThue <= 384) thueSuat = 20;
  else if (thuNhapChiuThue <= 624) thueSuat = 25;
  else if (thuNhapChiuThue <= 960) thueSuat = 30;
  else thueSuat = 35;

  // Tính thuế phải trả
  let thuePhaiTra = thuNhapChiuThue * thueSuat / 100;

  document.getElementById("result").innerText = 
    `Họ tên: ${hoTen}
Thu nhập chịu thuế: ${thuNhapChiuThue} triệu
Thuế suất: ${thueSuat}%
Thuế phải nộp: ${thuePhaiTra.toLocaleString("vi-VN")} triệu`;
}

function resetForm() {
  document.getElementById("hoTen").value = "";
  document.getElementById("thuNhap").value = "";
  document.getElementById("phuThuoc").value = "";
  document.getElementById("result").innerText = "";
}
