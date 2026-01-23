import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from 'fs';
import path from 'path';

// Load configuration
const CONFIG_PATH = path.resolve(process.cwd(), 'mcp-config.json');
let config = {
  security: { auth: { selectedType: 'none' } },
  general: { previewFeatures: false, disableAutoUpdate: false }
};

try {
  if (fs.existsSync(CONFIG_PATH)) {
    const rawConfig = fs.readFileSync(CONFIG_PATH, 'utf-8');
    config = JSON.parse(rawConfig);
    // console.error to avoid polluting stdout which is used for MCP transport
    console.error(`Loaded configuration from ${CONFIG_PATH}`);
  } else {
    console.error(`Configuration file not found at ${CONFIG_PATH}, using defaults.`);
  }
} catch (err) {
  console.error('Failed to load configuration:', err);
}

// Note: In a real environment, we'd import the actual project logic.
// For this MCP server, we'll provide a simplified bridge to the YemekMenu logic.

const server = new Server(
  {
    name: "yemekmenu-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

/**
 * List available tools.
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "list_foods",
        description: "List all available foods in the database",
        inputSchema: {
          type: "object",
          properties: {
            category: {
              type: "string",
              description: "Optional category filter",
            },
          },
        },
      },
      {
        name: "generate_menu",
        description: "Generate a balanced meal plan for a specific number of days",
        inputSchema: {
          type: "object",
          properties: {
            days: {
              type: "number",
              description: "Number of days for the plan (default 7)",
            },
            diet: {
              type: "string",
              enum: ["normal", "vegetarian", "vegan", "lowcarb", "glutenfree"],
              description: "Dietary preference",
            },
          },
          required: ["days"],
        },
      },
    ],
  };
});

/**
 * Handle tool calls.
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    if (name === "list_foods") {
      const foodsPath = path.resolve(process.cwd(), 'database', 'foods.json');
      const foods = JSON.parse(fs.readFileSync(foodsPath, 'utf-8'));
      
      let filtered = foods;
      if (args?.category) {
        filtered = filtered.filter((f: any) => f.category === args.category);
      }
      
      // Filtreleme seçenekleri
      if (args?.diet === "vegetarian") filtered = filtered.filter((f: any) => f.is_vegetarian);
      if (args?.diet === "vegan") filtered = filtered.filter((f: any) => f.is_vegan);
      if (args?.is_halal) filtered = filtered.filter((f: any) => f.is_halal);

      return {
        content: [
          {
            type: "text",
            text: `Found ${filtered.length} foods. Showing first 20:\n` + JSON.stringify(filtered.slice(0, 20), null, 2),
          },
        ],
      };
    } else if (name === "generate_menu") {
      const foodsPath = path.resolve(process.cwd(), 'database', 'foods.json');
      const foods = JSON.parse(fs.readFileSync(foodsPath, 'utf-8'));
      
      // Basitleştirilmiş mönü üretici (MCP için)
      const days = (args?.days as number) || 7;
      const menu = [];
      for (let i = 0; i < days; i++) {
        const randomFood = foods[Math.floor(Math.random() * foods.length)];
        menu.push({ day: i + 1, food: randomFood.name, category: randomFood.category });
      }

      return {
        content: [
          {
            type: "text",
            text: `Generated a ${days}-day plan:\n` + JSON.stringify(menu, null, 2),
          },
        ],
      };
    } else {
      throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error: any) {
    return {
      content: [
        {
          type: "text",
          text: `Error: ${error.message}`,
        },
      ],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("YemekMenu MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
