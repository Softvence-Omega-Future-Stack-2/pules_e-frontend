import React from 'react';
import { Eye, Ban, Filter, Download } from 'lucide-react';
import Link from 'next/link';

interface UserData {
    id:number
  name: string;
  email: string;
  lifeStage: 'PCOS' | 'Pregnancy' | 'Postpartum' | 'TTC' | 'Menopause';
  status: 'Active' | 'Pending' | 'Suspended';
  joined: string;
  avatar: string;
}

const users: UserData[] = [
  { id:1, name: 'Sarah Martinez', email: 'sarah.m@email.com', lifeStage: 'PCOS', status: 'Active', joined: '2 hours ago', avatar: '/img/user1.png' },
  { id:2, name: 'Jessica Chen', email: 'jchen@email.com', lifeStage: 'Pregnancy', status: 'Active', joined: '5 hours ago', avatar: '/img/user2.png' },
  { id:3, name: 'Maria Rodriguez', email: 'maria.r@email.com', lifeStage: 'Postpartum', status: 'Pending', joined: '1 day ago', avatar: '/img/user3.png' },
  { id:4, name: 'Emily Johnson', email: 'emily.j@email.com', lifeStage: 'TTC', status: 'Active', joined: '1 day ago', avatar: '/img/user4.png' },
  { id:5, name: 'Lisa Thompson', email: 'lisa.t@email.com', lifeStage: 'Menopause', status: 'Suspended', joined: '2 days ago', avatar: '/img/user5.png' },
  { id:6, name: 'Amanda White', email: 'amanda.w@email.com', lifeStage: 'PCOS', status: 'Active', joined: '3 day ago', avatar: '/img/user3.png' },
  { id:7, name: 'Rachel Green', email: 'rachel.g@email.com', lifeStage: 'TTC', status: 'Active', joined: '4 day ago', avatar: '/img/user4.png' },
  { id:8, name: 'Monica Davis', email: 'lmonica.d@email.com', lifeStage: 'Menopause', status: 'Suspended', joined: '5 days ago', avatar: '/img/user5.png' },
];

const UsersTable: React.FC = () => {
  return (
    <div>
            {/* Table Header/Toolbar */}
  
<div className="p-6 flex flex-col sm:flex-row justify-end items-center gap-4">

  <div className="flex items-center gap-2">
    <button className="flex items-center gap-2 px-4 py-2 border-1 border-[#001F3F1A] text-[#001F3F] rounded-lg text-sm font-medium hover:bg-amber-50 cursor-pointer transition-colors">
      <Filter size={16} /> Filter
    </button>

     <button className="flex items-center gap-2 px-4 py-2 border-1 border-[#001F3F1A] text-[#001F3F] rounded-lg text-sm font-medium hover:bg-amber-50 cursor-pointer transition-colors">
      <Download size={16} /> Export
    </button>
  </div>

</div>
    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-50 overflow-hidden">
  

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8F1E9] border-y border-gray-50">
              {['User', 'Email', 'Life Stage', 'Status', 'Joined', 'Actions'].map((header) => (
                <th key={header} className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-[#001F3F] leading-4 tracking-[0.5px]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {users.map((user, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                      <img src={user.avatar} alt="" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-sm font-semibold leading-5 text-[#001F3F]">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-normal text-[#6B7280] leading-5">{user.email}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-[#FFF9F0] border border-[#C9A96E4D] text-[#C9A96E] text-xs font-semibold uppercase  leading-5 ">
                    {user.lifeStage}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm leading-5 font-semibold">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      user.status === 'Active' ? 'bg-[#00C950]' : 
                      user.status === 'Pending' ? 'bg-[#F0B100]' : 'bg-red-500'
                    }`} />
                    <span className={
                      user.status === 'Active' ? 'text-[#00A63E]' : 
                      user.status === 'Pending' ? 'text-amber-600' : 'text-red-600'
                    }>{user.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm font-normal leading-5 text-[#6B7280]">{user.joined}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-3 text-gray-400">
                   <Link href={`/dashboard/users/${user.id}`}>
  <button className="hover:text-[#c5a059] text-[#6B7280] transition-colors cursor-pointer">
    <Eye size={18} />
  </button>
</Link>
                    <button className="text-[#FB2C36] hover:text-red-600 transition-colors cursor-pointer"><Ban size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-6 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm font-semibold leading-5 text-[#6B7280]">Showing 1-8 of 2,847 users</p>
        <div className="flex items-center gap-1">
          {['Previous', '1', '2', '3', '...', 'Next'].map((page, i) => (
            <button key={i} className={`px-3 py-1 text-sm bg-[#F8F1E9] border border-[#001F3F1A] font-semibold leading-5 rounded-md cursor-pointer ${
              page === '1' ? 'bg-[#c5a059] text-white' : 'text-gray-500 hover:bg-amber-50'
            }`}>
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default UsersTable;