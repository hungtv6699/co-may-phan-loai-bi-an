# Kiểm thử và bàn giao

Ngày: 12/11/2026 (Việt Nam).

Chạy bằng Playwright trên Chrome với chuột và Edge với cảm ứng giả lập ở 1280 × 720. Kịch bản chạy cả hai bài minh họa, kiểm tra khung gợi ý, cố tình phân loại sai và thử lại, hoàn thành đủ 10 hộp qua xen kẽ thao tác kéo thả và chạm/chọn, đối chiếu từng số lượng, số đôi và kết quả, sau đó chơi lại và kiểm tra tắt/bật âm thanh. Bản offline dùng file:// trong ngữ cảnh trình duyệt tắt mạng. Xem các dòng JSON đính kèm để biết phiên bản trình duyệt và thứ tự từng lượt.

- [Game online](https://hungtv6699.github.io/co-may-phan-loai-bi-an/)
- [Kho mã nguồn](https://github.com/hungtv6699/co-may-phan-loai-bi-an)
- [Hướng dẫn](../README.md)

Bảng tương tác vật lý chưa được kiểm thử. Đồ họa dùng SVG/CSS đổ bóng để tạo chiều sâu; không dùng mô hình WebGL. Hiệu năng trên thiết bị lớp học cần xác nhận khi lắp đặt.

## Tái lập và lưu giữ

Chạy `node tools/qa.cjs` để kiểm tra offline và xuất ảnh PNG vào outputs; thêm URL Pages để kiểm tra online. Chạy `powershell -ExecutionPolicy Bypass -File tools/package.ps1` để xuất ZIP. Ảnh là bằng chứng kiểm thử của game này, tạo ngày 12/11/2026; ngày rà soát lưu giữ 26/11/2026. File WAV trung gian của công cụ dựng giọng nằm ở tmp/voice, do tools/render-voice.py tạo, được xóa theo từng câu sau khi mã hóa MP3 thành công. Ngày rà soát tệp tạm 19/11/2026; không tự động xóa theo ngày.
