import { SquarePenIcon } from 'lucide-react';
import Button from '../../../UI/Button/Button';
import Input from '../../../UI/Input/Input';

const FilesSearch = () => (
  <div className="flex items-center gap-1">
    <Input
      placeholder="Search"
      rounded="rounded"
    />
    <Button variant="ghost" size="square-icon" icon={<SquarePenIcon />} />
  </div>
);

export default FilesSearch;
