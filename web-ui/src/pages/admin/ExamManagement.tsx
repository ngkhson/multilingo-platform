import React, { useState } from 'react';
import { FileText, Upload, Plus, Edit, Trash2 } from 'lucide-react';

const ExamManagement = () => {
  const exams = [
    { id: 'cam-18-1', title: 'Cambridge IELTS 18 - Test 1', parts: 4, questions: 40, status: 'Active' },
    { id: 'cam-18-2', title: 'Cambridge IELTS 18 - Test 2', parts: 4, questions: 40, status: 'Active' },
    { id: 'toeic-2023', title: 'TOEIC ETS 2023', parts: 7, questions: 200, status: 'Draft' },
  ];

  const [showUpload, setShowUpload] = useState(false);

  return (
    <div>
      <div className="flex-between" style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Quản lý Đề thi (JSONB)</h1>
        <button className="btn btn-primary" onClick={() => setShowUpload(!showUpload)}>
          <Plus size={18} /> Thêm Đề thi Mới
        </button>
      </div>

      {showUpload && (
        <div className="ed-card slide-up" style={{ padding: '2rem', marginBottom: '2rem', border: '1px dashed var(--primary)' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem' }}>Tải lên Cấu trúc Đề thi (JSON Format)</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            Hệ thống sử dụng cột <strong>`content` (JSONB)</strong> để lưu trữ toàn bộ cấu trúc động của đề thi (Đoạn văn, Câu hỏi trắc nghiệm, Điền khuyết).
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.875rem' }}>Mã đề thi (Exam Code)</label>
              <input type="text" className="input-field" placeholder="VD: IELTS-CAM-19-TEST-1" />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.875rem' }}>Tiêu đề</label>
              <input type="text" className="input-field" placeholder="Cambridge IELTS 19 - Test 1" />
            </div>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.875rem' }}>Nội dung JSON</label>
            <textarea 
              className="input-field" 
              rows={8} 
              style={{ fontFamily: 'monospace', fontSize: '0.875rem', resize: 'vertical' }}
              placeholder='{ "parts": [ { "type": "reading", "passage": "...", "questions": [...] } ] }'
            ></textarea>
          </div>

          <div className="flex-center" style={{ gap: '1rem', marginTop: '1.5rem', justifyContent: 'flex-end' }}>
            <button className="btn btn-outline" onClick={() => setShowUpload(false)}>Hủy</button>
            <button className="btn btn-primary"><Upload size={18} /> Lưu vào Database</button>
          </div>
        </div>
      )}

      <div className="ed-card">
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'var(--bg-tertiary)', borderBottom: '1px solid var(--border-dark)', color: 'var(--text-secondary)' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Mã Đề thi</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Tên Đề thi</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Cấu trúc</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Trạng thái</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, textAlign: 'right' }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {exams.map(exam => (
              <tr key={exam.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{exam.id.toUpperCase()}</td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ fontWeight: 500 }}>{exam.title}</div>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{exam.parts} phần / {exam.questions} câu</div>
                </td>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <span className={`badge ${exam.status === 'Active' ? 'badge-green' : 'badge-gray'}`}>{exam.status}</span>
                </td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <div className="flex-center" style={{ justifyContent: 'flex-end', gap: '0.5rem' }}>
                    <button className="btn btn-outline" style={{ padding: '0.4rem', border: 'none' }}><Edit size={18} color="var(--primary)" /></button>
                    <button className="btn btn-outline" style={{ padding: '0.4rem', border: 'none' }}><Trash2 size={18} color="var(--danger)" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamManagement;
