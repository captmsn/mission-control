import React, { useState } from 'react';
import { Shield, Users, MessageSquare, Ban, AlertTriangle, CheckCircle, XCircle, User } from 'lucide-react';

interface Report {
  id: string;
  user: string;
  reason: string;
  status: 'pending' | 'resolved';
  timestamp: string;
}

interface BannedUser {
  id: string;
  username: string;
  reason: string;
  bannedAt: string;
  bannedUntil: string;
}

export const ModDashboard = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'reports' | 'bans'>('overview');
  const [reports] = useState<Report[]>([
    {
      id: '1',
      user: 'User123',
      reason: 'Inappropriate language',
      status: 'pending',
      timestamp: '2024-03-15T10:30:00Z'
    },
    {
      id: '2',
      user: 'Spammer456',
      reason: 'Spam in music channel',
      status: 'resolved',
      timestamp: '2024-03-14T15:45:00Z'
    }
  ]);

  const [bannedUsers] = useState<BannedUser[]>([
    {
      id: '1',
      username: 'ToxicUser123',
      reason: 'Multiple violations',
      bannedAt: '2024-03-10T08:00:00Z',
      bannedUntil: '2024-04-10T08:00:00Z'
    }
  ]);

  const stats = {
    activeUsers: 156,
    pendingReports: reports.filter(r => r.status === 'pending').length,
    activeBans: bannedUsers.length,
    totalMessages: 15789
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Moderation Dashboard</h1>
          <p className="text-gray-400">Manage your Discord server's moderation tasks</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Active Users</p>
                <p className="text-2xl font-bold text-white">{stats.activeUsers}</p>
              </div>
              <Users className="h-8 w-8 text-pink-500" />
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Pending Reports</p>
                <p className="text-2xl font-bold text-white">{stats.pendingReports}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Active Bans</p>
                <p className="text-2xl font-bold text-white">{stats.activeBans}</p>
              </div>
              <Ban className="h-8 w-8 text-red-500" />
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">Total Messages</p>
                <p className="text-2xl font-bold text-white">{stats.totalMessages}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'overview'
                ? 'bg-pink-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Shield className="h-4 w-4" />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActiveTab('reports')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'reports'
                ? 'bg-pink-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <AlertTriangle className="h-4 w-4" />
            <span>Reports</span>
          </button>
          <button
            onClick={() => setActiveTab('bans')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'bans'
                ? 'bg-pink-500 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Ban className="h-4 w-4" />
            <span>Bans</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                      <User className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white">User action performed</p>
                      <p className="text-sm text-gray-400">2 minutes ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">User Reports</h2>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                        <User className="h-6 w-6 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-white">{report.user}</p>
                        <p className="text-sm text-gray-400">{report.reason}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {report.status === 'pending' ? (
                        <>
                          <button className="p-2 text-green-500 hover:bg-gray-700 rounded-lg">
                            <CheckCircle className="h-5 w-5" />
                          </button>
                          <button className="p-2 text-red-500 hover:bg-gray-700 rounded-lg">
                            <XCircle className="h-5 w-5" />
                          </button>
                        </>
                      ) : (
                        <span className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-sm">
                          Resolved
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'bans' && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">Banned Users</h2>
              <div className="space-y-4">
                {bannedUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                        <User className="h-6 w-6 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-white">{user.username}</p>
                        <p className="text-sm text-gray-400">{user.reason}</p>
                      </div>
                    </div>
                    <div>
                      <button className="px-3 py-1 bg-red-500/20 text-red-500 rounded-full text-sm hover:bg-red-500/30">
                        Unban
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};