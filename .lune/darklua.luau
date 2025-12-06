local fs = require("@lune/fs")
local process = require("@lune/process")

local OUTPUT = "dist"
local DARKLUA_CONFIG = ".darklua.json"

local function process_darklua()
	if fs.isDir(OUTPUT) then
		fs.removeDir(OUTPUT)
	end

	fs.writeDir(OUTPUT)

	fs.copy("default.project.json", OUTPUT .. "/default.project.json")
	fs.copy("package.json", OUTPUT .. "/package.json")
	fs.copy("src", OUTPUT .. "/src")
	fs.copy("LICENSE", OUTPUT .. "/LICENSE")
	fs.copy("README.md", OUTPUT .. "/README.md")

	process.exec("rojo", {
		"sourcemap",
		OUTPUT .. "/default.project.json",
		"--output",
		"darklua-sourcemap.json",
	}, { stdio = "forward" })

	process.exec("darklua", {
		"process",
		"src",
		`{OUTPUT}/src`,
		`--config`,
		DARKLUA_CONFIG,
	}, { stdio = "forward" })
end

return {
	run = process_darklua,
	OUTPUT = OUTPUT,
}
