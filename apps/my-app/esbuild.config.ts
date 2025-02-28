import { build } from "esbuild";
import pkg from "./package.json" with { type: "json" };

// https://esbuild.github.io/api
await build({
	// main file, the one that will be executed
	entryPoints: ['src/index.ts'],

	// packages that should be imported from node_modules instead of bundled
	external: Object.keys(pkg.dependencies).filter(name => !name.startsWith("@repo/")),


	bundle: true, // creates a single file, needed to inline dependencies code
	format: 'esm', // output format
	outbase: 'src', // will generate files in dist that reflects the src directory structure
	outdir: 'dist',
	platform: "node",
	preserveSymlinks: true, // point source maps to the node_modules symlink instead of the relative path in the workspace
	splitting: true, // reduce size by not inlining files used by multiple entry points
	target: "node23",
});
