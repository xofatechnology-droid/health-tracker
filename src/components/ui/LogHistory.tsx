import prisma from "@/lib/prisma";

export default async function LogHistory() {
  // Fetch the latest 10 logs for our mock user, including nested triggers
  const logs = await prisma.dailyLog.findMany({
    where: { userId: "test-user-uuid-123" },
    include: { triggers: true },
    orderBy: { date: "desc" },
    take: 10,
  });

  if (logs.length === 0) {
    return (
      <div className="w-full max-w-md mt-10 p-8 rounded-3xl shadow-neu-pressed bg-softBg text-center">
        <p className="text-slate-500 text-sm">No logs yet. Start tracking above!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mt-12 space-y-6">
      <h3 className="text-xl font-bold tracking-tight text-slate-700 px-2">
        Recent Logs
      </h3>
      
      <div className="space-y-6">
        {logs.map((log) => (
          // Neumorphic Extruded Card for each log
          <div key={log.id} className="p-6 rounded-3xl shadow-neu-flat bg-softBg space-y-4">
            
            <div className="flex justify-between items-center border-b border-white/20 pb-2">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                {new Date(log.date).toLocaleDateString(undefined, { 
                  weekday: 'short', month: 'short', day: 'numeric' 
                })}
              </span>
              <span className="text-xs font-bold bg-softBg shadow-neu-pressed text-blue-500 px-3 py-1 rounded-full">
                Severity: {log.severity}/5
              </span>
            </div>

            {/* Triggers rendered as small, recessed chips */}
            {log.triggers.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {log.triggers.map((trigger) => (
                  <span 
                    key={trigger.id} 
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 shadow-neu-pressed bg-softBg"
                  >
                    {trigger.name}
                  </span>
                ))}
              </div>
            )}

            {/* Notes Section */}
            {log.notes && (
              <p className="text-sm text-slate-500 bg-softBg shadow-neu-pressed p-4 rounded-xl">
                {log.notes}
              </p>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
}