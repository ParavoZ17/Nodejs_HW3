import { mkdir, rmdir } from "node:fs/promises";
import path from "node:path";

const folderPath = path.resolve("myFolder");

async function handleFolder() {
  try {
    await mkdir(folderPath);
    console.log("Каталог 'myFolder' успішно створений!");
  } catch (err) {
    console.error("Помилка при створенні каталогу:", err.message);
    return;
  }

  try {
    await rmdir(folderPath);
    console.log("Каталог 'myFolder' успішно видалений!");
  } catch (err) {
    console.error("Помилка при видаленні каталогу:", err.message);
  }
}

handleFolder();
