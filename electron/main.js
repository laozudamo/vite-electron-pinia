// main.js
// 控制应用生命周期和创建原生浏览器窗口的模组
const { app, BrowserWindow, ipcMain, webContents } = require('electron')
const path = require('path')
const fs = require('fs');
const si = require('systeminformation');
const { randomBytes } = require('crypto');

const NODE_ENV = process.env.NODE_ENV

let content = ""

function createWindow () {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, './preload.js')
    }
  })

  // 加载 index.html
  mainWindow.loadURL(
    NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../dist/index.html')}`
  );

  content = mainWindow.webContents
  // 打开开发工具
  // mainWindow.webContents.openDevTools()
}

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


function getAllDiskPaths () {
  // 获取根目录的路径
  const rootPath = process.platform === 'win32' ? '\\' : '/';

  // 使用完整的磁盘路径读取根目录
  const fullPath = path.resolve(rootPath);

  fs.readdir(fullPath, (err, files) => {
    if (err) {
      console.error('Failed to read directory:', err);
      return;
    }
    // 过滤出磁盘路径
    const diskPaths = files.map(file => path.join(fullPath, file))
      .filter(file => fs.existsSync(file) && fs.statSync(file).isDirectory());

    console.log('Disk Paths:', diskPaths);

    const sizeInMB = 200;  // 随机字符串的大小（以MB为单位）

    const filePath = diskPaths[14] + '/file.txt';  // 文件路径
    const content = 'This is the content of the file.';  // 文件内容


    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error('Failed to create file:', err);
        return;
      }
      console.log('File created successfully.');
    });

    writeRandomStringToFile(filePath, sizeInMB);
  });
}


// 磁盘状态
async function getDiskUsage () {
  try {
    let res = await si.fsSize()
    return res
  } catch (error) {
    console.log("Failed to get disk usage")
  }
}

async function getMemory(params) {
  try {
    let res = await si.mem()
    return res
  } catch (error) {
    console.log("Failed to get disk usage")
  }
}

async function getIo(params) {
  try {
    let res = await si.disksIO()
    return res
  } catch (error) {
    console.log("Failed to get disk usage")
  }
}

async function getFs(params) {
  try {
    let res = await si.fsStats()
    return res
  } catch (error) {
    console.log("Failed to get disk usage")
  }
}

async function dl(params) {
  try {
    let res = await si.diskLayout()
    return res
  } catch (error) {
    console.log("Failed to get disk usage")
  }
}

// 生成指定大小的随机字符串
function generateRandomString (sizeInBytes) {
  const buffer = randomBytes(sizeInBytes);
  return buffer.toString('hex');
}

// 生成随机大小的字符串并写入文件
function writeRandomStringToFile (filePath, sizeInMB) {
  const sizeInBytes = sizeInMB * 1024 * 1024;
  const randomString = generateRandomString(sizeInBytes);

  fs.writeFile(filePath, randomString, (err) => {
    if (err) {
      console.error('Failed to write file:', err);
      return;
    }
    console.log('File written successfully.');
  });
}


ipcMain.on('write', (event, msg) => {
  getAllDiskPaths()
})


setInterval(async () => {
  let status = await getFs()
  
  let str =  JSON.stringify(status)
  
  content.send("disk-info", str)
}, 1000);

