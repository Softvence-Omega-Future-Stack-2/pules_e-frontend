"use client";

import React from "react";
import { Trash2, X } from "lucide-react";

interface DeleteModalProps {
  name: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({ name, onClose, onConfirm }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8 relative text-center">
      <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"><X size={20} /></button>
      <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
        <Trash2 size={28} className="text-red-500" />
      </div>
      <h3 className="text-[#001F3F] font-bold text-lg mb-2">Delete Companion?</h3>
      <p className="text-[#6B7280] text-sm mb-7"><strong>{name}</strong> will be permanently removed.</p>
      <div className="flex gap-3">
        <button onClick={onClose} className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm font-semibold hover:bg-gray-50 cursor-pointer">Cancel</button>
        <button onClick={onConfirm} className="flex-1 py-3 rounded-xl bg-red-500 text-white text-sm font-bold hover:bg-red-600 cursor-pointer">Yes, Delete</button>
      </div>
    </div>
  </div>
);