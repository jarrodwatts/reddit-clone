/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  contents: string,
  image?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  contents: string,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
  comments?: ModelCommentConnection | null,
  votes?: ModelVoteConnection | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  postID: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  post?: Post | null,
  owner?: string | null,
};

export type ModelVoteConnection = {
  __typename: "ModelVoteConnection",
  items?:  Array<Vote | null > | null,
  nextToken?: string | null,
};

export type Vote = {
  __typename: "Vote",
  id: string,
  vote: string,
  postID: string,
  createdAt: string,
  updatedAt: string,
  post?: Post | null,
  owner?: string | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  contents?: string | null,
  image?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  postID: string,
  content: string,
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateVoteInput = {
  id?: string | null,
  vote: string,
  postID: string,
};

export type ModelVoteConditionInput = {
  vote?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelVoteConditionInput | null > | null,
  or?: Array< ModelVoteConditionInput | null > | null,
  not?: ModelVoteConditionInput | null,
};

export type UpdateVoteInput = {
  id: string,
  vote?: string | null,
  postID?: string | null,
};

export type DeleteVoteInput = {
  id: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null,
  vote?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelVoteFilterInput | null > | null,
  or?: Array< ModelVoteFilterInput | null > | null,
  not?: ModelVoteFilterInput | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items?:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items?:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items?:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateVoteMutationVariables = {
  input: CreateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type CreateVoteMutation = {
  createVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateVoteMutationVariables = {
  input: UpdateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type UpdateVoteMutation = {
  updateVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteVoteMutationVariables = {
  input: DeleteVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type DeleteVoteMutation = {
  deleteVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items?:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        contents: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        votes?:  {
          __typename: "ModelVoteConnection",
          nextToken?: string | null,
        } | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetVoteQueryVariables = {
  id: string,
};

export type GetVoteQuery = {
  getVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotesQuery = {
  listVotes?:  {
    __typename: "ModelVoteConnection",
    items?:  Array< {
      __typename: "Vote",
      id: string,
      vote: string,
      postID: string,
      createdAt: string,
      updatedAt: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        contents: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
        comments?:  {
          __typename: "ModelCommentConnection",
          nextToken?: string | null,
        } | null,
        votes?:  {
          __typename: "ModelVoteConnection",
          nextToken?: string | null,
        } | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items?:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items?:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        postID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items?:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        createdAt: string,
        updatedAt: string,
        post?:  {
          __typename: "Post",
          id: string,
          title: string,
          contents: string,
          image?: string | null,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateVoteSubscription = {
  onCreateVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateVoteSubscription = {
  onUpdateVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteVoteSubscription = {
  onDeleteVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        items?:  Array< {
          __typename: "Comment",
          id: string,
          postID: string,
          content: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        items?:  Array< {
          __typename: "Vote",
          id: string,
          vote: string,
          postID: string,
          createdAt: string,
          updatedAt: string,
          owner?: string | null,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    owner?: string | null,
  } | null,
};
