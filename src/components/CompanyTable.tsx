
import React from 'react';
import { Eye } from 'lucide-react';

export interface Company {
  id: string;
  abbreviation: string;
  name: string;
  website: string;
  industry: string;
  stage: string;
  funding: number;
  investors: number;
  introduced: number;
  accepted: number;
  requested: number;
  recommended: number;
  mentioned: number;
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
            <th className="table-header">Industry</th>
            <th className="table-header">Stage</th>
            <th className="table-header">Funding</th>
            <th className="table-header">Investors</th>
            <th className="table-header">Introduced</th>
            <th className="table-header">Accepted</th>
            <th className="table-header">Requested</th>
            <th className="table-header">Recommended</th>
            <th className="table-header">Mentioned</th>
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
                    <span className="font-medium">{company.name}</span>
                  </div>
                  <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 hover:text-white transition-colors ml-10">
                    {company.website}
                  </a>
                </div>
              </td>
              <td className="table-data">{company.industry || "—"}</td>
              <td className="table-data">{company.stage || "—"}</td>
              <td className={`table-data number-cell color-${company.funding}`}>{company.funding || "—"}</td>
              <td className={`table-data number-cell color-${company.investors}`}>{company.investors || "—"}</td>
              <td className={`table-data number-cell color-${company.introduced}`}>{company.introduced}</td>
              <td className={`table-data number-cell color-${company.accepted}`}>{company.accepted}</td>
              <td className={`table-data number-cell color-${company.requested}`}>{company.requested}</td>
              <td className={`table-data number-cell color-${company.recommended}`}>{company.recommended}</td>
              <td className={`table-data number-cell color-${company.mentioned}`}>{company.mentioned}</td>
              <td className="table-data text-right">
                <button className="inline-flex items-center justify-center h-8 px-4 rounded-md bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white text-sm">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
