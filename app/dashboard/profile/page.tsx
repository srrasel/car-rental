"use client";

import { User, Mail, Phone, MapPin, Lock, Save, Camera, ShieldCheck, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface UserProfile {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  phone: string | null;
  address: string | null;
  city: string | null;
  country: string | null;
  postalCode: string | null;
  role: string;
}

export default function ProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    state: "" // Note: state is not in DB schema yet, just local state for now or mapped to something else? Schema doesn't have state. I'll just keep it in UI but maybe not save it effectively if no field. Or I'll drop it. Let's drop "state" for now to match schema.
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [updatingPassword, setUpdatingPassword] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("/api/dashboard/profile");
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
          
          // Split name into first/last for the form
          const fullName = data.name || "";
          const [first, ...rest] = fullName.split(" ");
          const last = rest.join(" ");

          setFormData({
            firstName: first || "",
            lastName: last || "",
            email: data.email || "",
            phone: data.phone || "",
            address: data.address || "",
            city: data.city || "",
            country: data.country || "",
            postalCode: data.postalCode || "",
            state: "" 
          });
        }
      } catch (error) {
        console.error("Failed to fetch profile", error);
      } finally {
        setLoading(false);
      }
    }

    if (session?.user) {
      fetchProfile();
    }
  }, [session]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Reconstruct full name
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();

      const res = await fetch("/api/dashboard/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          country: formData.country,
          postalCode: formData.postalCode,
        }),
      });

      if (res.ok) {
        const updatedUser = await res.json();
        setProfile(updatedUser);
        alert("Profile updated successfully!");
        router.refresh(); // Refresh server components if any
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile", error);
      alert("An error occurred.");
    } finally {
      setSaving(false);
    }
  };

  const handleUpdatePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    
    setUpdatingPassword(true);
    try {
        const res = await fetch("/api/dashboard/profile/password", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                currentPassword: passwordData.currentPassword,
                newPassword: passwordData.newPassword,
            }),
        });

        if (res.ok) {
            alert("Password updated successfully!");
            setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
        } else {
            const msg = await res.text();
            alert(msg || "Failed to update password.");
        }
    } catch (error) {
        console.error(error);
        alert("An error occurred while updating password.");
    } finally {
        setUpdatingPassword(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <Loader2 className="w-8 h-8 animate-spin text-[#c9a37e]" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white font-[family-name:var(--font-epilogue)]">
          My Profile
        </h1>
        <p className="text-[#9da6b9] mt-2 text-base">
          Manage your personal information and account security.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column - Basic Info */}
        <div className="xl:col-span-8 flex flex-col gap-8">
          {/* Profile Header Card */}
          <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="relative h-24 w-24 rounded-full overflow-hidden bg-slate-700 border-4 border-[#0c1315]">
                <Image
                  src={profile?.image || "/assets/placeholder-user.jpg"}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-[#c9a37e] text-[#0c1315] p-1.5 rounded-full border-2 border-[#1a1f21] hover:bg-[#b89574] transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-white">{profile?.name || "User"}</h2>
              <p className="text-[#9da6b9] capitalize">{profile?.role} Member</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Identity Verified
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Mail className="w-3.5 h-3.5" />
                    Email Verified
                </span>
              </div>
            </div>
          </div>

          {/* Personal Information Form */}
          <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-[#c9a37e]" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-[#9da6b9]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    disabled
                    className="w-full bg-[#0c1315]/50 border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white/50 cursor-not-allowed focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-[#9da6b9]" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#0c1315] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-8">
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#c9a37e]" />
              Address Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Main St"
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Security & Save */}
        <div className="xl:col-span-4 flex flex-col gap-8">
           {/* Save Changes Widget */}
           <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-bold text-white mb-4">Account Actions</h3>
              <p className="text-sm text-[#9da6b9] mb-6">
                Make sure to save your changes after updating your information.
              </p>
              <div className="flex flex-col gap-3">
                 <button 
                  onClick={handleSave}
                  disabled={saving}
                  className="flex items-center justify-center gap-2 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] py-3 px-4 rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(201,163,126,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    {saving ? "Saving..." : "Save Changes"}
                </button>
                <button 
                  onClick={() => router.push("/dashboard")}
                  className="flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5 text-white py-3 px-4 rounded-lg font-medium text-sm transition-colors"
                >
                    Cancel
                </button>
              </div>
           </div>

           {/* Security Settings */}
          <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#c9a37e]" />
              Security
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="••••••••"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">New Password</label>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Enter new password"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm new password"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <button 
                  onClick={handleUpdatePassword}
                  disabled={updatingPassword}
                  className="w-full bg-[#c9a37e] text-[#0c1315] font-bold py-2 rounded-lg hover:bg-[#b89574] transition-colors disabled:opacity-50 mt-2"
              >
                  {updatingPassword ? "Updating..." : "Update Password"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
