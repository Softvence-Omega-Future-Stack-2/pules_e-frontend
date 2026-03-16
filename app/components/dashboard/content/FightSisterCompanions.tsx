"use client";

import React, { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

import { DeleteModal } from "./DeleteModal";
import { AddEditModal, Companion } from "./AddEditModal";



const initialCompanions: Companion[] = [
  { id: 1, title: "Fertility Fight Sister", category: "Fertility", description: "Supporting your journey to motherhood with tracking, insights, and encouragement.", image: "/img/contentImg1.svg", status: "Published" },
  { id: 2, title: "Menopause Fight Sister", category: "Menopause", description: "Navigate this transition with confidence, tracking tools, and community support.", image: "/img/contentImg2.svg", status: "Published" },
  { id: 3, title: "Wellness Fight Sister", category: "Wellness", description: "Empowering your daily health journey with personalized guidance and motivation.", image: "/img/containerImg3.png", status: "Published" },
];

const categoryColors: Record<Companion["category"], string> = {
  Fertility: "bg-[#C9A96E] text-white",
  Menopause: "bg-[#c5a059] text-white",
  Wellness: "bg-[#7a9e7e] text-white",
  PCOS: "bg-[#9b8abf] text-white",
  Postpartum: "bg-[#e07b8a] text-white",
};

const CompanionCard: React.FC<{ companion: Companion; onEdit: () => void; onDelete: () => void }> = ({ companion, onEdit, onDelete }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
    <div className="relative h-52 w-full overflow-hidden bg-gray-100">
      <img src={companion.image} alt={companion.title} className="w-full h-full object-cover"
        onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x208/f8f1e9/c5a059?text=Fight+Sister"; }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <span className={`absolute bottom-10 left-3 text-[11px] font-bold px-3 py-1 rounded-full ${categoryColors[companion.category]}`}>{companion.category}</span>
      <h3 className="absolute bottom-3 left-3 right-3 text-white font-bold text-lg leading-tight drop-shadow">{companion.title}</h3>
    </div>
    <div className="p-4 flex-1 flex flex-col justify-between gap-4">
      <p className="text-sm text-[#6B7280] font-normal leading-relaxed">{companion.description}</p>
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${companion.status === "Published" ? "bg-emerald-400" : "bg-amber-400"}`} />
        <span className={`text-xs font-semibold ${companion.status === "Published" ? "text-emerald-600" : "text-amber-600"}`}>{companion.status}</span>
      </div>
      <div className="flex gap-2">
        <button onClick={onEdit} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 text-[#001F3F] text-sm font-semibold hover:bg-[#F8F1E9] cursor-pointer transition-colors">
          <Pencil size={14} /> Edit
        </button>
        <button onClick={onDelete} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-red-100 text-red-500 text-sm font-semibold hover:bg-red-50 cursor-pointer transition-colors">
          <Trash2 size={14} /> Delete
        </button>
      </div>
    </div>
  </div>
);

const FightSisterCompanionsPage: React.FC = () => {
  const [companions, setCompanions] = useState<Companion[]>(initialCompanions);
  const [addOpen, setAddOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<Companion | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Companion | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => { setToast(msg); setTimeout(() => setToast(null), 3000); };

  const handleAdd = (data: Partial<Companion>) => {
    setCompanions(prev => [...prev, { id: Date.now(), title: data.title!, category: data.category!, description: data.description || "", image: data.image || "/img/companion1.png", status: data.status || "Published" }]);
    setAddOpen(false);
    showToast("Companion added successfully!");
  };

  const handleEdit = (data: Partial<Companion>) => {
    setCompanions(prev => prev.map(c => c.id === editTarget?.id ? { ...c, ...data } as Companion : c));
    setEditTarget(null);
    showToast("Companion updated!");
  };

  const handleDelete = () => {
    setCompanions(prev => prev.filter(c => c.id !== deleteTarget?.id));
    setDeleteTarget(null);
    showToast("Companion deleted.");
  };

  return (
    <div className="py-8 relative">

      {toast && (
        <div className="fixed top-6 right-6 z-[100] bg-[#001F3F] text-white text-sm font-semibold px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-2">
          <span className="w-2 h-2 bg-[#c5a059] rounded-full" />{toast}
        </div>
      )}

      {addOpen && <AddEditModal mode="add" data={{ status: "Published" }} onClose={() => setAddOpen(false)} onSave={handleAdd} />}
      {editTarget && <AddEditModal mode="edit" data={editTarget} onClose={() => setEditTarget(null)} onSave={handleEdit} />}
      {deleteTarget && <DeleteModal name={deleteTarget.title} onClose={() => setDeleteTarget(null)} onConfirm={handleDelete} />}

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6 gap-4">
        <div className="flex flex-col md:flex-row gap-4 sm:items-center sm:justify-between mb-4">
          <div>
            <h2 className="text-[#001F3F] text-xl md:text-2xl font-bold">Fight Sister Companions</h2>
            <p className="text-[#6B7280] text-sm mt-1">Manage all companion content displayed in the mobile app</p>
          </div>
          <button
            onClick={() => setAddOpen(true)}
            className="flex w-full md:w-auto items-center gap-2 bg-gradient-to-b from-[#C9A96E] to-[#57431F] text-white px-5 py-3 rounded-xl text-sm font-bold shadow-md hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
          >
            <Plus size={16} /> Add New Companion
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companions.map(c => (
            <CompanionCard key={c.id} companion={c} onEdit={() => setEditTarget(c)} onDelete={() => setDeleteTarget(c)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FightSisterCompanionsPage;