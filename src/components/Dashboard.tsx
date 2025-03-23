
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import SearchBar from './SearchBar';
import CompanyTable, { Company } from './CompanyTable';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample company data with new fields
  const companies: Company[] = [
    {
      id: '1',
      abbreviation: 'DO',
      name: 'Docdraft',
      website: 'docdraft.ai',
      connect: 5,
      references: 8,
      followUp: 3
    },
    {
      id: '2',
      abbreviation: 'PA',
      name: 'Payman',
      website: 'paymanai.com',
      connect: 2,
      references: 4,
      followUp: 1
    },
    {
      id: '3',
      abbreviation: 'OL',
      name: 'Olive',
      website: 'oliveltd.com',
      connect: 7,
      references: 3,
      followUp: 5
    },
    {
      id: '4',
      abbreviation: 'BA',
      name: 'Basil Systems',
      website: 'basilsys.com',
      connect: 1,
      references: 9,
      followUp: 4
    }
  ];

  // Filter companies based on search query
  const filteredCompanies = companies.filter(company => 
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.website.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddCompany = () => {
    console.log('Add company clicked');
    // This would typically open a modal or navigate to an "add company" page
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 md:px-6 lg:px-8">
      <div className="flex flex-col space-y-6">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in">
          <h1 className="text-3xl font-bold text-white">Portfolio Companies</h1>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <SearchBar 
              placeholder="Search..." 
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
            <button 
              onClick={handleAddCompany}
              className="inline-flex items-center justify-center h-10 px-4 py-2 bg-white text-maroon font-medium rounded-md hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Company
            </button>
          </div>
        </header>

        <CompanyTable companies={filteredCompanies} />
      </div>
    </div>
  );
};

export default Dashboard;
