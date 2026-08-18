# Mock Test Platform

Nền tảng Thi thử và Chấm điểm Ngoại ngữ tích hợp AI.

## Cấu trúc thư mục
- `frontend/`: Ứng dụng ReactJS (Vite, TS, Tailwind).
- `backend/`: Máy chủ Java Spring Boot.
- `.github/workflows/`: Cấu hình CI/CD tự động bằng GitHub Actions.
- `docker-compose.yml`: File orchestration để chạy toàn bộ hệ thống qua Docker.
- `init.sql`: File script khởi tạo database PostgreSQL ban đầu.

## Cách chạy dự án cục bộ

### 1. Dùng Docker Compose (Khuyên dùng)
Yêu cầu: Đã cài đặt Docker và Docker Compose.

```bash
# Khởi động tất cả các dịch vụ (Frontend, Backend, DB, Redis)
docker-compose up -d --build
```
- Frontend: `http://localhost:80`
- Backend: `http://localhost:8080`

### 2. Chạy thủ công
**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
./mvnw spring-boot:run
```
*Lưu ý: Cần có PostgreSQL và Redis đang chạy với cấu hình tương ứng trong `application.properties`.*
