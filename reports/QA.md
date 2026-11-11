# Kiểm thử và bàn giao

Ngày: 12/11/2026 (Việt Nam).

Chạy bằng Playwright trên Chrome với chuột và Edge với cảm ứng giả lập ở 1280 × 720. Kịch bản chạy cả hai bài minh họa, kiểm tra khung gợi ý, cố tình phân loại sai và thử lại, hoàn thành đủ 10 hộp qua xen kẽ thao tác kéo thả và chạm/chọn, đối chiếu từng số lượng, số đôi và kết quả, sau đó chơi lại và kiểm tra tắt/bật âm thanh. Bản offline dùng file:// trong ngữ cảnh trình duyệt tắt mạng. Xem các dòng JSON đính kèm để biết phiên bản trình duyệt và thứ tự từng lượt.

- [Game online](https://hungtv6699.github.io/co-may-phan-loai-bi-an/)
- [Kho mã nguồn](https://github.com/hungtv6699/co-may-phan-loai-bi-an)
- [Hướng dẫn](../README.md)

Bảng tương tác vật lý chưa được kiểm thử. Đồ họa dùng SVG/CSS đổ bóng để tạo chiều sâu; không dùng mô hình WebGL. Hiệu năng trên thiết bị lớp học cần xác nhận khi lắp đặt.

## Tái lập và lưu giữ

Chạy `node tools/qa.cjs` để kiểm tra offline và xuất ảnh PNG vào outputs; thêm URL Pages để kiểm tra online. Chạy `powershell -ExecutionPolicy Bypass -File tools/package.ps1` để xuất ZIP. Ảnh là bằng chứng kiểm thử của game này, tạo ngày 12/11/2026; ngày rà soát lưu giữ 26/11/2026. File WAV trung gian của công cụ dựng giọng nằm ở tmp/voice, do tools/render-voice.py tạo, được xóa theo từng câu sau khi mã hóa MP3 thành công. Ngày rà soát tệp tạm 19/11/2026; không tự động xóa theo ngày.

## Kiểm tra âm thanh và triển khai

- Tám tệp MP3 của preset Ngọc Linh, dựng bằng mô hình VieNeu v3 Turbo của Onter Voice Lab trên máy. ffprobe đọc được thời lượng từ 1,84 đến 5,52 giây.
- Kịch bản kiểm tra tám tệp tải được metadata, lời hướng dẫn và gợi ý có phát, câu cũ dừng khi mở gợi ý, và nút âm thanh tạm dừng rồi khôi phục Web Audio. Chế độ toàn màn hình được bật và tắt từ màn chào.
- Commit game đã kiểm thử: [85f91a2](https://github.com/hungtv6699/co-may-phan-loai-bi-an/commit/85f91a2d65e09130391a759dc57511255dde3e7e). Các commit bàn giao sau đó chỉ thêm bằng chứng và tài liệu.
- Tám WAV trung gian đã xóa sau khi mã hóa MP3. Không có CDN hoặc yêu cầu API giọng đọc trong lúc chơi.
- [Ảnh màn hình](screenshots/) · [Kết quả online](online.jsonl) · [Kết quả offline](offline.jsonl)

## Bố cục theo màn hình — 12/11/2026

Kiểm thử Chrome ở 9 kích thước từ 320 × 568 đến 1920 × 1080. Điện thoại dọc đặt hai máy dưới khay; điện thoại ngang giữ ba cột và giảm chiều cao. Kịch bản kiểm tra khay đủ 10 đồ vật, các nút nằm trong màn hình, mở gợi ý, chạm chọn sai và kéo vào máy đúng. Xem [ảnh](screenshots/responsive/) và [kết quả](responsive.jsonl). Tái lập bằng node tools/responsive-qa.cjs; đặt SCREENSHOTS=1 để xuất ảnh. Ảnh kiểm thử tạo ngày 12/11/2026, rà soát giữ lại ngày 26/11/2026.
