import React from "react";
import { useDropzone } from "react-dropzone";
import { Grid, Typography } from "@material-ui/core";

interface Props {
  file: File;
  setFile: React.Dispatch<React.SetStateAction<File>>;
}

export default function ImageDropzone({ file, setFile }: Props) {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  return (
    <>
      {!file ? (
        <section
          className="container"
          style={{
            borderStyle: "dashed",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.5)",
            minHeight: 128,
          }}
        >
          <div
            {...getRootProps({ className: "dropzone" })}
            style={{ padding: 16 }}
          >
            <input {...getInputProps()} />
            <Typography variant="body1">
              Drag and drop the image you want to upload for your post.
            </Typography>
          </div>
        </section>
      ) : (
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h6">Your Image:</Typography>
          </Grid>
          <Grid item>
            <img
              src={URL.createObjectURL(file)}
              style={{ width: "auto", maxHeight: 320 }}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}
