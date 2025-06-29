declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}

// 扩展 Window 接口以包含 electronAPI
declare global {
  interface Window {
    electronAPI: {
      preferences: {
        get: () => Promise<any>;
        set: (data: any) => Promise<any>;
        reset: () => Promise<any>;
      };
      theme: {
        setSource: (source: string) => Promise<void>;
      };
      shell: {
        openPath: (path: string) => Promise<{ success: boolean; error?: string }>;
      };
    };
  }
}

export {};
