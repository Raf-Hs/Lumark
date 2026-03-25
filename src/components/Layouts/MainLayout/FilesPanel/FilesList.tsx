import { useAppContext } from '../../../../contexts/AppProvider';

const FilesList = () => {
  const { files } = useAppContext();

  const filesContent = (
    files.map((file) => (
      <div key={file.file_name} className="flex flex-col gap-y-0.5 p-2 hover:bg-gray-bg-hover cursor-pointer rounded-xl relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-border-color/50 after:content-['']">
        <h3 className="font-medium">{file.file_name}</h3>
        <p className="text-sm text-muted-text">
          Created: {new Date(Number(file.date_created)).toLocaleDateString()}
        </p>
      </div>
    ))
  );

  return (
    <div className="mt-1">
      {filesContent.length > 0 ? filesContent : <div>No files found.</div>}
    </div>
  );
};

export default FilesList;
