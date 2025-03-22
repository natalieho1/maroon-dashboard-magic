
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Search, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SearchBar from '@/components/SearchBar';

interface Email {
  id: string;
  subject: string;
  from: string;
  to: string;
  date: string;
  content: string;
  mentioned: number;
}

const CompanyDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchEmailsQuery, setSearchEmailsQuery] = useState('');

  // Mock company data - in a real app, you'd fetch this based on the ID
  const company = {
    id: '1',
    abbreviation: 'DO',
    name: 'Docdraft',
    website: 'docdraft.ai',
    industry: 'AI',
    stage: 'Seed',
    funding: 65,
    investors: 0,
    introduced: 32,
    accepted: 0,
    requested: 3,
    recommended: 30,
    mentioned: 0
  };

  // Mock emails data
  const emails: Email[] = [
    {
      id: '1',
      subject: 'Re: Follow-ups',
      from: 'Yohei Nakajima',
      to: 'team@docdraft.ai',
      date: 'March 14, 2023',
      content: 'Hey team, I wanted to follow up on our discussion from last week. Let me know if you have any questions.',
      mentioned: 90
    },
    {
      id: '2',
      subject: 'Follow-ups',
      from: 'john@startupvc.vc',
      to: 'yohei@docdraft.ai',
      date: 'March 14, 2023',
      content: 'Hey Yohei, Great catchup yesterday. Here\'s our updated deck <https://docsend.com/view/abc123>, memo <https://docsend.com/view/def456>, and investor list <https://docs.google.com/spreadsheets/d/1_fUX>. Please find our blurb below.',
      mentioned: 95
    },
    {
      id: '3',
      subject: 'Re: Portfolio co fundraises, Agent Fund is live, Pippin update',
      from: 'Yohei Nakajima',
      to: 'investors@venturefund.com',
      date: 'March 13, 2023',
      content: 'Thanks for the update. Looking forward to connecting next week to discuss further.',
      mentioned: 80
    }
  ];

  // Filter emails based on search query
  const filteredEmails = emails.filter(email =>
    email.subject.toLowerCase().includes(searchEmailsQuery.toLowerCase()) ||
    email.from.toLowerCase().includes(searchEmailsQuery.toLowerCase()) ||
    email.to.toLowerCase().includes(searchEmailsQuery.toLowerCase()) ||
    email.content.toLowerCase().includes(searchEmailsQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-maroon">
      <div className="w-full max-w-7xl mx-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          {/* Header with back button and company name */}
          <header className="flex items-center justify-between gap-4 animate-fade-in">
            <div className="flex items-center gap-3">
              <Link to="/" className="text-white hover:text-white/80 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex items-center gap-3">
                <span className="font-bold w-10 h-10 rounded-md bg-white/10 flex items-center justify-center text-white text-lg">
                  {company.abbreviation}
                </span>
                <h1 className="text-3xl font-bold text-white">{company.name}</h1>
                <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                  {company.website}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-white border-white/20 bg-white/5 hover:bg-white/10 hover:text-white">
                <Search className="h-4 w-4 mr-1" /> Search Emails
              </Button>
              <Button variant="outline" size="sm" className="text-white border-white/20 bg-white/5 hover:bg-white/10 hover:text-white">
                <Edit className="h-4 w-4 mr-1" /> Edit
              </Button>
              <Button variant="destructive" size="sm">
                <Trash2 className="h-4 w-4 mr-1" /> Delete
              </Button>
            </div>
          </header>

          {/* Tabs Navigation */}
          <div className="border-b border-white/10 animate-fade-in">
            <Tabs defaultValue="emails" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="bg-transparent border-b border-white/10">
                <TabsTrigger 
                  value="overview" 
                  className="text-white/70 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none bg-transparent hover:bg-transparent data-[state=active]:bg-transparent"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="emails" 
                  className="text-white/70 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none bg-transparent hover:bg-transparent data-[state=active]:bg-transparent"
                >
                  Emails
                </TabsTrigger>
                <TabsTrigger 
                  value="connections" 
                  className="text-white/70 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none bg-transparent hover:bg-transparent data-[state=active]:bg-transparent"
                >
                  Connections
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="p-0 mt-6">
                <div className="glass-effect p-6 rounded-lg animate-fade-up">
                  <h2 className="text-xl font-semibold text-white mb-4">Company Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-white/70 mb-1">Industry</p>
                      <p className="text-white font-medium">{company.industry || "—"}</p>
                    </div>
                    <div>
                      <p className="text-white/70 mb-1">Stage</p>
                      <p className="text-white font-medium">{company.stage || "—"}</p>
                    </div>
                    <div>
                      <p className="text-white/70 mb-1">Funding</p>
                      <p className={`text-white font-medium color-${company.funding}`}>{company.funding || "—"}</p>
                    </div>
                    <div>
                      <p className="text-white/70 mb-1">Investors</p>
                      <p className={`text-white font-medium color-${company.investors}`}>{company.investors || "—"}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="emails" className="p-0 mt-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-4">
                    <button className="px-4 py-2 text-white border-b-2 border-white text-sm font-medium">
                      External Communications
                    </button>
                    <button className="px-4 py-2 text-white/60 hover:text-white border-b-2 border-transparent hover:border-white/30 text-sm font-medium transition-colors">
                      Internal Discussions
                    </button>
                    <button className="px-4 py-2 text-white/60 hover:text-white border-b-2 border-transparent hover:border-white/30 text-sm font-medium transition-colors">
                      All Emails
                    </button>
                  </div>
                  <SearchBar 
                    placeholder="Search emails..." 
                    onChange={(e) => setSearchEmailsQuery(e.target.value)} 
                  />
                </div>

                <div className="space-y-4 animate-fade-up">
                  {filteredEmails.map((email) => (
                    <div key={email.id} className="glass-effect rounded-lg p-4 hover:bg-white/15 transition-colors cursor-pointer">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-white">{email.subject}</h3>
                        <div className="flex items-center bg-blue-500/10 px-2 py-1 rounded text-xs">
                          <span className="text-blue-400 mr-1">Mentioned</span>
                          <span className="text-blue-300 font-medium">{email.mentioned}%</span>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-white/70">
                        <span className="mr-1">From:</span>
                        <span className="bg-purple-400/20 text-purple-300 px-2 py-0.5 rounded mr-2">{email.from}</span>
                      </div>
                      {email.to && (
                        <div className="mt-1 flex items-center text-sm text-white/70">
                          <span className="mr-1">To:</span>
                          <span className="bg-purple-400/20 text-purple-300 px-2 py-0.5 rounded">{email.to}</span>
                        </div>
                      )}
                      <div className="mt-1 text-sm text-white/70">
                        <span className="mr-2">{email.date}</span>
                      </div>
                      <p className="mt-3 text-white/90">{email.content}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="connections" className="p-0 mt-6">
                <div className="glass-effect p-6 rounded-lg animate-fade-up">
                  <h2 className="text-xl font-semibold text-white mb-4">Connections</h2>
                  <p className="text-white/70">No connections available.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
