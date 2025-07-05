import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  Building, 
  User, 
  Calendar, 
  Trash2, 
  Eye, 
  BarChart3,
  RefreshCw,
  Download
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactSubmission {
  id: number;
  fullName: string;
  company: string | null;
  email: string;
  phone: string | null;
  message: string | null;
  modelType: string | null;
  industry: string | null;
  revenueModel: string | null;
  businessStage: string | null;
  purpose: string | null;
  createdAt: string;
}

interface SubmissionStats {
  total: number;
  today: number;
  thisWeek: number;
  thisMonth: number;
  recent: ContactSubmission[];
}

export default function AdminPage() {
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch all submissions
  const { data: submissionsData, isLoading: submissionsLoading, refetch: refetchSubmissions } = useQuery({
    queryKey: ['contact-submissions'],
    queryFn: async () => {
      const response = await apiRequest('GET', '/api/contact/submissions');
      return response.json();
    },
  });

  // Fetch statistics
  const { data: statsData, isLoading: statsLoading, refetch: refetchStats } = useQuery({
    queryKey: ['contact-stats'],
    queryFn: async () => {
      const response = await apiRequest('GET', '/api/contact/stats');
      return response.json();
    },
  });

  // Delete submission mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await apiRequest('DELETE', `/api/contact/submissions/${id}`);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Submission Deleted",
        description: "The contact submission has been deleted successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ['contact-submissions'] });
      queryClient.invalidateQueries({ queryKey: ['contact-stats'] });
      setSelectedSubmission(null);
    },
    onError: (error: any) => {
      toast({
        title: "Delete Failed",
        description: error.message || "Failed to delete submission",
        variant: "destructive",
      });
    },
  });

  const submissions: ContactSubmission[] = submissionsData?.data || [];
  const stats: SubmissionStats = statsData?.data || { total: 0, today: 0, thisWeek: 0, thisMonth: 0, recent: [] };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const exportToCSV = () => {
    if (submissions.length === 0) {
      toast({
        title: "No Data",
        description: "No submissions to export",
        variant: "destructive",
      });
      return;
    }

    const headers = ['ID', 'Full Name', 'Company', 'Email', 'Phone', 'Model Type', 'Industry', 'Revenue Model', 'Business Stage', 'Purpose', 'Additional Details', 'Created At'];
    const csvContent = [
      headers.join(','),
      ...submissions.map(sub => [
        sub.id,
        `"${sub.fullName}"`,
        `"${sub.company || ''}"`,
        sub.email,
        sub.phone || '',
        `"${sub.modelType || ''}"`,
        `"${sub.industry || ''}"`,
        `"${(sub.revenueModel || '').replace(/"/g, '""')}"`,
        `"${sub.businessStage || ''}"`,
        `"${sub.purpose || ''}"`,
        `"${(sub.message || '').replace(/"/g, '""')}"`,
        sub.createdAt
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Contact Submissions Dashboard</h1>
              <p className="text-slate-400 mt-1">Manage and view contact form submissions</p>
            </div>
            <div className="flex gap-3">
              <Button 
                onClick={() => {
                  refetchSubmissions();
                  refetchStats();
                }}
                variant="outline" 
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button 
                onClick={exportToCSV}
                variant="outline" 
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
              <a 
                href="/"
                className="inline-flex items-center px-4 py-2 bg-[#a3865a] hover:bg-[#8f7249] text-slate-900 font-medium rounded-lg transition-colors"
              >
                Back to Site
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Total Submissions</p>
                <p className="text-2xl font-bold text-white">{stats.total}</p>
              </div>
              <BarChart3 className="w-8 h-8 text-[#a3865a]" />
            </div>
          </Card>

          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Today</p>
                <p className="text-2xl font-bold text-white">{stats.today}</p>
              </div>
              <Calendar className="w-8 h-8 text-blue-400" />
            </div>
          </Card>

          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">This Week</p>
                <p className="text-2xl font-bold text-white">{stats.thisWeek}</p>
              </div>
              <Calendar className="w-8 h-8 text-green-400" />
            </div>
          </Card>

          <Card className="bg-slate-800 border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">This Month</p>
                <p className="text-2xl font-bold text-white">{stats.thisMonth}</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-400" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Submissions List */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800 border-slate-700">
              <div className="p-6 border-b border-slate-700">
                <h2 className="text-xl font-semibold text-white">All Submissions</h2>
                <p className="text-slate-400 text-sm mt-1">Click on a submission to view details</p>
              </div>
              
              <div className="max-h-96 overflow-y-auto">
                {submissionsLoading ? (
                  <div className="p-6 text-center text-slate-400">Loading submissions...</div>
                ) : submissions.length === 0 ? (
                  <div className="p-6 text-center text-slate-400">No submissions yet</div>
                ) : (
                  <div className="divide-y divide-slate-700">
                    {submissions.map((submission) => (
                      <div
                        key={submission.id}
                        onClick={() => setSelectedSubmission(submission)}
                        className={`p-4 cursor-pointer hover:bg-slate-700/50 transition-colors ${
                          selectedSubmission?.id === submission.id ? 'bg-slate-700/50' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium text-white">{submission.fullName}</h3>
                              {submission.company && (
                                <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                                  {submission.company}
                                </Badge>
                              )}
                            </div>
                            <p className="text-slate-400 text-sm">{submission.email}</p>
                            <p className="text-slate-500 text-xs mt-1">{formatDate(submission.createdAt)}</p>
                          </div>
                          <Eye className="w-4 h-4 text-slate-500" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Submission Details */}
          <div>
            <Card className="bg-slate-800 border-slate-700">
              <div className="p-6 border-b border-slate-700">
                <h2 className="text-xl font-semibold text-white">Submission Details</h2>
              </div>
              
              {selectedSubmission ? (
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <span className="text-white font-medium">{selectedSubmission.fullName}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <a 
                      href={`mailto:${selectedSubmission.email}`}
                      className="text-[#a3865a] hover:underline"
                    >
                      {selectedSubmission.email}
                    </a>
                  </div>

                  {selectedSubmission.company && (
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-slate-400" />
                      <span className="text-white">{selectedSubmission.company}</span>
                    </div>
                  )}

                  {selectedSubmission.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-slate-400" />
                      <a 
                        href={`tel:${selectedSubmission.phone}`}
                        className="text-[#a3865a] hover:underline"
                      >
                        {selectedSubmission.phone}
                      </a>
                    </div>
                  )}

                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300 text-sm">{formatDate(selectedSubmission.createdAt)}</span>
                  </div>

                  {selectedSubmission.modelType && (
                    <div className="mt-4">
                      <h4 className="text-white font-medium mb-2">Model Type:</h4>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <p className="text-slate-300 text-sm">{selectedSubmission.modelType}</p>
                      </div>
                    </div>
                  )}

                  {selectedSubmission.industry && (
                    <div className="mt-4">
                      <h4 className="text-white font-medium mb-2">Industry:</h4>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <p className="text-slate-300 text-sm">{selectedSubmission.industry}</p>
                      </div>
                    </div>
                  )}

                  {selectedSubmission.revenueModel && (
                    <div className="mt-4">
                      <h4 className="text-white font-medium mb-2">Revenue Model:</h4>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <p className="text-slate-300 text-sm whitespace-pre-wrap">{selectedSubmission.revenueModel}</p>
                      </div>
                    </div>
                  )}

                  {selectedSubmission.businessStage && (
                    <div className="mt-4">
                      <h4 className="text-white font-medium mb-2">Business Stage:</h4>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <p className="text-slate-300 text-sm">{selectedSubmission.businessStage}</p>
                      </div>
                    </div>
                  )}

                  {selectedSubmission.purpose && (
                    <div className="mt-4">
                      <h4 className="text-white font-medium mb-2">Purpose:</h4>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <p className="text-slate-300 text-sm">{selectedSubmission.purpose}</p>
                      </div>
                    </div>
                  )}

                  {selectedSubmission.message && (
                    <div className="mt-4">
                      <h4 className="text-white font-medium mb-2">Additional Details:</h4>
                      <div className="bg-slate-700/50 rounded-lg p-3">
                        <p className="text-slate-300 text-sm whitespace-pre-wrap">
                          {selectedSubmission.message}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 pt-4">
                    <Button
                      onClick={() => deleteMutation.mutate(selectedSubmission.id)}
                      disabled={deleteMutation.isPending}
                      variant="destructive"
                      size="sm"
                      className="flex-1"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center text-slate-400">
                  Select a submission to view details
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 