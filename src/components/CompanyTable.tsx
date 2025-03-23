
import React from 'react';
import { Eye, Link, Users, Mail } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

export interface Company {
  id: string;
  abbreviation: string;
  name: string;
  website: string;
  industry?: string;
  stage?: string;
  funding?: number;
  investors?: number;
  introduced?: number;
  accepted?: number;
  requested?: number;
  recommended?: number;
  mentioned?: number;
  // New fields for the updated columns
  connect?: number;
  references?: number;
  followUp?: number;
}

interface CompanyTableProps {
  companies: Company[];
}

const CompanyTable = ({ companies }: CompanyTableProps) => {
  return (
    <div className="w-full overflow-x-auto animate-fade-up rounded-lg glass-effect">
      <table className="min-w-full divide-y divide-white/10">
        <thead>
          <tr>
            <th className="table-header">Company</th>
            <th className="table-header">Connect</th>
            <th className="table-header">References</th>
            <th className="table-header">Follow-up</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {companies.map((company, index) => (
            <tr 
              key={company.id}
              className="hover:bg-white/5 transition-colors duration-150 ease-in-out"
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: 'fade-up 0.5s ease-out forwards',
                opacity: 0
              }}
            >
              <td className="table-data">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-bold w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
                      {company.abbreviation}
                    </span>
                    <RouterLink 
                      to={`/company/${company.id}`}
                      className="font-medium text-white hover:text-white/80 transition-colors"
                    >
                      {company.name}
                    </RouterLink>
                  </div>
                  <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 hover:text-white transition-colors ml-10">
                    {company.website}
                  </a>
                </div>
              </td>
              <td className={`table-data number-cell ${company.connect ? `color-${company.connect}` : ''}`}>
                <div className="flex items-center justify-center">
                  <Link className="h-4 w-4 mr-1" />
                  {company.connect || "—"}
                </div>
              </td>
              <td className={`table-data number-cell ${company.references ? `color-${company.references}` : ''}`}>
                <div className="flex items-center justify-center">
                  <Users className="h-4 w-4 mr-1" />
                  {company.references || "—"}
                </div>
              </td>
              <td className={`table-data number-cell ${company.followUp ? `color-${company.followUp}` : ''}`}>
                <div className="flex items-center justify-center">
                  <Mail className="h-4 w-4 mr-1" />
                  {company.followUp || "—"}
                </div>
              </td>
              <td className="table-data text-right">
                <RouterLink 
                  to={`/company/${company.id}`}
                  className="inline-flex items-center justify-center h-8 px-4 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white text-sm"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </RouterLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
