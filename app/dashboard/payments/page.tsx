"use client";

import { CreditCard, Plus, Trash2, Download, FileText, CheckCircle, Loader2, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { format } from "date-fns";

interface PaymentMethod {
  id: string;
  type: string;
  last4: string;
  expiryMonth: number;
  expiryYear: number;
  isDefault: boolean;
}

interface Transaction {
  id: string;
  description: string;
  date: string;
  amount: number;
  status: string;
  type: string;
}

export default function PaymentsPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [billingAddress, setBillingAddress] = useState<any>(null);
  const [showAddCard, setShowAddCard] = useState(false);
  const [newCard, setNewCard] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardHolder: "",
  });
  const [addingCard, setAddingCard] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [methodsRes, transactionsRes, profileRes] = await Promise.all([
          fetch("/api/dashboard/payments/methods"),
          fetch("/api/dashboard/payments/transactions"),
          fetch("/api/dashboard/profile"),
        ]);

        if (methodsRes.ok) {
          setPaymentMethods(await methodsRes.json());
        }
        if (transactionsRes.ok) {
          setTransactions(await transactionsRes.json());
        }
        if (profileRes.ok) {
          setBillingAddress(await profileRes.json());
        }
      } catch (error) {
        console.error("Failed to fetch payment data", error);
        toast.error("Failed to load payment information");
      } finally {
        setLoading(false);
      }
    }

    if (session?.user) {
      fetchData();
    }
  }, [session]);

  const handleDeleteCard = async (id: string) => {
    if (!confirm("Are you sure you want to remove this card?")) return;

    try {
      const res = await fetch(`/api/dashboard/payments/methods?id=${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete card");

      setPaymentMethods(paymentMethods.filter((pm) => pm.id !== id));
      toast.success("Card removed successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove card");
    }
  };

  const handleAddCard = async (e: React.FormEvent) => {
    e.preventDefault();
    setAddingCard(true);

    // Simulate basic validation and processing
    try {
      // Extract dummy data
      const last4 = newCard.cardNumber.slice(-4) || "4242";
      const [month, year] = newCard.expiryDate.split("/");
      
      const payload = {
        type: "VISA", // Mocking type detection
        last4,
        expiryMonth: parseInt(month || "12"),
        expiryYear: parseInt("20" + (year || "25")),
      };

      const res = await fetch("/api/dashboard/payments/methods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to add card");

      const addedMethod = await res.json();
      setPaymentMethods([...paymentMethods, addedMethod]);
      setShowAddCard(false);
      setNewCard({ cardNumber: "", expiryDate: "", cvc: "", cardHolder: "" });
      toast.success("Payment method added successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add payment method");
    } finally {
      setAddingCard(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#c9a37e]" />
      </div>
    );
  }

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
                <button 
                    onClick={() => setShowAddCard(!showAddCard)}
                    className="flex items-center gap-2 text-sm font-medium text-[#c9a37e] hover:text-white transition-colors"
                >
                    {showAddCard ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    {showAddCard ? "Cancel" : "Add New Card"}
                </button>
            </div>
            
            {showAddCard && (
                <div className="mb-6 p-4 bg-[#0c1315] rounded-xl border border-white/10">
                    <form onSubmit={handleAddCard} className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-[#9da6b9] mb-1">Card Number</label>
                            <input 
                                type="text" 
                                placeholder="0000 0000 0000 0000"
                                className="w-full bg-[#1a1f21] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#c9a37e] outline-none"
                                value={newCard.cardNumber}
                                onChange={e => setNewCard({...newCard, cardNumber: e.target.value})}
                                maxLength={19}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-[#9da6b9] mb-1">Expiry Date (MM/YY)</label>
                                <input 
                                    type="text" 
                                    placeholder="MM/YY"
                                    className="w-full bg-[#1a1f21] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#c9a37e] outline-none"
                                    value={newCard.expiryDate}
                                    onChange={e => setNewCard({...newCard, expiryDate: e.target.value})}
                                    maxLength={5}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-[#9da6b9] mb-1">CVC</label>
                                <input 
                                    type="text" 
                                    placeholder="123"
                                    className="w-full bg-[#1a1f21] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-[#c9a37e] outline-none"
                                    value={newCard.cvc}
                                    onChange={e => setNewCard({...newCard, cvc: e.target.value})}
                                    maxLength={3}
                                    required
                                />
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            disabled={addingCard}
                            className="w-full bg-[#c9a37e] text-[#0c1315] font-bold py-2 rounded-lg hover:bg-[#b89574] transition-colors disabled:opacity-50"
                        >
                            {addingCard ? "Adding..." : "Save Card"}
                        </button>
                    </form>
                </div>
            )}

            <div className="grid gap-4">
                {paymentMethods.length === 0 && !showAddCard && (
                    <div className="text-center py-8 text-[#9da6b9]">
                        No payment methods saved. Add a card to get started.
                    </div>
                )}
                {paymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center justify-between p-4 bg-[#0c1315] border border-white/10 rounded-xl relative overflow-hidden group hover:border-[#c9a37e]/50 transition-colors">
                        {method.isDefault && (
                            <div className="absolute top-0 right-0 p-1.5 bg-[#c9a37e] rounded-bl-lg">
                                <CheckCircle className="w-3 h-3 text-[#0c1315]" />
                            </div>
                        )}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center">
                                <span className="font-bold text-white text-xs italic">{method.type}</span>
                            </div>
                            <div>
                                <p className="text-white font-medium">•••• •••• •••• {method.last4}</p>
                                <p className="text-xs text-[#9da6b9]">Expires {method.expiryMonth}/{method.expiryYear}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            {method.isDefault && <span className="text-xs font-medium text-[#c9a37e] hidden sm:block">Default</span>}
                            <button 
                                onClick={() => handleDeleteCard(method.id)}
                                className="text-[#9da6b9] hover:text-red-500 transition-colors p-2 hover:bg-white/5 rounded-lg"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
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
                        {transactions.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-[#9da6b9]">
                                    No transactions found.
                                </td>
                            </tr>
                        ) : (
                            transactions.map((tx) => (
                                <tr key={tx.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 text-white font-medium">{tx.description}</td>
                                    <td className="px-6 py-4 text-[#9da6b9]">{format(new Date(tx.date), "MMM d, yyyy")}</td>
                                    <td className="px-6 py-4 text-white">${tx.amount.toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                                            tx.status === "PAID" 
                                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                                                : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                                        }`}>
                                            {tx.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-[#c9a37e] hover:text-white transition-colors">
                                            <Download className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
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
                    <p className="text-white font-medium">{session?.user?.name || "User"}</p>
                    {billingAddress ? (
                        <>
                            <p>{billingAddress.address || "Address not set"}</p>
                            <p>{billingAddress.city ? `${billingAddress.city}, ` : ""}{billingAddress.state || ""}{billingAddress.postalCode ? ` ${billingAddress.postalCode}` : ""}</p>
                            <p>{billingAddress.country || "Country not set"}</p>
                        </>
                    ) : (
                        <p>Loading address...</p>
                    )}
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