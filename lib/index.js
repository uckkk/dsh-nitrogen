import { defineTool } from "@deepseek-ai/dsh-tools";

const name = "氮元素";
const inject = ["tools"];

async function apply(ctx, _config) {
  ctx.tools.register(defineTool({
    name: "element_info",
    description: "返回氮元素（Nitrogen）完整资料：名称、元素符号、原子序数、相对原子质量、类别、族、周期、常温状态、电子构型。",
    parameters: {},
    output: { schema: { type: "object", additionalProperties: false, properties: { output: { type: "object", additionalProperties: false, properties: {"name":{"type":"string","description":"名称"},"symbol":{"type":"string","description":"元素符号"},"atomic_number":{"type":"number","description":"原子序数"},"atomic_mass":{"type":"number","description":"相对原子质量"},"category":{"type":"string","description":"类别"},"group":{"type":"number","description":"族"},"period":{"type":"number","description":"周期"},"phase":{"type":"string","description":"常温状态"},"electron_config":{"type":"string","description":"电子构型"}} } } }, render: (_a, v) => [{ type: "text", text: typeof v.output === "string" ? v.output : JSON.stringify(v.output, null, 2) }] },
    execute: async (args) => ((a) => ({ output: {"name":"Nitrogen（氮）","symbol":"N","atomic_number":7,"atomic_mass":14.007,"category":"非金属","group":15,"period":2,"phase":"气体","electron_config":"[He] 2s2 2p3"} }))(args),
  }));
  ctx.tools.register(defineTool({
    name: "element_field",
    description: "按字段名查询氮元素（Nitrogen）的单项资料（可用于流程取数）。",
    parameters: {"field":{"type":"string","required":true,"description":"要查询的字段名","enum":["name","symbol","atomic_number","atomic_mass","category","group","period","phase","electron_config"]}},
    output: { schema: { type: "object", additionalProperties: false, properties: { output: { type: "json" } } }, render: (_a, v) => [{ type: "text", text: typeof v.output === "string" ? v.output : JSON.stringify(v.output, null, 2) }] },
    execute: async (args) => ((a) => { const row = {"name":"Nitrogen（氮）","symbol":"N","atomic_number":7,"atomic_mass":14.007,"category":"非金属","group":15,"period":2,"phase":"气体","electron_config":"[He] 2s2 2p3"}; const labels = {"name":"名称","symbol":"元素符号","atomic_number":"原子序数","atomic_mass":"相对原子质量","category":"类别","group":"族","period":"周期","phase":"常温状态","electron_config":"电子构型"}; if (!(a.field in row)) return { output: null }; return { output: { field: a.field, label: labels[a.field], value: row[a.field] } }; })(args),
  }));
}

export { apply, inject, name };
