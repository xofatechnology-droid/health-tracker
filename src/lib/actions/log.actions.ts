"use server";

import prisma from "./prisma";
import { revalidatePath } from "next/cache";

export async function saveDailyLog(formData: {
  severity: number;
  activeTriggers: string[];
  notes: string;
}) {
  try {
    // Note: Once auth is set up, you will pull the user ID from the session.
    // For testing the database connection, we are hardcoding a dummy user ID.
    const MOCK_USER_ID = "test-user-uuid-123"; 

    // Ensure the dummy user exists (you'd remove this check in production)
    await prisma.user.upsert({
      where: { id: MOCK_USER_ID },
      update: {},
      create: {
        id: MOCK_USER_ID,
        email: "test@example.com",
      },
    });

    // Create the log and nested triggers in one operation
    const log = await prisma.dailyLog.create({
      data: {
        userId: MOCK_USER_ID,
        severity: formData.severity,
        notes: formData.notes,
        triggers: {
          create: formData.activeTriggers.map((trigger) => ({
            name: trigger,
          })),
        },
      },
    });

    // Clear the router cache so the dashboard immediately reflects the new data
    revalidatePath("/log");
    
    return { success: true, data: log };
  } catch (error) {
    console.error("Failed to save log:", error);
    return { success: false, error: "Database transaction failed." };
  }
}