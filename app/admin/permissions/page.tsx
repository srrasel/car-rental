"use client";

import {
  Users,
  Search,
  Filter,
  Plus,
  MoreVertical,
  CheckCircle,
  AlertCircle,
  Edit,
  Lock,
  UserPlus,
  Activity,
  Mail
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PermissionsPage() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0c1315] relative">
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between items-end gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight font-[family-name:var(--font-epilogue)]">User Management & Access Control</h2>
                <p className="text-[#9da6b9] text-base font-normal leading-normal">Manage administrative access, roles, and security permissions.</p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> System Operational
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1 rounded-xl p-6 border border-white/10 bg-[#1a1f21]">
                <div className="flex justify-between items-start">
                  <p className="text-[#9da6b9] text-sm font-medium leading-normal">Total Admins</p>
                  <Users className="w-5 h-5 text-[#9da6b9]" />
                </div>
                <p className="text-white tracking-tight text-3xl font-bold leading-tight mt-2">12</p>
              </div>
              <div className="flex flex-col gap-1 rounded-xl p-6 border border-white/10 bg-[#1a1f21]">
                <div className="flex justify-between items-start">
                  <p className="text-[#9da6b9] text-sm font-medium leading-normal">Active Sessions</p>
                  <Activity className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-white tracking-tight text-3xl font-bold leading-tight mt-2">3</p>
              </div>
              <div className="flex flex-col gap-1 rounded-xl p-6 border border-white/10 bg-[#1a1f21]">
                <div className="flex justify-between items-start">
                  <p className="text-[#9da6b9] text-sm font-medium leading-normal">Pending Invites</p>
                  <Mail className="w-5 h-5 text-[#9da6b9]" />
                </div>
                <p className="text-white tracking-tight text-3xl font-bold leading-tight mt-2">1</p>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#1a1f21]/50 p-2 rounded-xl border border-white/10">
              <div className="flex w-full sm:w-auto gap-2 items-center flex-1">
                <div className="relative flex items-center flex-1 max-w-md">
                  <Search className="absolute left-3 text-[#9da6b9] w-5 h-5" />
                  <input 
                    className="w-full h-10 pl-10 pr-4 bg-[#0c1315] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-[#64748b] transition-all" 
                    placeholder="Search by name or email..." 
                    type="text"
                  />
                </div>
                <button className="p-2 text-[#9da6b9] hover:text-white hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/10">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
              <button className="flex items-center justify-center gap-2 h-10 px-6 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] text-sm font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(201,163,126,0.3)] whitespace-nowrap w-full sm:w-auto">
                <Plus className="w-5 h-5" />
                <span>Add New Admin</span>
              </button>
            </div>

            {/* Table */}
            <div className="rounded-xl border border-white/10 bg-[#0c1315] overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#1a1f21] border-b border-white/10">
                      <th className="px-6 py-4 text-[#9da6b9] text-xs font-semibold uppercase tracking-wider">User</th>
                      <th className="px-6 py-4 text-[#9da6b9] text-xs font-semibold uppercase tracking-wider">Role</th>
                      <th className="px-6 py-4 text-[#9da6b9] text-xs font-semibold uppercase tracking-wider">Last Active</th>
                      <th className="px-6 py-4 text-[#9da6b9] text-xs font-semibold uppercase tracking-wider">2FA Status</th>
                      <th className="px-6 py-4 text-[#9da6b9] text-xs font-semibold uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {/* Row 1 */}
                    <tr className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-white/10">
                            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDnarMj2gI8T57N6XoO4Nbi456UePeqIdot0RRkQkUXDvPArCnI2atktcN9kBym_elXyVqTuePRa1KheeccOj_iuCwRwKAnzH0XOr-ETLmsczVuXBd0yB8l4rw0meg-7GhwdIRN4P6uPHGVaidY59v-0tvYVQ97040nElFCHI2LrbvNuNbE-oeZSuipgjzVoGpng5sDKmHZVqRfcRhE9gPFgvP49RmiuO7nMrq8gms6n030zOl8ygYY2hT9fRcMgg0XZNifub-0fKH" alt="Sarah" fill className="object-cover" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Sarah Jenkins</p>
                            <p className="text-[#64748b] text-xs">sarah@rental.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          Super Administrator
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                          <span className="text-[#9da6b9] text-sm">Now</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400">
                          <CheckCircle className="w-3.5 h-3.5" /> Enabled
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[#9da6b9] hover:text-white transition-colors p-1 rounded hover:bg-white/10">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-white/10">
                            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCObJ_wEzcIfVXINiiHAT6OA37Tf7ruEezdJ6IlN4Cxad-Ers8ep2vujUBmK1QEnAjrFdmOlnUbPaJ7BPUzCY4jLNWW4SnUNKXerY54PKS47CkF2TFvdypiEee-IFKeUs08suBFLdiqn6NmHF3w1vPF0314jWI9erfChgW3PEEHx_-9P-ZZMB9eXrPd5-RW57KBmYO-R5CuUNTIM4SHXjtnDGmDdyp53Jgv61sddju0dCv6w-lWLlJjRy798xSoAYTTSoIzBFrNo2Pl" alt="Mike" fill className="object-cover" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Mike Ross</p>
                            <p className="text-[#64748b] text-xs">mike.r@rental.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          Fleet Manager
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[#9da6b9] text-sm">1 hour ago</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400">
                          <CheckCircle className="w-3.5 h-3.5" /> Enabled
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[#9da6b9] hover:text-white transition-colors p-1 rounded hover:bg-white/10">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-white/10">
                             <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB_I7rJYI2wSOAN1xsRwxIHa1WNA9WFFTncSDcWjEsjIlFS0olwtzK6CyGBZM7CUWsOgcQBKtKASOjTYHNsePL5tvTcxpazDV60vl6HaHFtQtgqDAZhSWZzD8upwwLOcYRokfNDw2OOpO_X_jo4alXeGwdsZLYsCLH7KPB099L4awIQL0goeX49NkXKmfRc-mRIgaungT-EnhnaJGCRPw-effsrJRawjhZdQFlcH8JxFV7YGMQif-RT3Ee15jh_kTgZr_meRRHJGI4" alt="Jessica" fill className="object-cover" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Jessica Pearson</p>
                            <p className="text-[#64748b] text-xs">jessica@rental.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          Booking Agent
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[#9da6b9] text-sm">4 hours ago</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400">
                          <AlertCircle className="w-3.5 h-3.5" /> Disabled
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[#9da6b9] hover:text-white transition-colors p-1 rounded hover:bg-white/10">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-white/10">
                             <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH43Bd2CkMJcs53qq3ZuwJ4E1YHlyq9Q4UrmoRDVrj8OTfhwpzhtiU7FcbTcR3-7Ao6vwydPxqISP_jnIFll9zWVwNqQXgmg1thZiH2TiyltPAF_ufzUrvPOttsRcCd4MZEvT8vlIp6mbrW6qcfPAxUFWrEHNzYwEv1zMSZzgCr7h2X4hkd_ulk7HqyolWJegZ8znwKgDCzMo8_bApZ479uArAx2uh0ofdrHHAfwZw7zqh_OnRijuUeaKsIN9xHUtiLw9InjUAZmXj" alt="Louis" fill className="object-cover" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">Louis Litt</p>
                            <p className="text-[#64748b] text-xs">louis@rental.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          Financial Officer
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-[#9da6b9] text-sm">1 day ago</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400">
                          <CheckCircle className="w-3.5 h-3.5" /> Enabled
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[#9da6b9] hover:text-white transition-colors p-1 rounded hover:bg-white/10">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="bg-[#1a1f21] px-4 py-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm text-[#9da6b9]">Showing 1-4 of 12 admins</span>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm text-[#9da6b9] hover:text-white hover:bg-white/10 rounded transition-colors disabled:opacity-50">Previous</button>
                  <button className="px-3 py-1 text-sm text-[#0c1315] bg-[#c9a37e] rounded transition-colors font-medium">1</button>
                  <button className="px-3 py-1 text-sm text-[#9da6b9] hover:text-white hover:bg-white/10 rounded transition-colors">2</button>
                  <button className="px-3 py-1 text-sm text-[#9da6b9] hover:text-white hover:bg-white/10 rounded transition-colors">3</button>
                  <button className="px-3 py-1 text-sm text-[#9da6b9] hover:text-white hover:bg-white/10 rounded transition-colors">Next</button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Audit Log Widget */}
              <div className="rounded-xl border border-white/10 bg-[#0c1315] p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-lg font-bold">Audit Log</h3>
                  <button className="text-xs text-[#c9a37e] hover:text-[#b89574] font-medium">View All</button>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#1a1f21] flex items-center justify-center shrink-0 border border-white/10 text-[#9da6b9]">
                      <Edit className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm text-white">Sarah updated <span className="text-[#9da6b9]">Mike Ross</span></p>
                      <p className="text-xs text-[#64748b]">Changed role to Fleet Manager • 10m ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-rose-900/20 flex items-center justify-center shrink-0 border border-rose-500/20 text-rose-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm text-white">System blocked <span className="text-[#9da6b9]">IP 192.168.x.x</span></p>
                      <p className="text-xs text-[#64748b]">Too many failed login attempts • 1h ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-full bg-emerald-900/20 flex items-center justify-center shrink-0 border border-emerald-500/20 text-emerald-400">
                      <UserPlus className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm text-white">New admin invite sent</p>
                      <p className="text-xs text-[#64748b]">To harvey.s@rental.com • 2h ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Role Configuration Preview */}
              <div className="lg:col-span-2 rounded-xl border border-white/10 bg-[#0c1315] overflow-hidden flex flex-col">
                <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#1a1f21]/50">
                  <div>
                    <h3 className="text-white text-lg font-bold">Quick Permission Configuration</h3>
                    <p className="text-[#9da6b9] text-sm">Editing Role: <span className="text-white font-medium">Fleet Manager</span></p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-xs font-medium text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors">Reset Defaults</button>
                    <button className="px-3 py-1.5 text-xs font-medium text-[#0c1315] bg-[#c9a37e] hover:bg-[#b89574] rounded-md transition-colors">Save Changes</button>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {/* Fleet Permissions */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xs uppercase tracking-wider text-[#9da6b9] font-semibold mb-1">Fleet Management</h4>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm text-white group-hover:text-[#c9a37e] transition-colors">Add New Vehicles</span>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#c9a37e] right-0" name="toggle" type="checkbox"/>
                        <div className="toggle-label block overflow-hidden h-5 rounded-full bg-[#c9a37e] cursor-pointer"></div>
                      </div>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm text-white group-hover:text-[#c9a37e] transition-colors">Delete Vehicles</span>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#c9a37e] right-0" name="toggle" type="checkbox"/>
                        <div className="toggle-label block overflow-hidden h-5 rounded-full bg-[#c9a37e] cursor-pointer"></div>
                      </div>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm text-white group-hover:text-[#c9a37e] transition-colors">Edit Maintenance Logs</span>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#c9a37e] right-0" name="toggle" type="checkbox"/>
                        <div className="toggle-label block overflow-hidden h-5 rounded-full bg-[#c9a37e] cursor-pointer"></div>
                      </div>
                    </label>
                  </div>
                  {/* Financial Permissions */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xs uppercase tracking-wider text-[#9da6b9] font-semibold mb-1">Financials</h4>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm text-white group-hover:text-[#c9a37e] transition-colors">View Transactions</span>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#c9a37e] right-0" name="toggle" type="checkbox"/>
                        <div className="toggle-label block overflow-hidden h-5 rounded-full bg-[#c9a37e] cursor-pointer"></div>
                      </div>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm text-[#64748b] group-hover:text-[#9da6b9] transition-colors">Process Refunds</span>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-[#64748b] border-4 appearance-none cursor-pointer border-white/10" name="toggle" type="checkbox"/>
                        <div className="toggle-label block overflow-hidden h-5 rounded-full bg-white/10 cursor-pointer"></div>
                      </div>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-sm text-[#64748b] group-hover:text-[#9da6b9] transition-colors">Export Financial Reports</span>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-[#64748b] border-4 appearance-none cursor-pointer border-white/10" name="toggle" type="checkbox"/>
                        <div className="toggle-label block overflow-hidden h-5 rounded-full bg-white/10 cursor-pointer"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

          </div>
      </div>
    </div>
  );
}
