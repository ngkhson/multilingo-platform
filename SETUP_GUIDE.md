# Hướng dẫn Cài đặt & Chạy Dự án cho Thành viên mới (Setup Guide)

Chào mừng bạn đến với dự án **Mock Test Platform** (Nền tảng Thi thử và Chấm điểm Ngoại ngữ tích hợp AI)! Tài liệu này sẽ hướng dẫn bạn các bước chi tiết để clone dự án về máy và chạy thử thành công trong lần đầu tiên.

---

## 1. Yêu cầu Hệ thống (Prerequisites)
Trước khi bắt đầu, hãy đảm bảo máy tính của bạn đã cài đặt sẵn các phần mềm sau:
1. **[Git](https://git-scm.com/)**: Dùng để quản lý mã nguồn.
2. **[Docker Desktop](https://www.docker.com/products/docker-desktop/)**: Bắt buộc để chạy nhanh toàn bộ hệ thống (Database, Redis, Frontend, Backend) mà không cần cấu hình phức tạp.
3. **[Node.js](https://nodejs.org/)** (v20+): Nếu bạn làm việc trên Frontend.
4. **[Java JDK 21](https://adoptium.net/)**: Nếu bạn làm việc trên Backend.

---

## 2. Clone Dự án từ GitHub
Mở Terminal / Command Prompt và chạy lệnh sau:
```bash
git clone https://github.com/ngkhson/multilingo-platform.git
cd multilingo-platform
```

---

## 3. Cách chạy dự án dễ nhất (Bằng Docker)
Đây là cách khuyên dùng cho mọi thành viên (kể cả FE hay BE) để có ngay môi trường chạy thử hoàn chỉnh.

1. Khởi động Docker Desktop trên máy tính.
2. Mở Terminal tại thư mục gốc của dự án (`multilingo-platform`) và chạy lệnh:
   ```bash
   docker-compose up -d --build
   ```
3. Đợi vài phút (cho lần đầu tiên) để Docker tải image và khởi động các dịch vụ. Khi chạy xong, bạn có thể truy cập:
   - **Frontend:** http://localhost
   - **Backend API:** http://localhost:8080/api/test/hello
   - **Database (PostgreSQL):** Chạy ngầm ở cổng `5433` (Xem chi tiết kết nối ở phần dưới).

*Để tắt toàn bộ hệ thống, chạy lệnh: `docker-compose down`*

---

## 4. Cách chạy riêng lẻ để lập trình (Development Mode)

Khi bạn muốn code và xem thay đổi ngay lập tức (Hot-reload), hãy chạy Frontend và Backend riêng biệt ở môi trường máy thật.

### Dành cho Frontend (ReactJS)
1. Mở Terminal, di chuyển vào thư mục `frontend`:
   ```bash
   cd frontend
   ```
2. Cài đặt các thư viện cần thiết:
   ```bash
   npm install
   ```
3. Khởi động môi trường dev:
   ```bash
   npm run dev
   ```
👉 Truy cập: `http://localhost:5173`

### Dành cho Backend (Spring Boot)
1. Mở Terminal, di chuyển vào thư mục `backend`:
   ```bash
   cd backend
   ```
2. Khởi động Spring Boot qua Maven:
   ```bash
   mvn spring-boot:run
   ```
👉 Truy cập API: `http://localhost:8080`

**⚠️ Quan trọng cho Backend Dev:** 
Backend cần kết nối với CSDL Postgres và Redis. Cách tiện nhất là bạn vẫn chạy lệnh `docker-compose up -d` ở thư mục gốc (để mượn Database và Redis của Docker), sau đó bạn có thể tắt đi service backend của Docker hoặc cứ để đó chạy song song. Code Spring Boot trên máy thật của bạn sẽ tự động trỏ vào Database Postgres thông qua `localhost:5433`.

---

## 5. Kết nối Database (Dành cho pgAdmin / DBeaver / DataGrip)
Nếu bạn muốn xem cấu trúc các bảng hoặc dữ liệu, hãy dùng một phần mềm quản lý Database trên máy thật và kết nối với thông tin sau:
- **Host:** `localhost`
- **Port:** `5433`
- **Database:** `multilingodb`
- **Username:** `postgres`
- **Password:** `postgres`

Chúc bạn làm việc hiệu quả và đóng góp được nhiều code chất lượng cho dự án! 🚀
