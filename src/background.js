import { app, BrowserWindow, ipcMain, Menu, dialog, Tray } from 'electron';
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib';
import nodes7 from 'nodes7';
const { spawn } = require('child_process');
const path = require('path');
var appTray = null;
// electron 开启热更新
try {
  require('electron-reloader')(module,{});
} catch (_) {}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

global.sharedObject = {
  cookieStr: '',
  deptInfo: {}
}
let mainWindow = null;
app.on('ready', () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true
    },
    icon: './build/icons/icon.ico'
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools();
  } else {
    createProtocol('app');
    // Load the index.html when not in development
    mainWindow.loadURL('app://./index.html');
    // mainWindow.webContents.openDevTools();
  }
  ipcMain.on('logStatus', (event, arg) => {
    if(arg === 'login') {
      mainWindow.setResizable(true)
      mainWindow.maximize();
    } else {
      mainWindow.setSize(1100, 600);
      mainWindow.center();
      // mainWindow.setResizable(false)
    }
  })
  // 定义自定义事件
  ipcMain.on('close-window', function() {
    mainWindow.close();
  })
  // 定义自定义事件
  ipcMain.on('min-window', (event, arg) => {
    mainWindow.minimize();
  })
  // writeValuesToPLC
  ipcMain.on('writeValuesToPLC', (event, arg1, arg2) => {
    writeValuesToPLC(arg1, arg2);
  })
  // 定义自定义事件
  ipcMain.on('max-window', (event, arg) => {
    if (arg === 'max-window') {
      return mainWindow.maximize()
    }
    mainWindow.unmaximize()
  })
  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('mainWin-max', 'max-window')
  })
  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('mainWin-max', 'unmax-window')
  })
  mainWindow.on('close', (e) => {
    closeStatus = true;
    e.preventDefault(); //先阻止一下默认行为，不然直接关了，提示框只会闪一下
    dialog.showMessageBox({
      type: 'warning',
      title: '提醒！',
      message:'确认关闭程序吗？',
      buttons: ['关闭程序', '放入托盘','取消'],   //选择按钮，点击确认则下面的idx为0，取消为1
      cancelId: 2, //这个的值是如果直接把提示框×掉返回的值，这里设置成和“取消”按钮一样的值，下面的idx也会是1
    }).then(idx => {
      if (idx.response == 2) {
        e.preventDefault();
      } else if(idx.response == 0) {
        mainWindow = null
        app.exit();
      }else{
        mainWindow.setSkipTaskbar(true);
        mainWindow.hide();
      }
    })
  });
  setAppTray();
  if (process.env.NODE_ENV === 'production') {
    // 启动Java进程
    const java = spawn(path.join(__static, './jre', 'jre1.8.0_251', 'bin', 'java'), ['-jar', path.join(__static, './jarlib', 'pcs-deliver-middle.jar')]);
    // 监听Java进程的输出
    java.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });
  
    java.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
  
    // 当Java进程退出时关闭Electron应用程序
    java.on('exit', (code) => {
      app.quit();
    });
  }

  // 与PLC进行通讯
  // conn.initiateConnection( { port: 102, host: '192.168.0.10', rack: 0, slot: 1, debug: false }, (err) => {
  //   if (typeof(err) !== "undefined") {
  //     // We have an error. Maybe the PLC is not reachable.
  //     console.log(err);
  //     process.exit();
  //   }
  //   conn.setTranslationCB(function(tag) { return variables[tag]; }); // This sets the "translation" to allow us to work with object names

    // DB101.DBW2 加速器设定输送速度
    // conn.addItems('DBW2');
    // // DB101.DBW8 启动输送线
    // conn.addItems('DBW8');
    // // DB101.DBW10 停止输送线
    // conn.addItems('DBW10');
    // // DB101.DBW12 翻转
    // conn.addItems('DBW12');
    // // DB101.DBW14 回流模式
    // conn.addItems('DBW14');
    // // DB101.DBW22 纸箱宽度
    // conn.addItems('DBW22');
    // // DB101.DBW24 纸箱长度
    // conn.addItems('DBW24');

    // conn.addItems('DBW70');
    // 给DBW6写0或1
    // console.log('给DBW6写0')
    // conn.writeItems('DBW6', 0, valuesWritten); // This writes a single boolean item (one bit) to true
    // 读DBW6和DBW62
    // setInterval(() => {
    //   conn.readAllItems(valuesReady);
    // }, 50);
    // conn.readAllItems(valuesReady);
  // });

});

// 给PLC写值
function writeValuesToPLC(add, values) {
  console.log(add)
  console.log(values)
  conn.writeItems(add, values, valuesWritten); // This writes a single boolean item (one bit) to true
  // console.log(add +','+values)
}

function valuesWritten(anythingBad) {
  if (anythingBad) { console.log("SOMETHING WENT WRONG WRITING VALUES!!!!"); }
  console.log("成功写入！");
  doneWriting = true;
  if (doneReading) { process.exit(); }
}

var doneReading = false;
var doneWriting = false;
function valuesReady(anythingBad, values) {
  if (anythingBad) { console.log("SOMETHING WENT WRONG READING VALUES!!!!"); }
  console.log(values)
  // mainWindow.webContents.send('receivedMsg', values)
  doneReading = true;
  if (doneWriting) { process.exit(); }
}

let closeStatus = false;
var conn = new nodes7;

var variables = {
  TEST1: 'MR4',          // Memory real at MD4
  TEST2: 'M32.2',        // Bit at M32.2
  TEST3: 'M20.0',        // Bit at M20.0
  TEST4: 'DB1,REAL0.20', // Array of 20 values in DB1
  TEST5: 'DB1,REAL4',    // Single real value
  DBW6: 'DB1,REAL8',    // Another single real value
  TEST7: 'DB1,INT12.2',  // Two integer value array
  TEST8: 'DB1,LREAL4',   // Single 8-byte real value
  TEST9: 'DB1,X14.0',    // Single bit in a data block
  TEST10: 'DB1,X14.0.8',  // Array of 8 bits in a data block
  DBW2: 'DB101,INT2',
  DBW8: 'DB101,INT8',
  DBW10: 'DB101,INT10',
  DBW12: 'DB101,INT12',
  DBW14: 'DB101,INT14',
  DBW22: 'DB101,INT22',
  DBW24: 'DB101,INT24'
};
const setAppTray = () => {  
  // 系统托盘右键菜单
  var trayMenuTemplate = [
      {
          label: '退出',
          click: function() {
              app.quit()
          }
      }
  ]

  console.log()
  // 系统托盘图标目录
  appTray = new Tray(path.join(__static, './icon.ico'))

  // 图标的上下文菜单
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate)

  // 设置此托盘图标的悬停提示内容
  appTray.setToolTip('全自动束下输送系统(ccs)')

  // 设置此图标的上下文菜单
  appTray.setContextMenu(contextMenu)

  appTray.on("click", function(){
    //主窗口显示隐藏切换
    if(mainWindow.isVisible()){
      mainWindow.hide();
      mainWindow.setSkipTaskbar(true);
    }else{
      mainWindow.show();
      mainWindow.setSkipTaskbar(false);
    }
  })
}
