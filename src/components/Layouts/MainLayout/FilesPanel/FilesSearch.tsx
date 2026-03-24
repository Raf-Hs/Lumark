import { useState } from 'react';
import { SquarePenIcon } from 'lucide-react';
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';

const FilesSearch = () => {
  const [isAddingFile, setIsAddingFile] = useState(false);

  const handleAddFileClick = () => {
    setIsAddingFile(true);
  };

  return (
    isAddingFile ? (
      <div className="flex flex-col items-start gap-1">
        <Input
          key="file-name-input"
          placeholder="File name"
          rounded="rounded"
        />
        <div className="flex items-center gap-1 w-full justify-end">
          <Button
            size="sm"
            variant="success"
          >
            Add
          </Button>
          <Button
            size="sm"
            variant="danger"
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
    )
  );
};

export default FilesSearch;
