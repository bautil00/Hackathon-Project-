import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function LoginPage() {
  return (
    <div className="min-h-screen bg-[#1C2833] text-[#F4F6F6] font-['Inter'] flex flex-col items-center justify-center p-4">
      <Link to="/" className="absolute top-8 left-8 text-[#AAB7B8] hover:text-[#F4F6F6] transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-semibold">
        <ArrowLeft size={16} /> Back to Home
      </Link>
      <div className="w-full max-w-md bg-[#2E4053] border border-[#AAB7B8]/20 p-8 rounded-[1px] shadow-2xl">
        <h1 className="text-2xl font-semibold mb-2">Welcome Back</h1>
        <p className="text-[#AAB7B8] mb-8 text-sm">Sign in to your account</p>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-[#AAB7B8] font-semibold">Email</label>
            <input 
              type="email" 
              className="w-full bg-[#1C2833] border border-[#AAB7B8]/20 rounded-[1px] p-3 text-sm focus:outline-none focus:border-[#AAB7B8] transition-colors text-[#F4F6F6]" 
              placeholder="name@company.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-[#AAB7B8] font-semibold">Password</label>
            <input 
              type="password" 
              className="w-full bg-[#1C2833] border border-[#AAB7B8]/20 rounded-[1px] p-3 text-sm focus:outline-none focus:border-[#AAB7B8] transition-colors text-[#F4F6F6]" 
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-[#F4F6F6] text-[#1C2833] font-semibold py-3 rounded-[1px] mt-4 hover:bg-[#D5DBDB] transition-colors">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
