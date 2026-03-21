import Editor from './components/Editor/Editor.tsx';
import Input from './components/UI/Input/Input.tsx';

const App = () => (
  <div className="bg-surface text-text-color">
    <div className="p-3">
      <Input wrapperClassName="max-w-xl" error="aaa" />

    </div>
    <Editor />
  </div>
);

export default App;
