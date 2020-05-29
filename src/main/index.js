import { app, protocol, BrowserWindow } from 'electron'
import createProtocol from './createProtocol'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path')
    .join(__dirname, '/static')
    .replace(/\\/g, '\\\\')
}

let mainWindow

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  {
    scheme: 'rbpaper',
    privileges: {
      secure: true,
      standard: true
    }
  }
])

// const winURL = process.env.NODE_ENV === 'development'
//   ? `http://localhost:9081`
//   : `file://${__dirname}/index.html`

const winDevURL = `http://localhost:9081`

// 判断开发环境
const isDev = process.env.NODE_ENV === 'development'

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 720, // 997
    width: 1280,
    minHeight: 720,
    minWidth: 1280,
    frame: false, // 是否创建frameless窗口
    transparent: true, // 透明窗口，这个属性为true才能最大化
    thickFrame: true,
    titleBarStyle: 'hidden',
    fullscreenable: false, // 是否允许全屏
    center: true, // 是否出现在屏幕居中的位置
    minimizable: true,
    maximizable: true,
    fullscreen: false,
    resizable: true, // 是否允许拉伸大小
    useContentSize: true,
    // autoHideMenuBar: true,
    // backgroundColor: '#009cff',
    webPreferences: {
      // backgroundThrottling: false // 当页面被置于非激活窗口的时候是否停止动画和计时器
      nodeIntegration: true,
      // contextIsolation: false,
      // webviewTag: true,
      webSecurity: false,
      devTools: isDev
    }
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(winDevURL)
  } else {
    createProtocol('rbpaper')
    mainWindow.loadURL('rbpaper://./index.html')
  }

  // mainWindow.webContents.openDevTools({mode: 'detach'}) // 是否打开控制台
  // 在DOM ready之后再打开devtools，试图解决控制台因devtools报的错，但是没用。devtools切到network页面就会弹一堆错误提示，忽略就好
  mainWindow.webContents.once('dom-ready', () => {
    if (isDev) {
      mainWindow.webContents.openDevTools({ mode: 'detach' })
    }
  })
  mainWindow.on('resize', () => {
    mainWindow.webContents.send('resize')
  })
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
