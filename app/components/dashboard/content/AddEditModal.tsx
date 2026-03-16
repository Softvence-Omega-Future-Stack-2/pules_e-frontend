"use client";

import React, { useState } from "react";
import { X, Upload, ChevronDown } from "lucide-react";

type Category = "Fertility" | "Menopause" | "Wellness" | "PCOS" | "Postpartum";
type Status = "Published" | "Draft";

export interface Companion {
  id: number;
  title: string;
  category: Category;
  description: string;
  image: string;
  status: Status;
}

const CATEGORIES: Category[] = ["Fertility", "Menopause", "Wellness", "PCOS", "Postpartum"];
const STATUSES: Status[] = ["Published", "Draft"];

interface CompanionModalProps {
  mode: "add" | "edit";
  data: Partial<Companion>;
  onClose: () => void;
  onSave: (d: Partial<Companion>) => void;
}

export const AddEditModal: React.FC<CompanionModalProps> = ({ mode, data, onClose, onSave }) => {
  const [form, setForm] = useState<Partial<Companion>>({ ...data });
  const set = (k: keyof Companion, v: string) => setForm((p) => ({ ...p, [k]: v }));
  const [dropdown, setDropdown] = useState({ category: false, status: false });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative">
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-gray-600">
          <X size={20} />
        </button>
        <h2 className="text-[#001F3F] text-xl font-bold mb-6">
          {mode === "add" ? "Add New Companion" : "Edit Companion"}
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#001F3F] mb-1 ">Title</label>
            <input
              type="text"
              value={form.title || ""}
              onChange={(e) => set("title", e.target.value)}
              placeholder="e.g. Fertility Fight Sister"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c5a059]/30"
            />
          </div>

      <div className="grid grid-cols-2 gap-3">

  {/* Category Dropdown */}
  <div className="relative">
    <label className="block text-xs font-semibold text-[#001F3F] mb-1 ">Category</label>
    <div className="relative">
      <button
        type="button"
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-left bg-white focus:outline-none focus:ring-2 focus:ring-[#c5a059]/30 flex justify-between items-center"
        onClick={() => setDropdown((prev) => ({ ...prev, category: !prev.category }))}
      >
        {form.category || "Select Category"}
        <span className="ml-2"><ChevronDown/></span>
      </button>

      {dropdown.category && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-40 overflow-auto">
          {CATEGORIES.map((c) => (
            <li
              key={c}
              className="px-4 py-2 text-sm hover:bg-[#f8f3ed] cursor-pointer"
              onClick={() => { set("category", c); setDropdown((prev) => ({ ...prev, category: false })); }}
            >
              {c}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>

  {/* Status Dropdown */}
  <div className="relative">
    <label className="block text-xs font-semibold text-[#001F3F] mb-1 ">Status</label>
    <div className="relative">
      <button
        type="button"
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-left bg-white focus:outline-none focus:ring-2 focus:ring-[#c5a059]/30 flex justify-between items-center"
        onClick={() => setDropdown((prev) => ({ ...prev, status: !prev.status }))}
      >
        {form.status || "Published"}
        <span className="ml-2"><ChevronDown/></span>
      </button>

      {dropdown.status && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-40 overflow-auto">
          {STATUSES.map((s) => (
            <li
              key={s}
              className="px-4 py-2 text-sm hover:bg-[#f8f3ed] cursor-pointer"
              onClick={() => { set("status", s); setDropdown((prev) => ({ ...prev, status: false })); }}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>

</div>

          <div>
            <label className="block text-xs font-semibold text-[#001F3F] mb-1 ">Description</label>
            <textarea
              value={form.description || ""}
              onChange={(e) => set("description", e.target.value)}
              rows={3}
              placeholder="Short description..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c5a059]/30 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#001F3F] mb-1 ">Image Path</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={form.image || ""}
                onChange={(e) => set("image", e.target.value)}
                placeholder="/img/companion.png"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c5a059]/30"
              />
              <button className="p-3 bg-[#F8F1E9] rounded-xl border border-[#C9A96E4D] text-[#c5a059] hover:bg-[#c5a059] hover:text-white transition-colors">
                <Upload size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-7">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm font-semibold hover:bg-gray-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(form)}
            disabled={!form.title || !form.category}
            className="flex-1 py-3 rounded-xl bg-gradient-to-b from-[#C9A96E] to-[#57431F] text-white text-sm font-bold hover:brightness-110 cursor-pointer disabled:opacity-50"
          >
            {mode === "add" ? "Add Companion" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
};