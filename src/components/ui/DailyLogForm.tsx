"use client";

import { useState } from "react";
import { saveDailyLog } from "@/lib/actions/log.actions";

export default function DailyLogForm() {
  const [severity, setSeverity] = useState(3);
  const [triggerInput, setTriggerInput] = useState("");
  const [activeTriggers, setActiveTriggers] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddTrigger = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && triggerInput.trim()) {
      e.preventDefault();
      if (!activeTriggers.includes(triggerInput.trim())) {
        setActiveTriggers([...activeTriggers, triggerInput.trim()]);
      }
      setTriggerInput("");
    }
  };

  const removeTrigger = (triggerToRemove: string) => {
    setActiveTriggers(activeTriggers.filter(t => t !== triggerToRemove));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = { severity, activeTriggers, notes };
    const result = await saveDailyLog(payload);
    
    if (result.success) {
      setSeverity(3);
      setActiveTriggers([]);
      setNotes("");
    } else {
      console.error(result.error);
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSave} className="w-full max-w-md p-8 rounded-3xl shadow-neu-flat bg-softBg space-y-6">
      <h2 className="text-2xl font-bold text-slate-700 tracking-tight">Log Today's Aura</h2>

      {/* Severity Selector */}
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-wider ml-1 text-slate-500">
          Severity (1-5)
        </label>
        <div className="flex justify-between gap-3">
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              type="button"
              key={level}
              onClick={() => setSeverity(level)}
              className={`flex-1 py-3 rounded-2xl font-bold transition-all duration-150 ${
                severity === level
                  ? "shadow-neu-pressed text-blue-500"
                  : "shadow-neu-flat text-slate-600 active:shadow-neu-pressed active:text-blue-500"
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Triggers */}
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-wider ml-1 text-slate-500">
          Triggers (Press Enter)
        </label>
        <input
          type="text"
          value={triggerInput}
          onChange={(e) => setTriggerInput(e.target.value)}
          onKeyDown={handleAddTrigger}
          className="w-full p-4 rounded-2xl bg-softBg shadow-neu-pressed outline-none focus:ring-2 focus:ring-blue-400/30 transition-all text-sm placeholder:text-slate-400"
          placeholder="e.g. lack of sleep, stress..."
        />
        {activeTriggers.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {activeTriggers.map((t) => (
              <span
                key={t}
                onClick={() => removeTrigger(t)}
                className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-500 shadow-neu-pressed bg-softBg hover:text-red-500 transition-colors"
              >
                {t} &times;
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Notes */}
      <div className="space-y-3">
        <label className="text-xs font-bold uppercase tracking-wider ml-1 text-slate-500">
          Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full p-4 rounded-2xl bg-softBg shadow-neu-pressed outline-none focus:ring-2 focus:ring-blue-400/30 transition-all text-sm placeholder:text-slate-400 min-h-[100px] resize-none"
          placeholder="Any specific symptoms or context?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 mt-2 rounded-2xl font-bold text-lg shadow-neu-flat active:shadow-neu-pressed transition-all duration-150 text-slate-600 active:text-blue-500 disabled:opacity-50"
      >
        {isSubmitting ? "Saving..." : "Save Log"}
      </button>
    </form>
  );
}