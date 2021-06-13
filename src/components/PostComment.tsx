import { Grid, Paper, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import { Comment } from "../API";
import formatDatePosted from "../lib/formatDatePosted";

interface Props {
  comment: Comment;
}

export default function PostComment({ comment }: Props): ReactElement {
  console.log("comment:", comment);
  return (
    <Paper
      style={{ width: "100%", minHeight: 128, padding: 16, marginTop: 32 }}
      elevation={1}
    >
      <Grid container spacing={1} direction="column">
        <Grid item>
          <Typography variant="body1">
            <b>{comment.owner}</b> - {formatDatePosted(comment.createdAt)} hours
            ago
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2">{comment.content}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
