import { isentinel } from "@isentinel/eslint-config";

export default isentinel({
	formatters: {
		lua: false,
	},
	ignores: ["**/*", "!**/*.d.ts", "!eslint.config.ts", "!package.json", "!.gitignore"],
	type: "package",
});
