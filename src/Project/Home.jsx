import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import {
  CalendarDays,
  ClipboardList,
  FileText,
  BookOpen,
  UserCheck,
  HelpCircle,
} from 'lucide-react';

const dashboardItems = [
  { label: 'Info Desk', icon: ClipboardList, path: '/infodesk' },
  { label: 'Calendar', icon: CalendarDays, path: '/calendar' },
  { label: 'Circular', icon: FileText, path: '/circular' },
  { label: 'Attendance', icon: UserCheck, path: '/attendance' },
  { label: 'Fee', icon: FileText, path: '/fee' },
  { label: 'Home Work', icon: BookOpen, path: '/homework' },
  { label: 'My Editor', icon: FileText, path: '/editor' },
  { label: 'Queries', icon: HelpCircle, path: '/queries' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="dashboard-grid">
        {dashboardItems.map(({ label, icon: Icon, path }, i) => (
          <div key={i} className="card" onClick={() => navigate(path)}>
            <div className="card-content">
              <Icon className="card-icon" />
              <p className="card-label">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}