import { SearchIcon } from 'lucide-react';
import Editor from './components/Editor/Editor.tsx';
import Input from './components/UI/Input/Input.tsx';

const App = () => (
  <div className="bg-surface text-text-color">
    <div className="p-3 space-y-4">
      <Input wrapperClassName="max-w-xl" error="aaa" icon={<SearchIcon />} />
      <Input wrapperClassName="max-w-xl" icon={<SearchIcon />} />
      <Input wrapperClassName="max-w-xl" icon={<SearchIcon />} iconPosition="left" />
      <Input wrapperClassName="max-w-xl" size="md" icon={<SearchIcon />} iconPosition="left" />
      <Input wrapperClassName="max-w-xl" size="lg" icon={<SearchIcon />} iconPosition="left" />
      <Input wrapperClassName="max-w-xl" size="xl" icon={<SearchIcon />} iconPosition="left" />
      <Input wrapperClassName="max-w-xl" size="xs" icon={<SearchIcon />} iconPosition="left" />

    </div>
    <Editor />
  </div>
);

export default App;
