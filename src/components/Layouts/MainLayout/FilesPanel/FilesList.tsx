import { useAppContext } from '../../../../contexts/AppProvider';

const FilesList = () => {
  const { files, handleFileSelect, selectedFile } = useAppContext();

  const handleFileClick = (fileName: string) => {
    console.log(`File clicked: ${fileName}`);
    handleFileSelect(fileName);
  };

  const filesContent = (
    files.map((file) => {
      const epoch = Number(file.date_created);

      return (
        <div
          key={file.file_name}
          className={`flex flex-col gap-y-0.5 p-2 hover:bg-gray-bg-hover cursor-pointer rounded-xl relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-border-color/50 after:content-[''] ${file.file_name === selectedFile ? 'bg-gray-bg-active' : ''}`}
          onClick={() => handleFileClick(file.file_name)}
        >
          <h3 className="font-medium">{file.file_name}</h3>
          <p className="text-sm text-muted-text">
          Created: <span>{new Date(epoch * 1000).toLocaleDateString()}</span>
          </p>
        </div>
      );
    })
  );

  return (
    <div className="mt-1">
      {filesContent.length > 0 ? filesContent : <div>No files found.</div>}
    </div>
  );
};

export default FilesList;
