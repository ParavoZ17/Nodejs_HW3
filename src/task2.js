import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

const filePath = path.resolve("info.txt");

async function handleFile() {
  try {
    await writeFile(filePath, "Node.js is awesome!", "utf-8");
    console.log("Файл 'info.txt' успішно створений і записаний!");
  } catch (err) {
    console.error("Помилка при записі у файл:", err.message);
    return;
  }

  try {
    const data = await readFile(filePath, "utf-8");
    console.log("Вміст файлу 'info.txt':");
    console.log(data);
  } catch (err) {
    console.error("Помилка при читанні файлу:", err.message);
  }
}

handleFile();
