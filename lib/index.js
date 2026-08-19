import { defineTool } from "@deepseek-ai/dsh-tools";

const name = "氮元素";
const inject = ["tools"];

async function apply(ctx, _config) {
  ctx.tools.register(defineTool({
    name: "element_info",
    description: "返回元素 Nitrogen（氮，N）的原子序数、原子量与类别。",
    parameters: {},
    output: { schema: { type: "object", additionalProperties: false, properties: { output: { type: "json" } } }, render: (_a, v) => [{ type: "text", text: typeof v.output === "string" ? v.output : JSON.stringify(v.output, null, 2) }] },
    execute: async (args) => ((a) => ({ output: { name: "Nitrogen（氮）", symbol: "N", atomic_number: 7, atomic_mass: 14.007, category: "非金属" } }))(args),
  }));
}

export { apply, inject, name };
