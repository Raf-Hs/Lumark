import { useState } from 'react';
import { invoke } from '@tauri-apps/api/core';
import { SquarePenIcon } from 'lucide-react';
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';

const FilesSearch = () => {
  const [isAddingFile, setIsAddingFile] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleAddFileClick = () => {
    setIsAddingFile(true);
  };

  const handleCancelAddFile = () => {
    setIsAddingFile(false);
    setFileName('');
  };

  const handleAddFile = async () => {
    try {
      if (!fileName.trim()) {
        return;
      }

      await invoke('add_file', { fileName: fileName.trim() });

      setIsAddingFile(false);
      setFileName('');
    } catch (error) {
      console.error('Error adding file:', error);
    }
  };

  const handleFileNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  };

  return (
    <>
      {isAddingFile ? (
        <div className="flex flex-col items-start gap-2">
          <Input
            key="file-name-input"
            placeholder="File name"
            rounded="rounded"
            value={fileName}
            onChange={handleFileNameChange}
          />
          <div className="flex items-center gap-1 w-full justify-end">
            <Button
              size="sm"
              variant="success"
              onClick={handleAddFile}
              disabled={!fileName.trim()}
            >
            Add
            </Button>
            <Button
              size="sm"
              variant="danger"
              onClick={handleCancelAddFile}
            >
            Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <Input
            key="file-search-input"
            placeholder="Search"
            rounded="rounded"
          />
          <Button
            variant="ghost"
            size="square-icon"
            icon={<SquarePenIcon />}
            onClick={handleAddFileClick}
          />
        </div>
      )}
    </>
  );
};

export default FilesSearch;
