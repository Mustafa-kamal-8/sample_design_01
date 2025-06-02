"use client";

import Link from "next/link";
import { FaUserShield } from "react-icons/fa";

export default function AdminButton() {
  return (
    <div className="relative group">
      {/* Admin Button */}
      <div className="flex items-center space-x-2 p-4 cursor-pointer hover:bg-muted rounded-md bg-card text-foreground">
        <FaUserShield className="text-primary text-2xl" />
        <p className="text-sm font-semibold">Admin</p>
      </div>

      {/* Dropdown Menu (Visible on Hover) */}
      <div className="absolute top-full left-0 mt-2 w-48 bg-card shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ul className="p-2">
          <li><Link href="/admin/admin-dashboard" className="block py-2 px-4 hover:bg-muted">Dashboard</Link></li>
            <li><Link href="/admin/courses" className="block py-2 px-4 hover:bg-muted">Courses</Link></li>
          <li><Link href="/admin/admin-appointment" className="block py-2 px-4 hover:bg-muted">Appointments</Link></li>
          <li><Link href="/admin/timing" className="block py-2 px-4 hover:bg-muted">My Timings</Link></li>
          <li><Link href="/admin/reviews" className="block py-2 px-4 hover:bg-muted">My Reviews</Link></li>
          <li><Link href="/admin/payments" className="block py-2 px-4 hover:bg-muted">Payment</Link></li>
          <li><Link href="/admin/accounts" className="block py-2 px-4 hover:bg-muted">Account Settings</Link></li>
          <li><Link href="/login" className="block py-2 px-4 hover:bg-red-500 text-red-600">Logout</Link></li>
        </ul>
      </div>
    </div>
  );
}
