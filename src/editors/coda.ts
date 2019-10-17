import os from 'os';

import Editor from './editor';

export default class Coda extends Editor {
  public static getName(): string {
    return 'Coda';
  }

  public get name(): string {
    return 'Coda';
  }

  public get icon(): string {
    return '';
  }

  public async isEditorInstalled(): Promise<boolean> {
    try {
      this.appDirectory().some(async directory => {
        if (await this.isDirectory(directory)) {
          return true;
        }
      });
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public async isPluginInstalled(): Promise<boolean> {
    try {
      this.pluginsDirectory().some(async directory => {
        if (await this.isFile(directory)) {
          return true;
        }
      });
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public async installPlugin(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public async uninstallPlugin(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  private appDirectory(): string[] {
    switch (os.platform()) {
      case 'win32':
        return [];
      case 'darwin':
        return ['/Applications/Coda.app/Contents', '/Applications/Coda 2.app/Contents'];
      case 'linux':
        return [];
      default:
        return [];
    }
  }

  private pluginsDirectory(): string[] {
    switch (os.platform()) {
      case 'win32': {
        return [];
      }
      case 'darwin':
        return [
          '~/Library/Application Support/Coda/Plug-ins/WakaTime.codaplugin',
          '~/Library/Application Support/Coda 2/Plug-ins/WakaTime.codaplugin',
        ];
      case 'linux':
        return [];
      default:
        return [];
    }
  }
}
