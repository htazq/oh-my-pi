import { expect, test } from "bun:test";
import liveInstructions from "../src/live/prompts/live-instructions.md" with { type: "text" };
import advisorSystemPrompt from "../src/prompts/advisor/system.md" with { type: "text" };
import systemPrompt from "../src/prompts/system/system-prompt.md" with { type: "text" };

const bundledPrompts = {
	system: systemPrompt,
	advisor: advisorSystemPrompt,
	live: liveInstructions,
};

for (const [name, content] of Object.entries(bundledPrompts)) {
	test(`${name} prompt avoids <system-conventions>`, () => {
		expect(content).not.toContain("<system-conventions>");
	});
}
