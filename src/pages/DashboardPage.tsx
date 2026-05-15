import React, { useState } from 'react';
import {
  Bell,
  Users,
  CreditCard,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Select';
import { Switch } from '../components/ui/Switch';
import { Checkbox } from '../components/ui/Checkbox';
import { Avatar } from '../components/ui/Avatar';
import { Badge } from '../components/ui/Badge';
import { Alert } from '../components/ui/Alert';

export const DashboardPage: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [status, setStatus] = useState('online');

  const statusOptions = [
    { value: 'online', label: 'Online' },
    { value: 'away', label: 'Away' },
    { value: 'busy', label: 'Do Not Disturb' },
    { value: 'offline', label: 'Invisible' },
  ];

  return (
    <div className="dashboard-container" style={{ paddingBottom: '4rem' }}>
      {/* Dashboard Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '3rem'
      }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 100, marginBottom: '0.25rem' }}>
            System <span style={{ color: 'var(--accent-color)' }}>Overview</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Welcome back, administrator. Everything looks healthy.</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button variant="outlined" size="sm" icon={<Bell size={16} />} />
          <Avatar
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop"
            alt="Admin"
            size="md"
            status="online"
          />
        </div>
      </header>

      {/* Top Stats Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {[
          { title: 'Total Revenue', value: '$45,231.89', trend: '+20.1%', icon: <CreditCard size={20} />, color: 'var(--accent-color)' },
          { title: 'Active Users', value: '+2,350', trend: '+180.1%', icon: <Users size={20} />, color: 'blue' },
          { title: 'System Uptime', value: '99.98%', trend: '+0.1%', icon: <TrendingUp size={20} />, color: 'purple' },
          { title: 'Response Time', value: '142ms', trend: '-12%', icon: <Clock size={20} />, color: 'orange' },
        ].map((stat, i) => (
          <div key={i} className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: stat.color, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {stat.title}
              </span>
              <div style={{ color: 'var(--text-muted)' }}>{stat.icon}</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-sans)' }}>{stat.value}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                <Badge variant="duo" size="sm" color={stat.trend.startsWith('+') ? 'green' : 'red'}>
                  {stat.trend}
                </Badge>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>from last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '2rem'
      }}>
        {/* Left Column: Form & Settings Showcase */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="feature-card">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Project Configuration</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <Select
                  label="Availability Status"
                  options={statusOptions}
                  value={status}
                  onChange={setStatus}
                  size="default"
                />
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <Button variant="filled" size="default" fullWidth style={{ background: 'var(--accent-color)' }}>
                    Apply Changes
                  </Button>
                </div>
              </div>

              <div style={{ height: '1px', background: 'var(--border-color)', margin: '0.5rem 0' }}></div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <Switch
                  label="Push Notifications"
                  description="Receive real-time alerts for system events and security audits."
                  checked={notificationsEnabled}
                  onChange={setNotificationsEnabled}
                  size="default"
                />
                <Switch
                  label="Auto-Update Modules"
                  description="Automatically install security patches and minor feature updates."
                  checked={autoUpdate}
                  onChange={setAutoUpdate}
                  size="default"
                />
              </div>

              <div style={{ height: '1px', background: 'var(--border-color)', margin: '0.5rem 0' }}></div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                <Checkbox label="Agree to analytics" defaultChecked size="default" />
                <Checkbox label="Public profile" size="default" />
                <Checkbox label="Expert mode" size="default" />
              </div>
            </div>
          </div>

          <Alert
            variant="duo"
            title="Scheduled Maintenance"
            icon={<AlertCircle size={18} />}
          >
            The system will undergo scheduled maintenance on Sunday, May 24th at 02:00 AM UTC. Expect minor downtime.
          </Alert>
        </div>

        {/* Right Column: Recent Activity */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="feature-card">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Recent Activity</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { user: 'Sarah Wilson', action: 'Uploaded new assets', time: '2m ago', color: 'green' },
                { user: 'James Miller', action: 'Deployed to production', time: '15m ago', color: 'purple' },
                { user: 'Michael Chen', action: 'Updated security policy', time: '1h ago', color: 'blue' },
                { user: 'System Bot', action: 'Backing up database', time: '2h ago', color: 'orange' },
              ].map((activity, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Avatar
                    size="sm"
                    color={activity.color}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{activity.user}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{activity.action}</div>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {activity.time}
                  </div>
                </div>
              ))}

              <Button variant="outlined" size="sm" fullWidth style={{ marginTop: '0.5rem' }}>
                View All Activity
              </Button>
            </div>
          </div>

          <div className="feature-card" style={{ background: 'var(--bg-secondary)', borderStyle: 'dashed' }}>
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                <CheckCircle2 size={32} strokeWidth={1} style={{ margin: '0 auto' }} />
              </div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Integrations Ready</h4>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Connect your favorite tools to automate your workflow.</p>
              <Button variant="outlined" size="sm" color="white">Connect Tools</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
