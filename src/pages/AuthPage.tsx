import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Checkbox } from '../components/ui/Checkbox';
import { Alert } from '../components/ui/Alert';
import { Mail, Lock, User, Globe, LayoutGrid } from 'lucide-react';

export const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="auth-example-page" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '450px',
        background: 'var(--bg-glass)',
        border: '1px solid var(--border-color)',
        borderRadius: '24px',
        padding: '3rem',
        backdropFilter: 'blur(16px)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            background: 'var(--accent-color)', 
            borderRadius: '14px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
            boxShadow: '0 8px 16px color-mix(in srgb, var(--accent-color) 20%, transparent)'
          }}>
            <Lock size={24} color="var(--accent-text)" />
          </div>
          <h1 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '2rem', 
            fontWeight: 100,
            marginBottom: '0.5rem' 
          }}>
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {mode === 'login' ? 'Please enter your details to sign in' : 'Start your premium experience today'}
          </p>
        </div>

        {showSuccess && (
          <Alert 
            status="success" 
            variant="duo"
            title={mode === 'login' ? "Welcome back!" : "Account created!"}
            description={mode === 'login' ? "Redirecting to your dashboard..." : "Please check your email to verify."}
            style={{ marginBottom: '2rem' }}
          />
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {mode === 'signup' && (
            <Input 
              label="Full Name"
              placeholder="John Doe"
              leftIcon={<User size={18} />}
              fullWidth
            />
          )}
          
          <Input 
            label="Email Address"
            placeholder="name@example.com"
            leftIcon={<Mail size={18} />}
            fullWidth
          />

          <Input 
            label="Password"
            type="password"
            placeholder="••••••••"
            leftIcon={<Lock size={18} />}
            fullWidth
          />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem' }}>
            <Checkbox label="Keep me signed in" />
            <Button variant="duo" size="sm" style={{ padding: '0', background: 'transparent', border: 'none', textTransform: 'none', fontSize: '0.8rem', opacity: 0.7 }}>
              Forgot password?
            </Button>
          </div>

          <Button 
            type="submit" 
            fullWidth 
            loading={isLoading}
            style={{ marginTop: '1rem' }}
          >
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </Button>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            margin: '1.5rem 0' 
          }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-color)', opacity: 0.5 }}></div>
            <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Or continue with</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-color)', opacity: 0.5 }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Button variant="outlined" fullWidth icon={<Globe size={18} />}>
              Google
            </Button>
            <Button variant="outlined" fullWidth icon={<LayoutGrid size={18} />}>
              Organization
            </Button>
          </div>
        </form>

        <div style={{ textAlign: 'center', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
            <button 
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              style={{ 
                background: 'transparent', 
                border: 'none', 
                color: 'var(--accent-color)', 
                fontWeight: 600, 
                cursor: 'pointer',
                padding: '0 4px'
              }}
            >
              {mode === 'login' ? 'Sign up' : 'Log in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
