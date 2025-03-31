// logger.ts
interface Logger {
    debug(message: string): void;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
  }
  
  abstract class Words {
    protected d: string[] = [];  // 受保护属性
    abstract read(count: number): string;
    abstract write(data: string): void;
    
    delete(idx: number): void {
      this.d.splice(idx, 1);
    }
  }
  
  class Drawer extends Words {
    read(count: number): string {
      return this.d[count];
    }
  
    write(data: string): void {
      this.d.push(data);
    }
  }