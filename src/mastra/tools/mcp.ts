import { MCPClient } from "@mastra/mcp";

const mcp = new MCPClient({
    servers: {
        github: {
            url: new URL("https://api.githubcopilot.com/mcp"),
            requestInit: {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                },
            },
        },
        hackernews: {
            command: "npx",
            args: ["-y", "@devabdultech/hn-mcp-server"],
        },
    }
});

export const mcpTools = await mcp.listTools();

export const mcpToolsets = await mcp.listToolsets();