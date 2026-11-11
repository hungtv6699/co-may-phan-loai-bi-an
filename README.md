# Cỗ máy phân loại bí ẩn

Game ghép đôi và nhận biết số chẵn, số lẻ từ 1 đến 10 cho trẻ 5–6 tuổi.

- [Chơi trên GitHub Pages](https://hungtv6699.github.io/co-may-phan-loai-bi-an/)
- [Báo cáo kiểm thử](reports/QA.md)

## Chơi trên bảng tương tác

Chọn **Hướng dẫn** để xem cách ghép 4 và 5 quả táo hoặc **Bắt đầu** để chơi ngay. Có thể bật **Toàn màn hình** và điều chỉnh **Âm thanh**. Đợi hộp mở, đếm đồ vật, rồi kéo hộp vào máy hoặc chạm hộp và chạm máy. Nếu chọn sai, trẻ được thử lại. **Gợi ý** mở khung 2 cột × 5 hàng để quan sát từng đôi. Chọn **Tiếp tục** sau khi xem kết quả. Mỗi vòng có đủ 10 số, đảo thứ tự khi chơi lại.

## Chơi không cần mạng

Giải nén toàn bộ ZIP vào cùng một thư mục. Mở `index.html` bằng Chrome hoặc Edge. Không cần cài đặt, tài khoản hay máy chủ. Giữ các tệp cùng thư mục sau khi giải nén.

## Bảo trì

`index.html` là giao diện, `game.css` chứa bố cục và chuyển động, `game.js` chứa luật chơi, đồ họa SVG cho các món đồ và âm thanh tổng hợp bằng Web Audio. Cảnh nhà máy được vẽ bằng SVG và CSS có đổ bóng tạo chiều sâu. Kiểm thử bằng `node tools/qa.cjs`; đặt `PLAYWRIGHT_PATH` tới thư mục Playwright đã cài hoặc cài Playwright ngoài gói offline. Thêm URL Pages làm tham số để chạy kiểm thử online.

audio/ chứa 8 câu thoại Ngọc Linh dựng từ preset Onter Voice Lab (VieNeu v3 Turbo). Game phát MP3 tại chỗ; nhạc và hiệu ứng được tạo tại chỗ. Nút âm thanh tắt cả ba.
