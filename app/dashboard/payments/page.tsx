"use client";

import { CreditCard, Plus, Trash2, Download, FileText, CheckCircle, Clock } from "lucide-react";
import Image from "next/image";

export default function PaymentsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white font-[family-name:var(--font-epilogue)]">
          Payments & Billing
        </h1>
        <p className="text-[#9da6b9] mt-2 text-base">
          Manage your payment methods and view transaction history.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column - Payment Methods & History */}
        <div className="xl:col-span-8 flex flex-col gap-8">
          
          {/* Payment Methods */}
          <section className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#c9a37e]" />
                    Payment Methods
                </h2>
                <button className="flex items-center gap-2 text-sm font-medium text-[#c9a37e] hover:text-white transition-colors">
                    <Plus className="w-4 h-4" />
                    Add New Card
                </button>
            </div>
            
            <div className="grid gap-4">
                {/* Card 1 */}
                <div className="flex items-center justify-between p-4 bg-[#0c1315] border border-[#c9a37e] rounded-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-1.5 bg-[#c9a37e] rounded-bl-lg">
                        <CheckCircle className="w-3 h-3 text-[#0c1315]" />
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
                            {/* Visa Icon Placeholder */}
                             <span className="font-bold text-white text-xs italic">VISA</span>
                         </div>
                         <div>
                             <p className="text-white font-medium">•••• •••• •••• 4242</p>
                             <p className="text-xs text-[#9da6b9]">Expires 12/25</p>
                         </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-medium text-[#c9a37e] hidden sm:block">Default</span>
                        <button className="text-[#9da6b9] hover:text-red-500 transition-colors p-2 hover:bg-white/5 rounded-lg">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-center justify-between p-4 bg-[#0c1315] border border-white/5 rounded-xl relative overflow-hidden group">
                    <div className="flex items-center gap-4">
                         <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
                             {/* Mastercard Icon Placeholder */}
                             <span className="font-bold text-white text-xs italic">MC</span>
                         </div>
                         <div>
                             <p className="text-white font-medium">•••• •••• •••• 8899</p>
                             <p className="text-xs text-[#9da6b9]">Expires 09/26</p>
                         </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-xs font-medium text-[#9da6b9] hover:text-white hidden sm:block">Set as Default</button>
                        <button className="text-[#9da6b9] hover:text-red-500 transition-colors p-2 hover:bg-white/5 rounded-lg">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
          </section>

          {/* Transaction History */}
          <section className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-white/5">
                <h2 className="text-xl font-bold text-white">Transaction History</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-[#0c1315] text-[#9da6b9]">
                        <tr>
                            <th className="px-6 py-4 font-medium">Description</th>
                            <th className="px-6 py-4 font-medium">Date</th>
                            <th className="px-6 py-4 font-medium">Amount</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium text-right">Invoice</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 text-white font-medium">Rental - Tesla Model 3</td>
                            <td className="px-6 py-4 text-[#9da6b9]">Oct 20, 2024</td>
                            <td className="px-6 py-4 text-white">$450.00</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    Paid
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-[#c9a37e] hover:text-white transition-colors">
                                    <Download className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                         <tr className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 text-white font-medium">Rental - BMW X5</td>
                            <td className="px-6 py-4 text-[#9da6b9]">Sep 15, 2024</td>
                            <td className="px-6 py-4 text-white">$450.00</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    Paid
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-[#c9a37e] hover:text-white transition-colors">
                                    <Download className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                         <tr className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 text-white font-medium">Refund - Security Deposit</td>
                            <td className="px-6 py-4 text-[#9da6b9]">Sep 16, 2024</td>
                            <td className="px-6 py-4 text-emerald-400">+$200.00</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    Refunded
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-[#c9a37e] hover:text-white transition-colors">
                                    <Download className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="p-4 border-t border-white/5 text-center">
                 <button className="text-sm text-[#9da6b9] hover:text-[#c9a37e] transition-colors">Load More Transactions</button>
            </div>
          </section>
        </div>

        {/* Right Column - Billing Address & Summary */}
        <div className="xl:col-span-4 flex flex-col gap-8">
            {/* Billing Address */}
             <section className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-white">Billing Address</h3>
                    <button className="text-xs text-[#c9a37e] hover:underline">Edit</button>
                </div>
                <div className="text-sm text-[#9da6b9] space-y-1">
                    <p className="text-white font-medium">Alex Morgan</p>
                    <p>123 Luxury Lane, Apt 4B</p>
                    <p>Los Angeles, CA 90001</p>
                    <p>United States</p>
                </div>
             </section>

             {/* Credits & Balance */}
             <section className="bg-gradient-to-br from-[#c9a37e] to-[#b89574] rounded-xl shadow-lg p-6 text-[#0c1315]">
                <h3 className="text-lg font-bold mb-1">Account Balance</h3>
                <p className="text-sm opacity-80 mb-4">Available credits for future rentals</p>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-bold">$0.00</span>
                </div>
                <button className="w-full bg-[#0c1315] text-white py-2.5 rounded-lg font-bold text-sm hover:bg-black/80 transition-colors">
                    Add Funds
                </button>
             </section>

             {/* Quick Actions */}
             <section className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-6">
                <h3 className="text-lg font-bold text-white mb-4">Need Help?</h3>
                <div className="space-y-3">
                    <button className="w-full flex items-center justify-between p-3 bg-[#0c1315] rounded-lg border border-white/10 hover:border-[#c9a37e] group transition-colors">
                        <span className="text-sm text-[#9da6b9] group-hover:text-white transition-colors">Contact Billing Support</span>
                        <FileText className="w-4 h-4 text-[#9da6b9] group-hover:text-[#c9a37e]" />
                    </button>
                     <button className="w-full flex items-center justify-between p-3 bg-[#0c1315] rounded-lg border border-white/10 hover:border-[#c9a37e] group transition-colors">
                        <span className="text-sm text-[#9da6b9] group-hover:text-white transition-colors">Payment FAQs</span>
                        <FileText className="w-4 h-4 text-[#9da6b9] group-hover:text-[#c9a37e]" />
                    </button>
                </div>
             </section>
        </div>
      </div>
    </div>
  );
}
