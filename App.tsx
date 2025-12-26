
import React, { useState } from 'react';
import { View } from './types';
import CustomerMenu from './customer/CustomerMenu';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('customer');

  const renderView = () => {
    switch (currentView) {
      case 'customer':
        return <CustomerMenu onAdminClick={() => setCurrentView('admin_login')} />;
      case 'admin_login':
        return (
          <AdminLogin 
            onLogin={() => setCurrentView('admin_dashboard')} 
            onBack={() => setCurrentView('customer')}
          />
        );
      case 'admin_dashboard':
        return <AdminDashboard onLogout={() => setCurrentView('customer')} />;
      default:
        return <CustomerMenu onAdminClick={() => setCurrentView('admin_login')} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderView()}
    </div>
  );
};

export default App;
