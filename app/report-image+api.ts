import { ExpoRequest } from "expo-router/server";
import fs from "fs";
import path from "path";

const LOG_FILE = path.join(process.cwd(), "image_issues_log.json");

export async function POST(request: ExpoRequest) {
  try {
    const body = await request.json();
    const { name, issue, id } = body;

    let logs = [];
    if (fs.existsSync(LOG_FILE)) {
      try {
        const fileContent = fs.readFileSync(LOG_FILE, "utf8");
        logs = JSON.parse(fileContent);
      } catch (e) {
        console.error("Error reading log file", e);
        logs = [];
      }
    }

    // Add new log if not already recent duplicate
    const timestamp = new Date().toISOString();
    logs.push({ id, name, issue, timestamp });

    fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
    console.log(`[API] Issue logged for ${name}`);

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error writing log:", error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
