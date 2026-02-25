# Collec NYC

A web application for Collec NYC, built with [Next.js](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

---

## Prerequisites

Before you start, you need to install two things on your Windows computer: **Node.js** and **Git**.

### Step 1 — Install Node.js

Node.js is what lets you run the project on your computer.

1. Open your web browser and go to **https://nodejs.org/**
2. Click the big green button that says **"LTS"** (Long Term Support) to download the installer.
3. Open the downloaded file (it will be named something like `node-v22.x.x-x64.msi`).
4. The installer will open. Click **"Next"** on each screen — the default options are fine.
5. When it asks about tools for native modules, **check the box** that says "Automatically install the necessary tools" — then click **"Next"**.
6. Click **"Install"**, then **"Finish"** when it's done.
7. To make sure it worked, open **Command Prompt**:
   - Press `Windows key + R`, type `cmd`, and press Enter.
   - Type the following and press Enter:
     ```
     node --version
     ```
   - You should see a version number like `v22.x.x`. If you do, Node.js is installed.

### Step 2 — Install Git

Git is a tool that lets you download and manage the project's code.

1. Open your web browser and go to **https://git-scm.com/downloads/win**
2. The download should start automatically. If not, click **"Click here to download manually"**.
3. Open the downloaded file (it will be named something like `Git-2.x.x-64-bit.exe`).
4. The installer will open. Click **"Next"** on every screen — the default options are fine for beginners.
5. Click **"Install"**, then **"Finish"** when it's done.
6. To make sure it worked, open a **new** Command Prompt window:
   - Press `Windows key + R`, type `cmd`, and press Enter.
   - Type the following and press Enter:
     ```
     git --version
     ```
   - You should see something like `git version 2.x.x.windows.1`. If you do, Git is installed.

> **Important:** If `git --version` doesn't work, close all Command Prompt windows and open a new one. The computer needs a fresh window to recognize newly installed programs.

---

## Getting the Project

### Step 3 — Clone the Repository

"Cloning" means downloading a copy of the project to your computer.

1. Open **Command Prompt** (press `Windows key + R`, type `cmd`, press Enter).
2. Navigate to where you want to save the project. For example, to save it in your Documents folder, type:
   ```
   cd Documents
   ```
3. Download the project by typing:
   ```
   git clone https://github.com/chg073/Collec.git
   ```
4. Wait for it to finish. You'll see a message like `done`.
5. Move into the project folder:
   ```
   cd Collec\collec-nyc
   ```

---

## Running the Project

### Step 4 — Install Dependencies

The project needs some extra packages to work. This step downloads all of them automatically.

1. Make sure you are inside the `collec-nyc` folder (from Step 3 above).
2. Type the following and press Enter:
   ```
   npm install
   ```
3. Wait for it to finish. This may take a few minutes. You'll see a progress bar and then a message that says something like `added XXX packages`.

> **Note:** You only need to do this step once (or again if someone updates the project's dependencies).

### Step 5 — Start the Development Server

This will run the website on your computer so you can see it in your browser.

1. Type the following and press Enter:
   ```
   npm run dev
   ```
2. Wait a few seconds. You'll see a message like:
   ```
   ▲ Next.js 15.x.x
   - Local: http://localhost:3000
   ```
3. Open your web browser and go to **http://localhost:3000**
4. You should see the Collec NYC website running.

### Step 6 — Stop the Server

When you're done and want to stop the website:

1. Go back to the Command Prompt window where the server is running.
2. Press `Ctrl + C` on your keyboard.
3. If it asks "Terminate batch job (Y/N)?", type `Y` and press Enter.

---

## Other Useful Commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the website in development mode (with live reload) |
| `npm run build` | Builds the website for production |
| `npm run start` | Starts the production build |
| `npm run lint` | Checks the code for errors and style issues |

---

## Troubleshooting

**"node" is not recognized as an internal or external command**
- Close all Command Prompt windows and open a new one.
- If it still doesn't work, restart your computer and try again.
- If it *still* doesn't work, reinstall Node.js (Step 1) and make sure to check "Automatically install the necessary tools".

**"git" is not recognized as an internal or external command**
- Close all Command Prompt windows and open a new one.
- If it still doesn't work, restart your computer and try again.

**npm install is taking a very long time or showing errors**
- Make sure you have a stable internet connection.
- Try running it again — sometimes it fails the first time.
- If you see permission errors, try running Command Prompt as Administrator (right-click Command Prompt and select "Run as administrator").

**The website doesn't load at http://localhost:3000**
- Make sure the dev server is still running in Command Prompt (you should see the Next.js message).
- Try a different browser.
- Make sure nothing else is using port 3000.
