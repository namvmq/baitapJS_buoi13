function tinhTienDien() {
  let ten = document.getElementById("ten").value.trim();
  let soKw = parseInt(document.getElementById("soKw").value);

  if (!ten || isNaN(soKw) || soKw < 0) {
    document.getElementById("result").innerText = "⚠️ Vui lòng nhập tên và số kWh hợp lệ!";
    return;
  }

  let tongTien = 0;
  let kwConLai = soKw;

  if (kwConLai > 0) {
    let bac1 = Math.min(kwConLai, 50);
    tongTien += bac1 * 500;
    kwConLai -= bac1;
  }
  if (kwConLai > 0) {
    let bac2 = Math.min(kwConLai, 50);
    tongTien += bac2 * 650;
    kwConLai -= bac2;
  }
  if (kwConLai > 0) {
    let bac3 = Math.min(kwConLai, 100);
    tongTien += bac3 * 850;
    kwConLai -= bac3;
  }
  if (kwConLai > 0) {
    let bac4 = Math.min(kwConLai, 150);
    tongTien += bac4 * 1100;
    kwConLai -= bac4;
  }
  if (kwConLai > 0) {
    tongTien += kwConLai * 1300;
  }

  // Format VNĐ
  let tienFormat = tongTien.toLocaleString("vi-VN") + " đ";

  document.getElementById("result").innerText = 
    `Khách hàng: ${ten}\nTiêu thụ: ${soKw} kWh\nSố tiền phải trả: ${tienFormat}`;
}

function resetForm() {
  document.getElementById("ten").value = "";
  document.getElementById("soKw").value = "";
  document.getElementById("result").innerText = "";
}
