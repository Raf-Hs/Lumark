import { FC } from 'react';
import { IMainLayoutProps } from './types';
import FilesPanel from './FilesPanel/FilesPanel';

const MainLayout: FC<IMainLayoutProps> = ({ children }) => (
  <div className="flex items-start">
    <aside className="max-w-64 w-full p-2 border-r border-border-color min-h-screen sticky top-0">
      <FilesPanel />
    </aside>
    <main className="flex-1">
      {children}
    </main>
  </div>
);

export default MainLayout;
