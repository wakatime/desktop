import os from 'os';
import path from 'path';

import Editor from './editor';

export default class Komodo extends Editor {
  public static getName(): string {
    return 'Komodo';
  }

  public get name(): string {
    return 'Komodo';
  }

  public get icon(): string {
    return '';
  }

  public async isEditorInstalled(): Promise<boolean> {
    return await this.isDirectory(this.appDirectory());
  }

  public async isPluginInstalled(): Promise<boolean> {
    return await this.isDirectory(this.pluginsDirectory());
  }

  public async installPlugin(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async uninstallPlugin(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public pluginsDirectory(): string {
    switch (os.platform()) {
      case 'win32': {
        const is64bit = process.arch === 'x64' || process.env.PROCESSOR_ARCHITEW6432;
        if (is64bit) {
          return '';
        }
        return '';
      }
      case 'darwin': {
        return path.join(
          os.homedir(),
          'Library/Application Support/KomodoEdit/11.1/XRE/extensions/wakatime@wakatime.com',
        );
      }
      case 'linux':
        return '';
      default:
        return null;
    }
  }

  public appDirectory(): string {
    switch (os.platform()) {
      case 'win32':
        return '';
      case 'darwin':
        return '/Applications/Komodo Edit 11.app/Contents';
      default:
        return null;
    }
  }
}