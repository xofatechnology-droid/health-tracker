import { saveDailyLog } from '@/lib/actions';

// Inside your DailyLogForm component...
const handleSave = async () => {
  const payload = { severity, activeTriggers, notes };
  
  const result = await saveDailyLog(payload);
  
  if (result.success) {
    // Optionally clear the form or show a Neumorphic success toast here
    console.log("Saved successfully!", result.data);
  } else {
    console.error(result.error);
  }
};