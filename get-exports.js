const fs = require("fs");
const path = require("path");

// 1. Находим все директории ui в проекте
function findUiDirectories(startPath) {
	let uiDirs = [];

	function scanDirectory(directory) {
        const files = fs.readdirSync(directory);

        files.forEach(file => {
            const fullPath = path.join(directory, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                if (file === "ui") {
                    uiDirs.push(fullPath);
                }
                scanDirectory(fullPath); // Рекурсивный поиск
            }
        });
    }

    scanDirectory(startPath);
    return uiDirs;
}

// 2. Создаем index.ts в ui директории
function createUiIndexFile(uiPath) {
    const components = fs.readdirSync(uiPath)
        .filter(file => {
            const fullPath = path.join(uiPath, file);
            return fs.statSync(fullPath).isDirectory();
        });

    if (components.length === 0) return;

    const content = components
        .map(component => `export * from "./${component}";`)
        .join("\n") + "\n";

    fs.writeFileSync(path.join(uiPath, "index.ts"), content);
    console.log(`Created index.ts in ${uiPath}`);

    // 3. Создаем index.ts для PascalCase компонентов
    components.forEach(component => {
        if (/^[A-Z][a-zA-Z0-9]*$/.test(component)) {
            const componentDir = path.join(uiPath, component);
            const files = fs.readdirSync(componentDir);

            const pascalCaseFiles = files.filter(file => {
                return /^[A-Z][a-zA-Z0-9]*\.(ts|tsx|js|jsx)$/.test(file);
            });

						for (const file of pascalCaseFiles) {
							 const fileBase = path.basename(file, path.extname(file));
                if (fileBase === component) continue; // Не создаем для самого компонента

                const fileDir = path.join(componentDir, path.dirname(file));
                const indexPath = path.join(fileDir, "index.ts");

                const exportContent = `export * from "./${fileBase}";\n`;

                if (!fs.existsSync(indexPath) ||
                    !fs.readFileSync(indexPath, "utf8").includes(exportContent)) {
                    fs.writeFileSync(indexPath, exportContent);
                    console.log(`Created index.ts in ${fileDir}`);
                }
						}


        }
    });
}

// Запускаем скрипт от корня проекта
const projectRoot = path.resolve(__dirname);
const uiDirectories = findUiDirectories(projectRoot);
console.log(uiDirectories);


if (uiDirectories.length === 0) {
    console.log("No ui directories found");
} else {
    uiDirectories.forEach(createUiIndexFile);
    console.log("Done!");
}