import { FC } from 'react';
import { IMainLayoutProps } from './types';

const MainLayout: FC<IMainLayoutProps> = ({ children }) => (
  <div className="flex items-start">
    <aside className="max-w-64 w-full">
      files
    </aside>
    <main className="flex-1">
      {children}
    </main>
  </div>
);

export default MainLayout;
